import "./App.css";
import { Feed } from "./Components/Feed";
import Navbar from "./Components/Navbar";
import { Sidebar } from "./Components/Sidebar";

function App() {
    return (
        <div className='bg-black'>
            <Navbar />
            <div className='flex text-white'>
                <Sidebar />
                {/* <Feed /> */}
            </div>
        </div>
    );
}

export default App;
