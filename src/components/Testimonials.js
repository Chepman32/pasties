import React from 'react';
import { Typography, Row, Col, Card } from 'antd';

const { Title, Paragraph, Text } = Typography;

const styles = {
  testimonials: {
    padding: '60px 0',
    background: '#fce4ec',
    marginTop: '100px',
    marginBottom: '40px',
  },
  container: {
    padding: '0 50px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  sectionTitle: {
    textAlign: 'center',
    margin: '40px 0 20px',
  },
  testimonialAuthor: {
    color: '#d81b60',
    fontWeight: 'bold',
  },
};

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text: "Сотрудничаем с pastisy.ru уже более 2 лет. Качественный товар, никаких задержек с поставками, лояльные условия. Наши клиенты довольны продукцией.",
      author: "Марина, владелица сети магазинов нижнего белья \"Бельетаж\""
    },
    {
      id: 2,
      text: "Благодаря индивидуальному подходу и возможности брендирования, мы успешно запустили свою линейку пэстисов. Отличное качество по конкурентным ценам.",
      author: "Алексей, директор интернет-магазина \"БельеМаркет\""
    },
    {
      id: 3,
      text: "Начали с минимального заказа, а теперь закупаем крупными партиями. Продукция пользуется спросом, особенно классические модели.",
      author: "Ольга, представитель розничной сети \"Модное Белье\""
    }
  ];

  return (
    <div style={styles.testimonials}>
      <div style={styles.container}>
        <Title style={styles.sectionTitle}>Отзывы наших партнеров</Title>
        <Row gutter={[24, 24]}>
          {testimonials.map(testimonial => (
            <Col xs={24} md={8} key={testimonial.id}>
              <Card>
                <Paragraph style={{ fontStyle: 'italic' }}>
                  "{testimonial.text}"
                </Paragraph>
                <Text style={styles.testimonialAuthor}>{testimonial.author}</Text>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default Testimonials;