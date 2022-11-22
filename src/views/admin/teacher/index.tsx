import { useState, useEffect } from "react";
import { Box, Button } from "@chakra-ui/react";
import { useQuery, useLazyQuery } from "@apollo/client";
import { useDisclosure } from "@chakra-ui/react";
import  TeacherForm  from "./TeacherForm";
import { Spinner } from "@chakra-ui/react";
import TeacherTable from "./TeacherTable";
import { GET_TEACHERS, GET_TEACHER_BY_ID } from 'service/teacher';

export default function TeacherPage() {
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
      Header: "",
      accessor: "action",
    },
  ];

  const { loading, error, data } = useQuery(GET_TEACHERS);
  const [getTeacherById, lazyResults] = useLazyQuery(GET_TEACHER_BY_ID);

  if (loading) return <div>loading....</div>;

  const openFormAsEdit = async (id: String) => {
    try {
      onOpen();
      await getTeacherById({ variables: { _id: id } });
      setIsEdit(true);
    } catch (error) {
      console.log(error);
    }
  };

  const openFormAsAdd = () => {
    setIsEdit(false);
    onOpen();
  };
  
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Button variant="brand" mb={"10px"} onClick={openFormAsAdd}>
        Tạo giáo viên
      </Button>
      <Box>
        <TeacherTable
          columnsData={columns}
          tableData={data.teachers ?? []}
          openForm={openFormAsEdit}
        />
      </Box>
      {lazyResults.loading ? (
        <Spinner />
      ) : (
        <TeacherForm
          isOpen={isOpen}
          onClose={onClose}
          teacher={lazyResults?.data?.teacher}
          isEdit={isEdit}
        />
      )}
    </Box>
  );
}
