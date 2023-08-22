import './App.scss';
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
   <>
   <Routes>
    <Route path="/" element={<Layout />} >
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
    </Route >
   </Routes>
   </>
  );
}

export default App;
//    <Route index element={<Home />} />
//TODO find out why I can render sidebar and home page but not together...?????
