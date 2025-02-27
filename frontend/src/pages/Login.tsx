import FormContainer from "@/components/pages/_generic/container/FormContainer";
import LoginForm from "../components/pages/login/LoginForm";
import Navbar from "../components/pages/_generic/navbar/Navbar";

export default function Login() {
  return (
    <FormContainer>
      <Navbar showDropdown={false} />

      <div className="flex items-center justify-center p-8">
        <LoginForm />
      </div>
    </FormContainer>
  );
}
