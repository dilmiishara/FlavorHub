import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/FavoritesPage";
import { Route, Routes} from "react-router-dom";

function App(){
  return (
    <div className='flex'>
      <Sidebar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/favorites' element={<FavoritesPage/>}/>
      </Routes>
    </div>
  );
}

export default App;