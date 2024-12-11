import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import FavoritePage from "./pages/FavoritePage";
import { Route, Routes} from "react-router-dom";

function App(){
  return (
    <div className='flex'>
      <Sidebar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/favorites' element={<FavoritePage/>}/>
      </Routes>
    </div>
  );
}

export default App;