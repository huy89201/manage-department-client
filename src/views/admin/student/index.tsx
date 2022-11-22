import { useState, useEffect } from "react";
import { Box, Button } from "@chakra-ui/react";
import { useQuery, useLazyQuery } from "@apollo/client";
import { useDisclosure } from "@chakra-ui/react";
import StudentForm  from "./StudentForm";
import { Spinner } from "@chakra-ui/react";
import StudentTable from "./StudentTable";
import { GET_STUDENTS, GET_STUDENT_BY_ID } from "service/student";

export default function StudentPage() {
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

  const { loading, error, data } = useQuery(GET_STUDENTS);
  const [getStudentById, lazyResults] = useLazyQuery(GET_STUDENT_BY_ID);

  if (loading) return <div>loading....</div>;

  const openFormAsEdit = async (id: String) => {
    try {
      onOpen();
      await getStudentById({ variables: { _id: id } });
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
        Tạo học sinh
      </Button>
      <Box>
        <StudentTable
          columnsData={columns}
          tableData={data.students ?? []}
          openForm={openFormAsEdit}
        />
      </Box>
      {lazyResults.loading ? (
        <Spinner />
      ) : (
        <StudentForm
          isOpen={isOpen}
          onClose={onClose}
          student={lazyResults?.data?.student}
          isEdit={isEdit}
        />
      )}
    </Box>
  );
}
