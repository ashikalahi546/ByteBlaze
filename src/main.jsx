import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root.jsx";
import Blogs from "./components/Blogs.jsx";
import Bookmarks from "./components/Bookmarks.jsx";
import Home from "./components/Home.jsx";
import Blog from "./Pages/Blog.jsx";
import Content from "./Pages/Content.jsx";
import Author from "./Pages/Author.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
        loader: () => fetch("https://dev.to/api/articles"),
      },
      {
        path: "/blog/:id",
        element: <Blog></Blog>,
        loader:({params})=> fetch(`https://dev.to/api/articles/${params.id}`),
        children:[
          {
        index:true,
            element:<Content></Content>
          },
          {
            path:'author',
            element:<Author></Author>
          }
        ]
      },
      {
        path: "/bookmarks",
        element: <Bookmarks></Bookmarks>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
