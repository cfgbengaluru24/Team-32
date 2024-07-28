import React, { useState, useRef } from 'react';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function PocConnectPage({ navigation }) {
    const [facing, setFacing] = useState('back');
    const [permission, requestPermission] = useCameraPermissions();
    const [photo, setPhoto] = useState(null);
    const cameraRef = useRef(null);


    if (!permission) {
        return <View />;
    }

    if (!permission.granted) {
        return (
            <View style={styles.container}>
                <Text style={styles.message}>We need your permission to show the camera</Text>
                <Button onPress={requestPermission} title="grant permission" />
            </View>
        );
    }

    function toggleCameraFacing() {
        if (facing === 'front') {
            setFacing('back');
        } else {
            setFacing('front');
        }
    }

    const takePicture = async () => {
        try {
            if (cameraRef.current) {
                const photo = await cameraRef.current.takePictureAsync();
                setPhoto(photo);
                navigation.navigate('displayPhotoPage', {
                    photoUri: photo.uri
                });
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <View style={styles.container}>
            <CameraView style={styles.camera} facing={facing} ref={cameraRef}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.shutterButton} onPress={takePicture}>
                    </TouchableOpacity>
                </View>
            </CameraView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    message: {
        textAlign: 'center',
        paddingBottom: 10,
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        margin: 64,
    },
    button: {
        flex: 1,
        alignSelf: 'top',
        alignItems: 'center',
        backgroundColor: '',
        width: 70,
        height: 70,
        borderRadius: 35,

    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    shutterButton: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 20,
        left: 100,
        alignSelf: 'center',
    },
    shutterText: {
        color: 'white',
        fontWeight: 'bold',
    },
});
