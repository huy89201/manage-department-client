import { useState } from "react";
import { Box, Button } from "@chakra-ui/react";
import DataTable from "components/table";
import { useQuery, useLazyQuery } from "@apollo/client";
import { useDisclosure } from "@chakra-ui/react";
import { UserForm } from "./userForm";
import { GET_USERS, GET_USER_BY_ID } from "service/user";
// import Pagination from "@mui/material/Pagination";

export default function UserPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [editUser, setEditUser] = useState();

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
  const [getUserById, lazyResults] = useLazyQuery(GET_USER_BY_ID);

  if (loading) return <h1>loading....</h1>;

  const openFormAsEdit = async (id: String) => {
    onOpen();
    try {
      await getUserById({ variables: { _id: id } });
      setEditUser(lazyResults?.data?.user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Button variant="brand" mb={"10px"} onClick={onOpen}>
        Tạo tài khoản
      </Button>
      <Box>
        <DataTable
          columnsData={columns}
          tableData={data.users ?? []}
          openForm={openFormAsEdit}
        />
      </Box>
      <UserForm isOpen={isOpen} onClose={onClose} user={editUser} />
    </Box>
  );
}
