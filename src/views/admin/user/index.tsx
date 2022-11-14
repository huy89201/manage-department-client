import { useState, useEffect } from "react";
import { Box, Button } from "@chakra-ui/react";
import DataTable from "components/table";
import { useQuery, useLazyQuery } from "@apollo/client";
import { useDisclosure } from "@chakra-ui/react";
import { UserForm } from "./userForm";
import { GET_USERS, GET_USER_BY_ID } from "service/user";
import { Spinner } from "@chakra-ui/react";
// import Pagination from "@mui/material/Pagination";
export default function UserPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isEdit, setIsEdit] = useState(false);

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

  if (loading) return <div>loading....</div>;

  const openFormAsEdit = async (id: String) => {
    try {
      onOpen();
      await getUserById({ variables: { _id: id } });
      setIsEdit(true);
    } catch (error) {
      console.log(error);
    }
  };

  const openFormAsAdd = () => {
    setIsEdit(false);
    onOpen();
  };

  console.log(isEdit);
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Button variant="brand" mb={"10px"} onClick={openFormAsAdd}>
        Tạo tài khoản
      </Button>
      <Box>
        <DataTable
          columnsData={columns}
          tableData={data.users ?? []}
          openForm={openFormAsEdit}
        />
      </Box>
      {lazyResults.loading ? (
        <Spinner />
      ) : (
        <UserForm
          isOpen={isOpen}
          onClose={onClose}
          user={lazyResults?.data?.user}
          isEdit={isEdit}
        />
      )}
    </Box>
  );
}
