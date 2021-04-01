import Link from "next/link";
import {
  Container,
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  Icon,
  Text,
} from "./signin.styles";

const Signin = () => {
  return (
    <Container>
      <FormWrap>
        <Link href="/">
          <Icon>VB</Icon>
        </Link>
        <FormContent>
          <Form>
            <FormH1>Sign in to your account</FormH1>
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput id="email" type="email" required />
            <FormLabel htmlFor="password">Password</FormLabel>
            <FormInput id="password" type="password" required />
            <FormButton type="submit">Continue</FormButton>
            <Text>Forgot password</Text>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default Signin;
