import { useMutation } from "@apollo/client";
import { useFormik } from "formik";
import { ADD_TEACHER, GET_TEACHERS, UPDATE_TEACHER } from 'service/teacher';

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
  teacher?: any;
}

export default function TeacherForm({ isOpen, onClose, isEdit, teacher }: Props) {
  const [createTeacher] = useMutation(ADD_TEACHER, {
    refetchQueries: [{ query: GET_TEACHERS }],
  });

  const [updateTeacher] = useMutation(UPDATE_TEACHER, {
    refetchQueries: [{ query: GET_TEACHERS }],
  });

  const emptyValues = {
    userName: "",
    fullName: "",
    email: "",
    password: "",
    address: "",
    phone: "",
    birthday: "",
    gender: "",
  };

  const formik = useFormik({
    initialValues: teacher || emptyValues,
    onSubmit: (values, { resetForm }) => {
      if (isEdit) {
        updateTeacher({
          variables: { _id: teacher._id, ...values },
        });
      } else {
        createTeacher({
          variables: { ...values },
        });
      }

      // resetForm();
      onClose();
    },
  });
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {isEdit ? "Cập nhật thông tin" : "Tạo giáo viên"}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={formik.handleSubmit}>
            <FormControl>
              <FormLabel>Tên người dùng</FormLabel>
              <Input
                type="text"
                id="userName"
                name="userName"
                onChange={formik.handleChange}
                value={formik?.values?.userName}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Họ và tên</FormLabel>
              <Input
                type="text"
                id="fullName"
                name="fullName"
                onChange={formik.handleChange}
                value={formik?.values?.fullName}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                id="email"
                onChange={formik.handleChange}
                value={formik?.values?.email}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Mật khẩu</FormLabel>
              <Input
                type="password"
                id="password"
                onChange={formik.handleChange}
                value={formik?.values?.password}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Địa chỉ</FormLabel>
              <Input
                type="address"
                id="address"
                onChange={formik.handleChange}
                value={formik?.values?.address}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Số điện thoại</FormLabel>
              <Input
                type="phone"
                id="phone"
                onChange={formik.handleChange}
                value={formik?.values?.phone}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Ngày sinh</FormLabel>
              <Input
                type="date"
                id="birthday"
                onChange={formik.handleChange}
                value={formik?.values?.birthday}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Giới tính</FormLabel>
              <Select
                placeholder="Chọn giới tính"
                id="gender"
                onChange={formik.handleChange}
                value={formik?.values?.gender}
              >
                <option value="nam">Nam</option>
                <option value="nữ">Nữ</option>
              </Select>
            </FormControl>
            <ModalFooter>
              <Button
                colorScheme="brand"
                mr={3}
                type="submit"
                onClick={() => formik.handleSubmit}
              >
                {isEdit ? "Cập nhật" : "Thêm mới"}
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
