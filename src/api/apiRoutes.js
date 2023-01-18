export default {
  allCategories: '/category/all',
  addNewCategoy: '/category/new',
  allBlogs: (currentPage, perpage) =>
    `/blog/all?currentpage=${currentPage}&perpage=${perpage}`,
  addNewBlog: '/blog/new',
  login: '/users/signin',
};
