import classes from "./style.module.scss";
import { Box, Typography, Container } from "@material-ui/core";

export default function LoginPage() {
  return (
    <Container className={classes["login"]} maxWidth="lg">
      <Typography>Đăng nhập</Typography>
      <div>huy dep trai</div>
    </Container>
  );
}
