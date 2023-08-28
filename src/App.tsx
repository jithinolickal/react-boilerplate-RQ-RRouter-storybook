import { useState } from "react";
import "./App.css";
import { Button, ConfigProvider } from "antd";
import { theme } from "antd";
import { useGetPosts, usePostPost } from "./api/posts";
import {
  createBrowserRouter,
  NavLink,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import GlobalState from "src/GlobalState";

const { compactAlgorithm } = theme;

export function AntdApp() {
  return (
    <>
      <Button type="primary">Primary Button</Button>
      <Button>Default Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <Button type="text">Text Button</Button>
      <Button type="link">Link Button</Button>
      <hr />
      <ConfigProvider
        theme={{
          algorithm: [compactAlgorithm],
          // token: {
          //   // Seed Token
          //   colorPrimary: "#1C1C1C",
          //   borderRadius: 2,

          //   // Map Token
          //   colorPrimaryActive:"#363636",
          //   colorPrimaryHover: "#494949",
          //   colorPrimaryBorderHover: "#494949",
          //   // colorLinkHover: "#1C1C1C",

          //   colorBorderSecondary: "red"

          //   // Alias Token
          //   // colorBgContainer: "#f6ffed",
          // },
        }}
      >
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
      </ConfigProvider>
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <h1>Root Page (Layout like header)</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/post">Post</NavLink>
        <Outlet />
      </>
    ),
    errorElement: <h1>Error Page</h1>,
    children: [
      {
        index: true,
        element: <h1>Default Index Page</h1>,
      },
      {
        path: "contacts/:contactId",
        element: <h1>Contact Page</h1>,
      },
    ],
  },
  {
    path: "post",
    element: (
      <>
        <NavLink to="/">Home</NavLink>
        <Outlet />
      </>
    ),
    children: [
      {
        index: true,
        element: <h1>Default post Index Page</h1>,
      },
      {
        path: "post/:postid",
        element: <h1>Contact Page</h1>,
      },
    ],
  },
]);

export function App() {
  return (
    <>
      <RouterProvider router={router} />
      {/* <AntdApp/> */}
    </>
  );
}

const AppWrapper = () => {
  const { data, isLoading, isError } = useGetPosts({});
  const newPostsMutation = usePostPost({
    title: 'foo',
    body: 'bar',
    userId: 1,
  });
  console.log("postData------", newPostsMutation.data);
  

  if (isLoading) {
    return <div>Loading...</div>;
  }


  return (
    <div>
      asdsad
      <div><h1>GET DATA</h1>{JSON.stringify(data)}</div>
      <div><h1>POST DATA</h1><button disabled={newPostsMutation.isLoading} onClick={() => newPostsMutation.mutate()}>New Post</button></div>
      <div><h1>GLOBAL STATE</h1><GlobalState/></div>

      <App />

    </div>
  );
};

export default AppWrapper;
