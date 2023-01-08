import "./css/App.css";
import "./css/common.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar2 from "./components/layouts/Navbar2";
import BlogList from "./pages/blogs/list/BlogList";
import HomePage from "./pages/home/HomePage";
import BlogDetails from "./pages/blogs/details/BlogDetails";
import NewBlog from "./pages/blogs/new/NewBlog";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="contianer">
      <QueryClientProvider client={queryClient}>
        <Router>
          <Navbar2 />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blogs" element={<BlogList />} />
            <Route path="/blog-details/:slug" element={<BlogDetails />} />
            <Route path="/add-blog" element={<NewBlog />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
