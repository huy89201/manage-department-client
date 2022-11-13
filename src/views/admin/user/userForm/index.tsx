import { useMutation } from "@apollo/client";
import { useFormik } from "formik";
import { ADD_USER, GET_USERS } from "service/user";

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
import { User } from "interfaces";
import { useState, useEffect } from "react";

interface Props {
  isOpen: boolean;
  onClose: any;
  initialValues?: any;
  isEdit?: boolean;
  user?: User;
}

export function UserForm({ isOpen, onClose, isEdit, user }: Props) {
  const [editUser, setEditUser] = useState<any>();

  const [createUser] = useMutation(ADD_USER, {
    refetchQueries: [{ query: GET_USERS }],
  });

  const emptyValues = {
    userName: "",
    fullName: "",
    email: "",
    password: "",
    role: "",
    address: "",
    phone: "",
    birthday: "",
    gender: "",
  };

  const formik = useFormik({
    initialValues: editUser ?? emptyValues,
    onSubmit: (values) => {
      createUser({
        variables: { ...values },
      });
      onClose();
    },
  });

  useEffect(() => {
    setEditUser({
      userName: user?.userName,
      fullName: user?.fullName,
      email: user?.email,
      password: user?.password,
      role: user?.role,
      address: user?.address,
      phone: user?.phone,
      birthday: user?.birthday,
      gender: user?.gender,
      // ...user,
    });
  }, [user]);

  // console.log(editUser);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Tạo tài khoản</ModalHeader>
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
                value={formik.values.userName}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Họ và tên</FormLabel>
              <Input
                type="text"
                id="fullName"
                name="fullName"
                onChange={formik.handleChange}
                value={formik.values.fullName}
                // defaultValue="123 456"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                id="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Mật khẩu</FormLabel>
              <Input
                type="password"
                id="password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Địa chỉ</FormLabel>
              <Input
                type="address"
                id="address"
                onChange={formik.handleChange}
                value={formik.values.address}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Số điện thoại</FormLabel>
              <Input
                type="phone"
                id="phone"
                onChange={formik.handleChange}
                value={formik.values.phone}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Ngày sinh</FormLabel>
              <Input
                type="date"
                id="birthday"
                onChange={formik.handleChange}
                value={formik.values.birthday}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Chức vụ</FormLabel>
              <Select
                placeholder="Chọn chức vụ"
                id="role"
                onChange={formik.handleChange}
                value={formik.values?.role}
              >
                <option value="admin">Quản lý</option>
                <option value="teacher">Giáo viên</option>
                <option value="student">Học sinh</option>
              </Select>
            </FormControl>
            <ModalFooter>
              <Button
                colorScheme="brand"
                mr={3}
                type="submit"
                onClick={() => formik.handleSubmit}
              >
                Thêm mới
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
