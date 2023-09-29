import "./App.css";
import { Button, ConfigProvider, Menu } from "antd";
import { theme } from "antd";
import { useGetPosts, usePostPost } from "./api/posts";
import { NavLink, RouterProvider } from "react-router-dom";
import GlobalState from "src/GlobalState";
import { routerConfig } from "src/routes";
import Layout from "src/pages/Layout";
import themeConfig from "src/theme";

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
        // #1C1C1C
        // #373A3E
        // #515B63
        // #6A8086
        // #86A7A6
        // #A9CEC2
        // https://mycolor.space/?hex=%231C1C1C&sub=1

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

          //   colorBorderSecondary: "red",

          //   // Alias Token
          //   // colorBgContainer: "#f6ffed",

          //   // Component Token
          // },
          // components: {
          //   Menu: {
          //     activeBarBorderWidth: 5,
          //     activeBarWidth:10,
          //     itemHeight: 20,
          //     collapsedWidth: 120,

          //   },
          // }
          token: {
            colorPrimary: "#1c1c1c",
            colorInfo: "#1c1c1c",
            colorPrimaryBg: "#dadada",
            colorPrimaryBgHover: "#bcbaba",
            colorPrimaryBorder: "#949494",
            colorPrimaryBorderHover: "#626262",
            colorPrimaryHover: "#3d3d3d",
          },
          components: {
            Menu: {
              activeBarWidth: 10,
              itemHeight: 30,
            },
          },
        }}
      >
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
        <Menu
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={[
            {
              label: "Business Mapping",
              key: "businessMapping",
              icon: <div>X</div>,
              children: [
                { label: "Azure", key: "azure" },
                { label: "Cloudability", key: "cloudability" },
              ],
            },
          ]}
        />
      </ConfigProvider>
    </>
  );
}

export function App() {
  return (
    <>
      {/* <AntdApp /> */}
      <ConfigProvider
        theme={themeConfig}
      >
        <Layout />
      </ConfigProvider>
    </>
  );
}

const AppWrapper = () => {
  // const { data, isLoading, isError } = useGetPosts({});
  // const newPostsMutation = usePostPost({
  //   title: "foo",
  //   body: "bar",
  //   userId: 1,
  // });
  // console.log("postData------", newPostsMutation.data);

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className="app-wrapper-container">
      {/* asdsad
      <div>
        <h1>GET DATA</h1>
        {JSON.stringify(data)}
      </div>
      <div>
        <h1>POST DATA</h1>
        <button
          disabled={newPostsMutation.isLoading}
          onClick={() => newPostsMutation.mutate()}
        >
          New Post
        </button>
      </div>
      <div>
        <h1>GLOBAL STATE</h1>
        <GlobalState />
      </div> */}
      <RouterProvider router={routerConfig} />
    </div>
  );
};

export default AppWrapper;
