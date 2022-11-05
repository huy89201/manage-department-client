import { Box, SimpleGrid } from "@chakra-ui/react";
import DataTable from 'components/table'

export default function UserPage() {
  const columns = [
    {
      Header: "abc",
      accessor: "name",
    },
    {
      Header: "PROGRESS",
      accessor: "progress",
    },
    {
      Header: "QUANTITY",
      accessor: "quantity",
    },
    {
      Header: "DATE",
      accessor: "date",
    },
  ];

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      {/* <SimpleGrid
        mb="20px"
        columns={{ sm: 1, md: 2 }}
        spacing={{ base: "20px", xl: "20px" }}
      > */}
        <DataTable
          columnsData={columns}
          tableData={[]}
        />
      {/* </SimpleGrid> */}
    </Box>
  );
}
