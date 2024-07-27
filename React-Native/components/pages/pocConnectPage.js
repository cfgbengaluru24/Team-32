// import React, { useState, useEffect } from 'react';
// import { View, Text, TouchableOpacity, Image } from 'react-native';
// import { Camera } from 'expo-camera';

// const PocConnectPage = () => {
//     const [hasPermission, setHasPermission] = useState(null);
//     const [camera, setCamera] = useState(null);
//     const [photo, setPhoto] = useState(null);

//     useEffect(() => {
//         (async () => {
//             const { status } = await Camera.requestPermissionsAsync();
//             setHasPermission(status === 'granted');
//         })();
//     }, []);

//     const takePicture = async () => {
//         if (camera) {
//             const photoData = await camera.takePictureAsync();
//             setPhoto(photoData.uri);
//         }
//     };

//     if (hasPermission === null) {
//         return <View />;
//     }
//     if (hasPermission === false) {
//         return <Text>No access to camera</Text>;
//     }

//     return (
//         <View style={{ flex: 1 }}>
//             <Camera
//                 style={{ flex: 1 }}
//                 type={Camera.Constants.Type.back}
//                 ref={(ref) => setCamera(ref)}
//             >
//                 <View style={{ flex: 1, backgroundColor: 'transparent', flexDirection: 'row' }}>
//                     <TouchableOpacity style={{ flex: 0.1, alignSelf: 'flex-end', alignItems: 'center' }} onPress={takePicture}>
//                         <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>Take Picture</Text>
//                     </TouchableOpacity>
//                 </View>
//             </Camera>
//             {photo && <Image source={{ uri: photo }} style={{ flex: 1 }} />}
//         </View>
//     );
// };

// export default PocConnectPage;