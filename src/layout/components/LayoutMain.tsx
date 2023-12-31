import { Content } from "antd/es/layout/layout";
import "./layout.css";
import { Layout, MenuProps } from "antd";
import { Navbar } from "./Navbar";
import { Footers } from "./Footer";
import { useState } from "react";
import { MenuItem } from "../../App";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import SlidingMenu from "./SlidingMenu";

interface prop {
  children: React.ReactElement;
  menuItems: MenuItem[];
  title: string;
  current: string;
}

export const LayoutMain: React.FC<prop> = ({
  children,
  menuItems,
  title,
  current,
}) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const items: MenuProps["items"] = menuItems.map((menuItem) => {
    return {
      key: menuItem.name,
      label: (
        <>
          <Link to={menuItem.path}>{menuItem.label}</Link>
        </>
      ),
    };
  });

  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Layout>
        <Navbar
          menu={items}
          handleMenu={setMenuOpen}
          menuOpen={menuOpen}
          menuSelected={current}
        />
        <Layout>
          <SlidingMenu
            isOpen={menuOpen}
            onClose={toggleMenu}
            onMenuItemClick={handleMenuItemClick}
          >
            <ul className="custom-menu">
              {menuItems.map((item) => (
                <li
                  key={item?.name}
                  className="custom-menu-item"
                  onClick={() => {
                    toggleMenu();
                    navigate(item.path);
                  }}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </SlidingMenu>

          <Content style={{ backgroundColor: "white" }}>{children}</Content>
        </Layout>
        <Footers />
      </Layout>
    </div>
  );
};
