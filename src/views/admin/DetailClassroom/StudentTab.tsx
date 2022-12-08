import { Box } from "@chakra-ui/react";
import { GET_CLASSROOM_BY_ID } from "service/classroom";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import StudentTable from "./StudentTable";

export default function StudentTab() {
  const params = useParams<any>();
  const { data, loading } = useQuery(GET_CLASSROOM_BY_ID, {
    variables: {
      _id: params.id,
    },
  });

  const columns = [
    {
      Header: "họ và tên",
      accessor: "fullName",
    },
    {
      Header: "điểm quá trình",
      accessor: "processScore",
    },
    {
      Header: "điểm giữa kì",
      accessor: "midtermScore",
    },
    {
      Header: "tổng điểm",
      accessor: "finalScore",
    },
    {
      Header: "",
      accessor: "action",
    },
  ];

  if (loading) return <div>loading....</div>;
  return (
    <Box>
      <Box>
        <StudentTable
          columnsData={columns}
          tableData={data.classroom.students ?? []}
        />
      </Box>
    </Box>
  );
}
