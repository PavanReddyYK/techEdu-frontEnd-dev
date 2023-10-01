import { useSelector } from "react-redux";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const toggle = useSelector((state) => state.user.toggle);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn/>}/>
          <Route path="/signUp" element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>
      {/* {!toggle ? <SignIn /> : <SignUp />} */}
    </>
  );
}

export default App;
