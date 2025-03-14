import React from 'react';
import { Typography, Row, Col } from 'antd';

const { Title, Paragraph } = Typography;

const styles = {
  container: {
    padding: '0 50px',
    maxWidth: '1200px',
    margin: '0 auto',
    marginTop: '100px',
  },
  sectionTitle: {
    textAlign: 'center',
    margin: '40px 0 20px',
  },
  sectionSubtitle: {
    textAlign: 'center',
    color: '#666',
    maxWidth: '800px',
    margin: '0 auto 40px',
  },
  pinkTitle: {
    color: '#d81b60',
    marginBottom: '15px',
  },
  aboutBox: {
    background: '#fce4ec',
    padding: '30px',
    borderRadius: '4px',
  },
};

function About() {
  return (
    <div style={styles.container}>
      <Title style={styles.sectionTitle}>О нашей компании</Title>
      <Paragraph style={styles.sectionSubtitle}>
        pastisy.ru — надежный поставщик пэстисов с 2018 года
      </Paragraph>
      <Row gutter={[24, 24]}>
        <Col xs={24} md={12}>
          <Title level={3} style={styles.pinkTitle}>Почему выбирают нас</Title>
          <ul>
            <li>Собственное производство и контроль качества</li>
            <li>Выгодные условия для постоянных партнеров</li>
            <li>Быстрая доставка по всей России</li>
            <li>Индивидуальный подход к каждому клиенту</li>
            <li>Возможность изготовления под вашим брендом</li>
          </ul>
          <Title level={3} style={{ color: '#d81b60', marginBottom: '15px', marginTop: '30px' }}>
            Наша миссия
          </Title>
          <Paragraph>
            Обеспечивать рынок качественными и доступными решениями для женщин,
            позволяющими чувствовать себя комфортно и уверенно в любой одежде.
          </Paragraph>
        </Col>
        <Col xs={24} md={12}>
          <div style={styles.aboutBox}>
            <Title level={3}>Преимущества оптового сотрудничества</Title>
            <ul>
              <li>Специальные цены для оптовых клиентов</li>
              <li>Бесплатные образцы продукции для тестирования</li>
              <li>Гибкая система скидок в зависимости от объема заказа</li>
              <li>Маркетинговая поддержка и POS-материалы</li>
              <li>Возможность отсрочки платежа для постоянных клиентов</li>
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default About;