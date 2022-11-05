import { Box, SimpleGrid } from "@chakra-ui/react";
import DataTable from "components/table";
import { useQuery, gql } from "@apollo/client";
import { User } from "interfaces";

const GET_USERS = gql`
  query {
    users(skip: 0, take: 10) {
      _id
      userName
      fullName
    }
  }
`;

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

  const { loading, error, data } = useQuery(GET_USERS);
  console.log(data?.users);

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      {/* <SimpleGrid
        mb="20px"
        columns={{ sm: 1, md: 2 }}
        spacing={{ base: "20px", xl: "20px" }}
      > */}
      <DataTable columnsData={columns} tableData={[]} />
      {/* </SimpleGrid> */}
    </Box>
  );
}
