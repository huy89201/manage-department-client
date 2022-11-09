import { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { useFormik } from "formik";

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
}

const ADD_USER = gql`
  mutation createUser(
    $userName: String!
    $fullName: String!
    $email: String!
    $password: String!
    $role: String!
    $address: String
    $phone: String
    $birthday: DateTime
    $gender: String
  ) {
    createUser(
      createUserInput: {
        userName: $userName
        fullName: $fullName
        email: $email
        password: $password
        role: $role
        address: $address
        phone: $phone
        birthday: $birthday
        gender: $gender
      }
    ) {
      _id
      userName
      fullName
      email
      password
    }
  }
`;

export function AddNewUserView({ isOpen, onClose }: Props) {
  const [createUser, { data, loading, error }] = useMutation(ADD_USER);

  const formik = useFormik({
    initialValues: {
      userName: "",
      fullName: "",
      email: "",
      password: "",
      role: "",
      address: "",
      phone: "",
      birthday: "",
      gender: "",
    },
    onSubmit: (values) => {
      console.log(values);
      createUser({
        variables: { ...values },
      });
    },
  });

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
                value={formik.values.role}
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
