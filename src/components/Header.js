import React, { useState } from 'react';
import { Menu, Button, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { useNavigate, useLocation } from 'react-router-dom';

const styles = {
  menu: {
    background: 'linear-gradient(45deg, #d81b60, #f48fb1)',
    padding: '20px 0',
    textAlign: 'center',
    color: 'white',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    position: 'fixed',
    width: '100%',
    top: 0,
    zIndex: 1000,
  },
  logo: {
    fontSize: '36px',
    fontWeight: 'bold',
    margin: 0,
    textShadow: '0 2px 4px rgba(0,0,0,0.2)',
  },
  menuItem: {
    color: 'white',
    fontSize: '16px',
    cursor: 'pointer',
  },
  hamburgerButton: {
    display: 'none',
    fontSize: '24px',
    color: 'white',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    position: 'absolute',
    right: '20px',
    top: '50%',
    transform: 'translateY(-50%)',
  },
  drawerMenu: {
    backgroundColor: '#333',
    padding: '20px 0',
  },
  drawerMenuItem: {
    color: 'white',
    fontSize: '16px',
    padding: '10px 20px',
    cursor: 'pointer',
  },
};

const responsiveStyles = `
  @media (max-width: 768px) {
    .header-menu .ant-menu {
      display: none;
    }
    .hamburger-button {
      display: block;
    }
    .header-container {
      padding: 0 20px;
    }
  }
  @media (min-width: 769px) {
    .hamburger-button {
      display: none;
    }
  }
  .ant-menu-horizontal > .ant-menu-item:hover,
  .ant-menu-horizontal > .ant-menu-item-active,
  .ant-menu-horizontal > .ant-menu-item-open,
  .ant-menu-horizontal > .ant-menu-item-selected {
    color: white !important;
    border-bottom: none !important;
    text-decoration: none !important;
    cursor: pointer !important;
  }
  .ant-menu-horizontal > .ant-menu-item::after {
    border-bottom: none !important;
  }
  .ant-menu-horizontal > .ant-menu-item-selected {
    border-bottom: 2px solid white !important;
  }
`;

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [drawerVisible, setDrawerVisible] = useState(false);

  const menuItems = [
    { key: '/', label: 'Главная', ariaLabel: 'Navigate to Home' },
    { key: '/products', label: 'Купить в розницу', ariaLabel: 'Navigate to Products' },
    { key: '/about', label: 'О нас', ariaLabel: 'Navigate to About' },
    { key: '/testimonials', label: 'Отзывы', ariaLabel: 'Navigate to Testimonials' },
    { key: '/contact', label: 'Контакты', ariaLabel: 'Navigate to Contact' },
  ];

  const handleMenuClick = (e) => {
    navigate(e.key);
    setDrawerVisible(false);
  };

  const currentKey = location.pathname;

  return (
    <>
      <style>{responsiveStyles}</style>
      <div className="header-menu">
        <Menu
          onClick={handleMenuClick}
          selectedKeys={[currentKey]}
          mode="horizontal"
          style={styles.menu}
        >
          <h1 style={styles.logo}>pastisy.ru</h1>
          {menuItems.map(item => (
            <Menu.Item
              key={item.key}
              style={styles.menuItem}
              aria-label={item.ariaLabel}
            >
              {item.label}
            </Menu.Item>
          ))}
          <Button
            style={styles.hamburgerButton}
            className="hamburger-button"
            onClick={() => setDrawerVisible(true)}
          >
            <MenuOutlined />
          </Button>
        </Menu>
      </div>

      <Drawer
        title="Меню"
        placement="right"
        closable={true}
        onClose={() => setDrawerVisible(false)}
        visible={drawerVisible}
        bodyStyle={styles.drawerMenu}
        width={250}
      >
        <Menu
          mode="vertical"
          selectedKeys={[currentKey]}
          onClick={handleMenuClick}
          theme="dark"
        >
          {menuItems.map(item => (
            <Menu.Item
              key={item.key}
              style={styles.drawerMenuItem}
              aria-label={item.ariaLabel}
            >
              {item.label}
            </Menu.Item>
          ))}
        </Menu>
      </Drawer>
    </>
  );
}

export default Header;