import { useMutation } from "@apollo/client";
import { useFormik } from "formik";
import { ADD_STUDENT, GET_STUDENTS, UPDATE_STUDENT } from "service/student";
import { UPDATE_SCORE, CREATE_SCORE } from "service/score";
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
} from "@chakra-ui/react";

interface Props {
  isOpen: boolean;
  onClose: any;
  initialValues?: any;
  isEdit?: boolean;
  score?: any;
}

export default function ScoreForm({ isOpen, onClose, isEdit, score }: Props) {
  const [createUser] = useMutation(ADD_STUDENT, {
    refetchQueries: [{ query: GET_STUDENTS }],
  });

  const [updateScore] = useMutation(UPDATE_SCORE, {
    refetchQueries: [{ query: GET_STUDENTS }],
  });

  const [createScore] = useMutation(CREATE_SCORE, {
    refetchQueries: [{ query: GET_STUDENTS }],
  });

  const emptyValues = {
    processScore: 0,
    midtermScore: 0,
  };
  //   console.log(score);
  const formik = useFormik({
    initialValues:
      {
        processScore: score.processScore,
        midtermScore: score.midtermScore,
      } || emptyValues,
    onSubmit: (values, { resetForm }) => {
      if (score?.scoreId) {
        updateScore({
          variables: {
            _id: score.scoreId,
            processScore: Number(values.processScore),
            midtermScore: Number(values.midtermScore),
          },
        });
      } else {
        createScore({
          variables: {
            subjectId: score.subjectId,
            studentId: score._id,
            processScore: Number(values.processScore),
            midtermScore: Number(values.midtermScore),
          },
        });
      }

      resetForm();
      onClose();
    },
  });
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Cập nhật điểm</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={formik.handleSubmit}>
            <FormControl>
              <FormLabel>Điểm quá trình</FormLabel>
              <Input
                type="text"
                id="processScore"
                name="processScore"
                onChange={formik.handleChange}
                value={formik?.values?.processScore}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Điểm giữa kì</FormLabel>
              <Input
                type="text"
                id="midtermScore"
                name="midtermScore"
                onChange={formik.handleChange}
                value={formik?.values?.midtermScore}
              />
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
