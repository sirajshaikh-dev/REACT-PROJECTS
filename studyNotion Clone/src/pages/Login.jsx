import Template from "../Components/Template";
import image from "../assets/login.png"

function Login({setIsLoggedIn }) {
  return (
    <div>
      <Template
      title="Welcome Back"
      description1="Build skills for today, tomorrow, and beyond."
      description2="Education to future-proof your career."
      image={image}
      formtype="login"
      setIsLoggedIn={setIsLoggedIn}
    />
     </div>
  )
}

export default Login;
