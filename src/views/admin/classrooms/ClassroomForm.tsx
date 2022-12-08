import { useMutation, useQuery } from "@apollo/client";
import { useFormik } from "formik";
import { ADD_SUBJECT, GET_SUBJECTS, UPDATE_SUBJECT } from "service/subject";
import {
  GET_CREATE_CLASS_DATA,
  GET_CLASSROOMS,
  ADD_CLASSROOM,
} from "service/classroom";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  FormControl,
  FormLabel,
  Select,
} from "@chakra-ui/react";

interface Props {
  isOpen: boolean;
  onClose: any;
  initialValues?: any;
  isEdit?: boolean;
  subject?: any;
}

export default function ClassroomForm({
  isOpen,
  onClose,
}: Props) {
  const { data } = useQuery(GET_CREATE_CLASS_DATA);

  const [createClassroom] = useMutation(ADD_CLASSROOM, {
    refetchQueries: [{ query: GET_CLASSROOMS }],
  });

  const emptyValues = {
    teacherId: "",
    subjectId: "",
    schedule: "",
    startDate: "",
    endDate: "",
  };

  const formik = useFormik({
    initialValues: emptyValues,
    onSubmit: (values, { resetForm }) => {
      createClassroom({
        variables: { ...values },
      });

      onClose();
    },
  });

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Tạo lớp học</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={formik.handleSubmit}>
            <FormControl>
              <FormLabel>Môn học</FormLabel>
              <Select
                placeholder="Chọn môn học"
                id="subjectId"
                onChange={formik.handleChange}
                value={formik?.values?.subjectId}
              >
                {data?.subjects.map((item: any) => (
                  <option value={item._id} key={item._id}>
                    {item.name}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Giáo viên</FormLabel>
              <Select
                placeholder="Chọn giáo viên"
                id="teacherId"
                onChange={formik.handleChange}
                value={formik?.values?.teacherId}
              >
                {data?.teachers.map((item: any) => (
                  <option value={item._id} key={item._id}>
                    {item.fullName}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Ngày học</FormLabel>
              <Input
                type="text"
                id="schedule"
                onChange={formik.handleChange}
                value={formik?.values?.schedule}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Ngày bắt đầu</FormLabel>
              <Input
                type="date"
                id="startDate"
                onChange={formik.handleChange}
                value={formik?.values?.startDate}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Ngày kết thúc</FormLabel>
              <Input
                type="date"
                id="endDate"
                onChange={formik.handleChange}
                value={formik?.values?.endDate}
              />
            </FormControl>
            <ModalFooter>
              <Button
                colorScheme="brand"
                mr={3}
                type="submit"
                onClick={() => formik.handleSubmit}
              >
                Xác nhận
              </Button>
              <Button variant="ghost" onClick={onClose}>
                Hủy
              </Button>
            </ModalFooter>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
