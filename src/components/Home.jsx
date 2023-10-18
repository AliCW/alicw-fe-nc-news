import { useContext } from "react" 
import Header from "./Header"
import HomeAnimation from "./HomeAnimation"
import { SignInContext } from "../contexts/SignInContext"

export default function Home() {
  const { setOpenSignIn } = useContext(SignInContext)

  const disableDropdown = () => {
      setOpenSignIn(false);
  };

  return (
    <div className="home" onClick={disableDropdown}>
      <Header />
      <HomeAnimation />
    </div>
    );
  };

