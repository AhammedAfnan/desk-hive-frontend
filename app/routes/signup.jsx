import Authform from "../components/authform";

export default function Signup() {
  return (
    <Authform
    title='Sign up'
    showFullName={true}
    showPhone={true}
    buttonText="Lets get started"
    toggleText='Already a member?'
    toggleLinkText='Log in'
    toggleLinkHref='/login'
     />
  )
}
