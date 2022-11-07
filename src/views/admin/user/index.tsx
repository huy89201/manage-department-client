import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import DataTable from "components/table";
import { useQuery, gql } from "@apollo/client";
import { useDisclosure } from "@chakra-ui/react";
import Pagination from "@mui/material/Pagination";
import { useState } from "react";

const GET_USERS = gql`
  query {
    users(skip: 0, take: 10) {
      _id
      userName
      fullName
      email
      password
      role
      address
      phone
      gender
      birthday
      createdAt
      updatedAt
    }
    userCount
  }
`;

export default function UserPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const columns = [
    {
      Header: "họ và tên",
      accessor: "fullName",
    },
    {
      Header: "email",
      accessor: "email",
    },
    {
      Header: "số điện thoại",
      accessor: "phone",
    },
    {
      Header: "giới tính",
      accessor: "gender",
    },
    {
      Header: "ngày sinh",
      accessor: "birthday",
    },
    {
      Header: "địa chỉ",
      accessor: "address",
    },
    {
      Header: "chức vụ",
      accessor: "role",
    },
    {
      Header: "",
      accessor: "action",
    },
  ];

  const { loading, error, data } = useQuery(GET_USERS);

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  if (loading) return <h1>loading....</h1>;

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Button variant="brand" mb={"10px"} onClick={onOpen}>
        Tạo tài khoản
      </Button>
      <Box>
        <DataTable columnsData={columns} tableData={data.users} />
        {/* <Pagination count={11} page={page} onChange={handleChangePage} /> */}
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{/* <Lorem count={2} /> */}</ModalBody>
          <ModalFooter>
            <Button colorScheme="brand" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
