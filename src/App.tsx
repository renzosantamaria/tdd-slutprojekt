import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import MeetupDetails from "./pages/MeetupDetails/MeetupDetails";
import './App.css'

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/meetups/:id" element={<MeetupDetails />} />
      </Routes>
    </>
  );
}

export default App;
