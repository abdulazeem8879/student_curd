import { Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/SideBar";
import HomePage from "./pages/HomePage";
import Addstudent from "./pages/Addstudent";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="flex  bg-gray-100flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-8 overflow-y-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-students" element={<Addstudent/>} />
        </Routes>
      </div>
      <Toaster/>
    </div>
  );
};

export default App;