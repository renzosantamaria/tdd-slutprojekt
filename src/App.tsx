import { Route, Routes } from "react-router-dom";
import AddMeetup from "./pages/AddMeetup/AddMeetup";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import MeetupDetails from "./pages/MeetupDetails/MeetupDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/meetups/:id" element={<MeetupDetails />} />
        <Route path="/add-meetup" element={<AddMeetup />} />
      </Routes>
    </>
  );
}

export default App;
