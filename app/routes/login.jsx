import Authform from "../components/authform";

export default function Login() {
  return (
    <Authform
    title="Log in"
    showFullName={false}
    showPhone={false}
    buttonText="Log In"
    toggleText="Dont have an account?"
    toggleLinkText="Sign up"
    toggleLinkHref="/signup"
    />
  )
}
