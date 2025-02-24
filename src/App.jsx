import { Route, Routes } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage";
import Addstudent from "./pages/Addstudent";
import { Toaster } from "react-hot-toast";
import EditStudent from "./pages/EditStudent";
import Sidebar1 from "./components/Sidebar1";



const App = () => {
  return (
    <div className="flex  bg-gray-100flex h-screen bg-gray-100">
      <Sidebar1/>
      <div className="flex-1 p-8 overflow-y-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-students" element={<Addstudent />} />
          <Route path="/edit-students" element={<EditStudent />} />
        </Routes>
      </div>
      <Toaster />
    </div>
  );
};

export default App;
