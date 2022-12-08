import { useState, useEffect } from "react";
import { Box, Button } from "@chakra-ui/react";
import ClassroomTable from "./ClassroomTable";
import { useQuery, useLazyQuery } from "@apollo/client";
import { useDisclosure } from "@chakra-ui/react";
import ClassroomForm from "./ClassroomForm";
import { Spinner } from "@chakra-ui/react";
import { GET_SUBJECT_BY_ID } from "service/subject";
import { GET_CLASSROOMS } from "service/classroom";

export default function ClassroomPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isEdit, setIsEdit] = useState(false);

  const columns = [
    {
      Header: "Môn học",
      accessor: "subject",
    },
    {
      Header: "Giáo viên",
      accessor: "teacher",
    },
    {
      Header: "Ngày học",
      accessor: "schedule",
    },
    {
      Header: "Ngày bắt đầu",
      accessor: "startDate",
    },
    {
      Header: "Ngày kết thúc",
      accessor: "endDate",
    },
    {
      Header: "",
      accessor: "action",
    },
  ];

  const { loading, error, data } = useQuery(GET_CLASSROOMS);
  const [getSubjectById, lazyResults] = useLazyQuery(GET_SUBJECT_BY_ID);

  if (loading) return <div>loading....</div>;

  const openFormAsEdit = async (id: String) => {
    try {
      onOpen();
      await getSubjectById({ variables: { _id: id } });
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
        Tạo lớp học
      </Button>
      <Box>
        <ClassroomTable
          columnsData={columns}
          tableData={data.classrooms ?? []}
        />
      </Box>
      {lazyResults.loading ? (
        <Spinner />
      ) : (
        <ClassroomForm isOpen={isOpen} onClose={onClose} />
      )}
    </Box>
  );
}
