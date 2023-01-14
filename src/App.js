import "./css/App.css";
import "./css/common.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar2 from "./components/layouts/Navbar2";
import BlogList from "./pages/blogs/list/BlogList";
import HomePage from "./pages/home/HomePage";
import BlogDetails from "./pages/blogs/details/BlogDetails";
import NewBlog from "./pages/blogs/new/NewBlog";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import WebRoutes from "./common/WebRoutes";
import { Categories } from "./pages/categories/Categories";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="contianer">
      <QueryClientProvider client={queryClient}>
        <Toaster position="top-right" />

        <Router>
          <Navbar2 />
          <Routes>
            <Route path={WebRoutes.home} element={<HomePage />} />
            <Route path={WebRoutes.blogs} element={<BlogList />} />
            <Route path={WebRoutes.blogDetails} element={<BlogDetails />} />
            <Route path={WebRoutes.addBlog} element={<NewBlog />} />
            <Route path={WebRoutes.categories} element={<Categories />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
