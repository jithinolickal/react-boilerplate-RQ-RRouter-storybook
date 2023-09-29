import { NavLink, Outlet, createBrowserRouter } from "react-router-dom";
import { App } from "src/App";
import Hop1 from "src/pages/charge/azure/hop1/Hop1";
import Hop2 from "src/pages/charge/azure/hop2/Hop2";
import Protected from "src/routes/Protected";

/** 
  
  SideNav+breadcrumb
    Home Page
    Business Mapping
      Azure
        HOP1
          Subscriptions - Params?
          RGs - Params?
        HOP2
          Subscriptions - Params?
          RGs - Params?
      Cloudability

 */

export const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <App />
        {/* <LayoutWithSidenavAndBreadCrumbs/> */}
        {/* <Protected /> */}
        
      </>
    ),
    errorElement: <h1>/ Error Page </h1>,
    children: [
      {
        index: true,
        element: <h1>Default Home Page - points to /</h1>,
      },
      {
        path: "charge", // (this path should redirect to /azure by default)
        element: (
          <>
            <Outlet />
          </>
        ),
        children: [
          {
            index: true,
            element: (
              <>
                <h1>Default charge Page - points to /charge</h1>
                <NavLink to="/charge/reports">/reports</NavLink>
                <br />
                <NavLink to="/charge/mapping">/mapping</NavLink>
                <br />
                <NavLink to="/charge/forecast">/forecast</NavLink>
              </>
            ),
          },
          {
            path: "reports",
            element: <h1>reports Page - points to /charge/reports</h1>,
          },
          {
            path: "mapping",
            element: (
              <>
                <Outlet />
              </>
            ),
            children: [
              {
                index: true,
                element: (
                  <>
                    <h1>
                      BM Mapping page (with cloudbased, saas based icons) -
                      points to /charge/mapping
                    </h1>
                    <NavLink to="/charge/mapping/azure">/azure</NavLink>
                    <br />
                    <NavLink to="/charge/mapping/gcp">/gcp</NavLink>
                  </>
                ),
              },
              {
                path: "azure",
                element: (
                  <>
                    {/* Any Common components like - tabs, basic filter goes here */}
                    <Outlet />
                  </>
                ),
                children: [
                  {
                    index: true,
                    element: (
                      <>
                        <h1>
                          Azure page (with hop1, hop2 based icons) - points to
                          /charge/mapping/azure
                        </h1>
                        <NavLink to="/charge/mapping/azure/hop1">
                          /hop1
                        </NavLink>
                        <br />
                        <NavLink to="/charge/mapping/azure/hop2">
                          /hop2
                        </NavLink>
                      </>
                    ),
                  },
                  {
                    path: "hop1",
                    element: (
                      <>
                      {/* <Hop1/> */}
                      </>
                    ),
                  },
                  {
                    path: "hop2",
                    element: (
                      <h1>
                        hop2 Page - points to /charge/mapping/azure/hop2 <br/>
                        <Hop2/>
                      </h1>
                    ),
                  },
                ],
              },
              {
                path: "gcp",
                // element: <Outlet />,
                children: [
                  {
                    index: true,
                    element: (
                      <h1>GCP page - points to /charge/mapping/gcp</h1>
                    ),
                  },
                ],
              },
            ],
          },
          {
            path: "forecast",
            element: <h1>forecast Page - points to /charge/forecast</h1>,
          },
        ],
      },
      {
        path: "*",
        element: <h1>* 404 Page</h1>,
      },
    ],
  },
  {
    path: "auth",
    element: <h2>Login to looker to re authenticate</h2>,
  },
]);
