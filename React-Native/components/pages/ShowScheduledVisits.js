import * as React from 'react';
import { DataTable } from 'react-native-paper';

const ScheduledVisitsScreen = () => {
  const [page, setPage] = React.useState(0);
  const [numberOfItemsPerPageList] = React.useState([2, 3, 4]);
  const [itemsPerPage, onItemsPerPageChange] = React.useState(
    numberOfItemsPerPageList[0]
  );

  const [items] = React.useState([
   {
    Location:"Malout",
    Date:"26/07/2024"
   },
   {
    Location:"Lambi",
    Date:"26/07/2024"
   },
   
  ]);

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, items.length);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Location</DataTable.Title>
        <DataTable.Title Date>Date</DataTable.Title>
      </DataTable.Header>

      {items.slice(from, to).map((item) => (
        <DataTable.Row key={item.Location}>
          <DataTable.Cell>{item.Location}</DataTable.Cell>
          <DataTable.Cell Date>{item.Date}</DataTable.Cell>
          
        </DataTable.Row>
      ))}

    </DataTable>
  );
};

export default ScheduledVisitsScreen;