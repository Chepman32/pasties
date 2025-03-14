import React from 'react';
import { Typography } from 'antd';
import WildberriesLogo from './WildberriesLogo';

const { Title, Paragraph } = Typography;

const styles = {
  container: {
    padding: '0 50px',
    maxWidth: '1200px',
    margin: '0 auto',
    marginTop: '100px',
  },
  logo: {
    fontSize: '36px',
    fontWeight: 'bold',
    margin: '40px 0 20px',
    textAlign: 'center',
  },
  sectionSubtitle: {
    textAlign: 'center',
    color: '#666',
    maxWidth: '800px',
    margin: '0 auto 40px',
  },
};

function Products() {
  return (
    <div style={styles.container}>
      <Title style={styles.logo}>Купить в розницу</Title>
      <Paragraph style={styles.sectionSubtitle}>
        Приобретайте нашу продукцию на Wildberries
      </Paragraph>
      <div style={{ textAlign: 'center', margin: '40px 0' }}>
        <a
          href="https://www.wildberries.ru/catalog/344365435/detail.aspx?targetUrl=GP"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'inline-block' }}
        >
          <WildberriesLogo />
        </a>
      </div>
    </div>
  );
}

export default Products;