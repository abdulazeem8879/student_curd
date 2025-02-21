import { Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/SideBar";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <div className="flex  bg-gray-100flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-8 overflow-y-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;