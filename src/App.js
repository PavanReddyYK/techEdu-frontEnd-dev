import { useSelector } from "react-redux";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Register";

function App() {
  // const toggle = useSelector((state) => state.user.toggle);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn/>}/>
          <Route path="/signUp" element={<Register/>}/>
          {/* <Route path="/signUp" element={<SignUp/>}/> */}
        </Routes>
      </BrowserRouter>
      {/* {!toggle ? <SignIn /> : <SignUp />} */}
    </>
  );
}

export default App;
