import { useState, useEffect } from "react";
import { Box, Button } from "@chakra-ui/react";
import ClassroomTable from "./ClassroomTable";
import { useQuery, useLazyQuery } from "@apollo/client";
import { useDisclosure } from "@chakra-ui/react";
import  ClassroomForm  from "./ClassroomForm";
import { Spinner } from "@chakra-ui/react";
import { GET_SUBJECTS, GET_SUBJECT_BY_ID } from "service/subject";

export default function SubjectPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isEdit, setIsEdit] = useState(false);

  const columns = [
    {
      Header: "Tên môn học",
      accessor: "name",
    },
    {
      Header: "",
      accessor: "action",
    },
  ];

  const { loading, error, data } = useQuery(GET_SUBJECTS);
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
        Tạo môn học
      </Button>
      <Box>
        <ClassroomTable
          columnsData={columns}
          tableData={data.subjects ?? []}
          openForm={openFormAsEdit}
        />
      </Box>
      {lazyResults.loading ? (
        <Spinner />
      ) : (
        <ClassroomForm
          isOpen={isOpen}
          onClose={onClose}
          subject={lazyResults?.data?.subject}
          isEdit={isEdit}
        />
      )}
    </Box>
  );
}
