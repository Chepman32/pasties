import React from 'react';
import { Layout as AntLayout } from 'antd';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Products from './Products';
import About from './About';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Privacy from './Privacy';

const { Content } = AntLayout;

function Layout() {
  return (
    <AntLayout>
      <Header />
      <Content style={{ minHeight: 'calc(100vh - 64px - 64px - 200px)' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </Content>
      <Footer />
    </AntLayout>
  );
}

export default Layout;