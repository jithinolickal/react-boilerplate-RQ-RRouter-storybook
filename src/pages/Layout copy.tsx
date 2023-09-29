import { Col, Row } from "antd";
import { Outlet } from "react-router-dom";
import SideNavBar from "src/components/sidenavbar/SideNavBar";
import "src/pages/Layout.css";
import Protected from "src/routes/Protected";

type Props = {};

const Layout = (props: Props) => {
  return (
    <>
      {/* <div className="container"> */}
      {/* <div className="sidemenu">
        <div>Profile</div>
        <div>Favourites</div>
        <SideNavBar/>
        </div>
        <div className="content-container">
        <div>layout header</div>
        <div>page content</div>
    </div> */}

      <Row className="container">
        <Col span={4} className="sidemenu">
          <Row>Profile</Row>
          <Row>Favourites</Row>
          <Row>
            <SideNavBar />
          </Row>
        </Col>
        <Col span={20} className="content-container">
          <Row>Layout header</Row>
          <Row>
            Page contentPage contentPage contentPage contentPage contentPage
            contentPage contentPage contentPage contentPage contentPage
            contentPage contentPage contentcontentPage contentcontentPage content
          </Row>
          
          {/* This is the page content container for all pages */}
          {/* <Protected />  */}
        </Col>
      </Row>
      {/* </div> */}
    </>
  );
};

export default Layout;
