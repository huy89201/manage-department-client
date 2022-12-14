import { useMemo } from "react";
import { MdDelete, MdModeEditOutline } from "react-icons/md";
import Card from "components/card/Card";
import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/client";
import {
  Flex,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import { DELETE_CLASSROOM, GET_CLASSROOMS } from "service/classroom";

function ActionCells(props: { row: any }) {
  const { row } = props;
  const history = useHistory();
  const [removeClassroom, { data, loading, error }] = useMutation(
    DELETE_CLASSROOM,
    {
      refetchQueries: [{ query: GET_CLASSROOMS }],
    }
  );

  const handleOpenForm = () => {
    history.push(`/admin/detail-classroom-id=${row.original?._id}`);
  };

  const textColor = useColorModeValue("secondaryGray.900", "white");
  return (
    <Flex align="center">
      <Button display="flex" alignItems="center">
        <MdDelete style={{ color: "red" }} />
        <Text
          color={textColor}
          fontSize="sm"
          fontWeight="700"
          onClick={() =>
            removeClassroom({
              variables: { _id: row.original?._id },
            })
          }
        >
          Xóa
        </Text>
      </Button>
      <Button display="flex" alignItems="center">
        <MdModeEditOutline style={{ color: "green" }} />
        <Text
          color={textColor}
          fontSize="sm"
          fontWeight="700"
          onClick={handleOpenForm}
        >
          Cập nhật
        </Text>
      </Button>
    </Flex>
  );
}

export default function ClassroomTable(props: {
  columnsData: any;
  tableData: any;
  title?: string;
}) {
  const { columnsData, tableData, title } = props;

  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => tableData, [tableData]);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    initialState,
  } = tableInstance;

  initialState.pageSize = 10;

  const textColor = useColorModeValue("secondaryGray.900", "white");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");

  return (
    <Card
      flexDirection="column"
      w="100%"
      px="0px"
      overflowX={{ sm: "scroll", lg: "hidden" }}
      height="50vh"
    >
      <Flex px="25px" justify="space-between" mb="20px" align="center">
        <Text
          color={textColor}
          fontSize="22px"
          fontWeight="700"
          lineHeight="100%"
        >
          {title}
        </Text>
        {/* <Menu /> */}
      </Flex>
      <Table {...getTableProps()} variant="simple" color="gray.500" mb="24px">
        <Thead>
          {headerGroups.map((headerGroup, index) => (
            <Tr {...headerGroup.getHeaderGroupProps()} key={index}>
              {headerGroup.headers.map((column, index) => (
                <Th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  pe="10px"
                  key={index}
                  borderColor={borderColor}
                >
                  <Flex
                    justify="space-between"
                    align="center"
                    fontSize={{ sm: "10px", lg: "12px" }}
                    color="gray.400"
                  >
                    {column.render("Header")}
                  </Flex>
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {page.map((row, index) => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()} key={index}>
                {row.cells.map((cell: any, index) => {
                  let data;
                  if (cell.column.id === "action") {
                    data = <ActionCells row={row} />;
                  } else if (cell.column.Header === "DATE") {
                    data = (
                      <Text color={textColor} fontSize="sm" fontWeight="700">
                        {cell.value}
                      </Text>
                    );
                  } else if (cell.column.id === "subject") {
                    data = (
                      <Text color={textColor} fontSize="sm" fontWeight="700">
                        {cell.value.name}
                      </Text>
                    );
                  } else if (cell.column.id === "teacher") {
                    data = (
                      <Text color={textColor} fontSize="sm" fontWeight="700">
                        {cell.value.fullName}
                      </Text>
                    );
                  } else {
                    data = (
                      <Flex align="center">
                        <Text color={textColor} fontSize="sm" fontWeight="700">
                          {cell.value}
                        </Text>
                      </Flex>
                    );
                  }

                  return (
                    <Td
                      {...cell.getCellProps()}
                      key={index}
                      fontSize={{ sm: "14px" }}
                      minW={{ sm: "150px", md: "200px", lg: "auto" }}
                      borderColor="transparent"
                    >
                      {data}
                    </Td>
                  );
                })}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Card>
  );
}
