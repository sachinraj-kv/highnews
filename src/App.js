import 'bootstrap/dist/css/bootstrap.min.css';
import Navigationbar from './components/Navigationbar';
import { getallnews } from './redex/newsSlice';
import { BrowserRouter as Router , Route , Routes  } from 'react-router-dom';
import Footer from './components/Footer';
import Detalednews from './pages/Detalednews';
import Home from './components/Home';
import Todosform from './pages/Addnews';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import EditandDelite from './pages/EditandDelite';
import EditForm from './pages/EditForm';
import ViewEdit from './pages/ViewEdit';
import Intropage from './pages/Intropage';

function App() {
  const dispatch = useDispatch()

  useEffect(()=>{

    function getnews(){
      fetch("./allnews.json")
      .then((res)=>res.json())
      .then((news=>{dispatch(getallnews(news))})
       
  )};
    getnews()
  },[dispatch]);
  
  return (
   <Router>
    <Navigationbar/>
    <Routes>
      <Route path='/'  element={<Intropage/>}/>
      <Route path='/news' element={<Home/>}/>
      <Route path='/news/:id' element={<Detalednews/>}/>
      <Route path='/addnews' element={<Todosform/>}/>
      <Route path='/editdelete' element={<EditandDelite/>}/>
      <Route path='/editform/:id' element={<EditForm/>}/>
      <Route path='/viewnews' element={<ViewEdit/>}/>
    </Routes>
    <Footer/>
   </Router>

  );
}

export default App;
