import News from './News';
import './style.css';   
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Categories from './Categories';


function App() {  
  return (
    <div className="App">

     {/* <News/> */}
     
     <Routes>
      <Route path='/' element={<News/>} />
      <Route path='/Categories/:cate' element={<Categories/>} />
     </Routes>
    </div>
  );
}

export default App;
