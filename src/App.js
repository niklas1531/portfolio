import { Routes, Route, HashRouter } from 'react-router-dom'
import Home from './pages/Home'
import CV from './pages/CV'
import Projekte from './pages/Projekte'
import PathNotFound from './pages/PathNotFound'
import GreenCoding  from './Projekte/GreenCoding'
import WordCounter from './Projekte/WordCounter'
import Check24 from './Projekte/Check24'
import { useEffect, useState } from 'react'
import Calculator from './Projekte/calculator/Calculator'

const App = () => {
  const [show, setShow] = useState(false)
  const handleShow = () => setShow(!show);

   // Dark Theme
   const [theme, setTheme] = useState(localStorage.getItem("theme"));
   const [checked, setChecked] = useState(localStorage.getItem("checked"));
   const [mobile, showMobile] = useState(false);
   const setDark = () => {
       document.body.setAttribute("data-theme", "dark-theme")
       setTheme("dark");
       setChecked(true);
   };

   const setLight = () => {
       document.body.setAttribute("data-theme", "light-theme")
       setTheme("light");
       setChecked(false);
   };

   useEffect(() => {
       localStorage.setItem("theme", theme);
       if (theme === "light") {
           setLight();
       } else if (theme === "dark") {
           setDark();
       }
   }, [theme])




   const switchTheme = (e) => {
       if (e.target.checked) {
           setDark();
       } else {
           setLight();
       }
   }
  return (
    <HashRouter>
      <Routes>
        <Route index element={<Home showMobile={showMobile} mobile={mobile} switchTheme={switchTheme} checked={checked} show={show} handleShow={handleShow}/>} />
        <Route path='/cv' element={<CV showMobile={showMobile} mobile={mobile} switchTheme={switchTheme} checked={checked} show={show} handleShow={handleShow}/>} />
        <Route path='/projekte' element={<Projekte showMobile={showMobile} mobile={mobile} switchTheme={switchTheme} checked={checked} show={show} handleShow={handleShow}/>} />
        <Route path="/projekte/greencoding" element={<GreenCoding showMobile={showMobile} mobile={mobile} switchTheme={switchTheme} checked={checked} show={show} handleShow={handleShow}/>} />
        <Route path="/projekte/wordcount" element={<WordCounter showMobile={showMobile} mobile={mobile} switchTheme={switchTheme} checked={checked} show={show} handleShow={handleShow}/>} />
        <Route path="/projekte/check24" element={<Check24 showMobile={showMobile} mobile={mobile} switchTheme={switchTheme} checked={checked} show={show} handleShow={handleShow}/>} />
        <Route path="/projekte/calculator" element={<Calculator showMobile={showMobile} mobile={mobile} switchTheme={switchTheme} checked={checked} show={show} handleShow={handleShow}/>} />
        <Route path="*" element={<PathNotFound />} />
      </Routes>
    </HashRouter>)
}

export default App
