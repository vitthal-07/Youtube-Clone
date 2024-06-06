import { useSelector } from "react-redux";
import "./App.css";
import { MiniSidebar } from "./Components/Sidebar/MiniSidebar";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import { Feed } from "./Components/Feed/Feed";
import Navbar from "./Components/Navbar/Navbar";

function App() {
    const showSidebar = useSelector((store) => store.showSidebar);
    return (
        <div className='bg-black w-full h-screen flex flex-col'>
            <Navbar />
            <div className='flex overflow-x-hidden w-full'>
                {showSidebar ? <Sidebar /> : <MiniSidebar />}
                <Feed />
            </div>
        </div>
    );
}

export default App;
