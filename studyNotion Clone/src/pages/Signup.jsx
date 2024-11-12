import Template from "../Components/Template";
import image from "../assets/signup.png"

function Signup({setIsLoggedIn }) {
  return (
    <div>
     <Template
      title="Join the millions learning to code with StudyNotion for free"
      description1="Build skills for today, tomorrow, and beyond."
      description2="Education to future-proof your career."
      image={image}
      formtype="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
    </div>
  );
}

export default Signup;
