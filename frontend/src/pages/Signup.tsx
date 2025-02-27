import FormContainer from "@/components/pages/_generic/container/FormContainer";
import SignupForm from "../components/pages/signup/SignupForm";
import Navbar from "../components/pages/_generic/navbar/Navbar";

export default function Signup() {
  return (
    <FormContainer>
      <Navbar showDropdown={false} />

      <div className="flex items-center justify-center p-8">
        <SignupForm />
      </div>
    </FormContainer>
  );
}

// White color: #fffbef
//
