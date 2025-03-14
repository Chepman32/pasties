import React from 'react';
import { Typography, Row, Col, Button } from 'antd';
import { PhoneOutlined, MailOutlined, HomeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Title, Paragraph } = Typography;

const styles = {
  footer: {
    backgroundColor: '#333',
    color: 'white',
    padding: '40px 0 20px',
  },
  container: {
    padding: '0 50px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  footerTitle: {
    color: '#f48fb1',
    marginBottom: '20px',
  },
  footerLink: {
    color: 'white',
  },
  copyright: {
    textAlign: 'center',
    marginTop: '30px',
    paddingTop: '20px',
    borderTop: '1px solid #555',
  },
  telegramLink: {
    color: '#0088cc',
    fontSize: '24px',
    marginTop: '10px',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    marginBottom: '20px',
  },
  telegramLogo: {
    width: '1.5rem',
    height: '1.5rem',
    marginRight: '10px',
    display: 'inline-block',
  },
};

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <Row gutter={[24, 24]}>
          <Col xs={24} md={8}>
            <Title level={4} style={styles.footerTitle}>О компании</Title>
            <Paragraph style={{ color: 'white' }}>
              pastisy.ru — ведущий производитель и оптовый поставщик пэстисов и аксессуаров для женской моды.
            </Paragraph>
          </Col>
          <Col xs={24} md={8}>
            <Title level={4} style={styles.footerTitle}>Контакты</Title>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li>
                <a
                  href="https://t.me/pastiesru_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.telegramLink}
                >
                  <img
                    src={require('../assets/icons/Telegram.png')}
                    style={styles.telegramLogo}
                    alt="Telegram Logo"
                  />
                  Telegram: @pastiesru_bot
                </a>
              </li>
              <li style={{ marginBottom: '10px' }}><PhoneOutlined /> Телефон: +7 (978) 284-29-37</li>
              <li style={{ marginBottom: '10px' }}><MailOutlined /> Email: info@pastisy.ru</li>
              <li style={{ marginBottom: '10px' }}><HomeOutlined /> Адрес: г. Москва, ул. Примерная, д. 123</li>
            </ul>
          </Col>
          <Col xs={24} md={8}>
            <Title level={4} style={styles.footerTitle}>Информация</Title>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '10px' }}>
                <Button type="link" style={styles.footerLink} onClick={() => console.log('Wholesale terms clicked')}>
                  Условия оптовых заказов
                </Button>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <Button type="link" style={styles.footerLink} onClick={() => console.log('Shipping clicked')}>
                  Доставка и оплата
                </Button>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <Button type="link" style={styles.footerLink} onClick={() => console.log('FAQ clicked')}>
                  Часто задаваемые вопросы
                </Button>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <Link to="/privacy" style={styles.footerLink}>
                  Политика конфиденциальности
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
        <div style={styles.copyright}>
          <p>© 2025 pastisy.ru.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;