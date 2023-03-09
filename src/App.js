import AllPost from "./pages/AllPost";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SinglePost from "./pages/SinglePost";
import CreatePost from "./pages/CreatePost";
import UpdatePost from "./pages/UpdatePost";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AllPost/>} />
        <Route path='/single-post' element={<SinglePost/>} />
        <Route path='/create-post' element={<CreatePost/>} />
        <Route path='/update-post' element={<UpdatePost/>} />
      </Routes>
    </BrowserRouter>

        
   
  );
}

export default App;
