// ! check main.jsx first

import { Route, Routes, Link } from "react-router-dom";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Feedback from "./pages/Feedback";
import Home from "./pages/Home";
import NewAbout from "./pages/NewAbout";
import Unknown from "./pages/Unknown";

const App = () => {
  return (
    // ! This is how we define different routes
    // <Routes>
    //   <Route path="/" element={<Home/>}/>
    //   {/* / means  root path*/}
    //   <Route path="/about" element={<About/>} />
    //   <Route path="/blog" element={<Blog/>} />
    // </Routes>
    <>
      {/* here's how we navigate betn the pages */}
      {/* Link tag replaces the anchor tag here, to attribute replaces href */}
      <nav>
        <ul>
          <li><Link to={"/"}>home</Link></li>
          <li><Link to={"/about"}>about</Link></li>
          <li><Link to={"/blog"}>blog</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<Unknown/>}></Route> 
        {/* '*'  any url which is not defined will route to Unknown element */}

        {/* <Route path="/about" element={<About />} />
        <Route path="/about/:id" element={<Feedback />} />  */}
        {/* anything after : isnt the hardcoded url its dynamic */}
        {/* <Route path="/about/new" element={<NewAbout/>} />  */}
        {/* before v6 of router the one which was on top would have more specificity
         but now in v6 /new will have more specificity as it is hardcoded and mire specific*/}

         {/* //! Nested route */}
         {/* This is same as above */}
        <Route path="/about" >
        <Route index element={<About />} /> 
        <Route path=":id" element={<Feedback />} /> 
        <Route path="new" element={<NewAbout/>} /> 
        </Route>
      </Routes>
    </>
  );
};

export default App;
