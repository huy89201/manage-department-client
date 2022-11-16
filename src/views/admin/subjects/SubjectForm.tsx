import { useMutation } from "@apollo/client";
import { useFormik } from "formik";
import { ADD_SUBJECT, GET_SUBJECTS, UPDATE_SUBJECT } from "service/subject";
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

export function SubjectForm({ isOpen, onClose, subject, isEdit }: Props) {
  const [createSubject] = useMutation(ADD_SUBJECT, {
    refetchQueries: [{ query: GET_SUBJECTS }],
  });

  const [updateSubject] = useMutation(UPDATE_SUBJECT, {
    refetchQueries: [{ query: GET_SUBJECTS }],
  });

  const emptyValues = {
    name: "",
  };

  const formik = useFormik({
    initialValues: subject || emptyValues,
    onSubmit: (values, { resetForm }) => {
      if (isEdit) {
        updateSubject({
          variables: { ...values },
        });
      } else {
        createSubject({
          variables: { ...values },
        });
      }

      // resetForm();
      onClose();
    },
  });

  console.log(formik.initialValues);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Tạo môn học</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={formik.handleSubmit}>
            <FormControl>
              <FormLabel>Tên môn học</FormLabel>
              <Input
                type="text"
                id="name"
                name="name"
                onChange={formik.handleChange}
                value={formik?.values?.name}
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
