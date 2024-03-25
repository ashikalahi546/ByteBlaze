// import { Root } from "postcss";
// import { createBrowserRouter } from "react-router-dom";
// import Home from "../components/Home";
// import Blogs from "../components/Blogs";
// import Blog from "../Pages/Blog";
// import Bookmarks from "../components/Bookmarks";

// export const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Root></Root>,
//       children: [
//         {
//           path: "/",
//           element: <Home></Home>,
//         },
//         {
//           path: "/blogs",
//           element: <Blogs></Blogs>,
//           loader: () => fetch("https://dev.to/api/articles"),
//         },
//         {
//           path: "/blog/:id",
//           element: <Blog></Blog>,
//           loader: ({ params }) =>
//             fetch(`https://dev.to/api/articles/${params.id}`),
//         },
//         {
//           path: "/bookmarks",
//           element: <Bookmarks></Bookmarks>,
//         },
//       ],
//     },
//   ]);