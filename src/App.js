import "./css/App.css";
import "./css/common.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar2 from "./components/layouts/Navbar2";
import BlogList from "./pages/blogs/list/BlogList";
import HomePage from "./pages/home/HomePage";
import BlogDetails from "./pages/blogs/details/BlogDetails";
import NewBlog from "./pages/blogs/new/NewBlog";

function App() {
  return (
    <div className="contianer">
      <Router>
        <Navbar2 />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blogs" element={<BlogList />} />
          <Route path="/blog-details/:slug" element={<BlogDetails />} />
          <Route path="/add-blog" element={<NewBlog />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
