import AllPost from "./pages/AllPost";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SinglePost from "./pages/SinglePost";
import CreatePost from "./pages/CreatePost";
import UpdatePost from "./pages/UpdatePost";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./componets/Navbar";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<AllPost/>} />
        <Route path='/single-post' element={<SinglePost/>} />
        <Route path='/create-post' element={<CreatePost/>} />
        <Route path='/update-post' element={<UpdatePost/>} />
      </Routes>
      <ToastContainer position='top-center' />
    </BrowserRouter>

        
   
  );
}

export default App;
