import { Menu } from "antd";
import "./Navbar.css";
import { StepBackwardOutlined } from "@ant-design/icons";
const Navbar = () => {
  let nav_items = [
    {
      key: "homenav",
      className: "buttonunderline",
      label: "Home",
    },
    {
      key: "blogsnav",
      className: "buttonunderline",
      label: "Blogs",
    },
    {
      key: "servicesnav",
      className: "buttonunderline",
      label: "Services",
    },
    {
      key: "aboutnav",
      className: "buttonunderline",
      label: "About",
    },
    {
      icon: <StepBackwardOutlined />,
      key: "contactnav",
      className: "buttonunderline",
      label: "Contact Us",
    },
  ];
  return (
    <div className="NavBarParent" data-aos="fade-up">
      <div className="MainLogo">
        <img
          style={{ width: "100%" }}
          src={require("../../../assets/IndexPageImages/ACE1.png")}
          alt="acelogz"
        />
      </div>
      <Menu
        className="NavMenu"
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={nav_items}
      />
    </div>
  );
};

export default Navbar;
