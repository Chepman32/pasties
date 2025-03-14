import React, { useState, useEffect } from 'react';
import { Form, Input, Select, Button, Modal, Card, Typography } from 'antd';
import { UserOutlined, BankOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { useForm, ValidationError } from '@formspree/react';

const { Title, Paragraph } = Typography;
const { Option } = Select;
const { TextArea } = Input;

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
  contactForm: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
  },
  customModal: {
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    padding: '20px',
    textAlign: 'center',
    background: '#fff',
  },
  checkmarkCircle: {
    background: '#d81b60',
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '15px',
    color: '#fff',
    fontSize: '24px',
  },
  modalTitle: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '10px',
  },
  modalMessage: {
    fontSize: '18px',
    fontWeight: 500,
    color: '#666',
    marginBottom: '20px',
  },
  customButton: {
    background: '#d81b60',
    border: 'none',
    color: '#fff',
    padding: '8px 20px',
    fontSize: '16px',
    borderRadius: '8px',
    width: '100px',
  },
};

function Contact() {
  const [form] = Form.useForm();
  const [state, handleSubmit] = useForm("mrbpbzbj");
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setModalVisible(true);
      form.resetFields();
    }
  }, [state.succeeded, form]);

  return (
    <div style={styles.container}>
      <Title style={styles.sectionTitle}>Свяжитесь с нами</Title>
      <Paragraph style={styles.sectionSubtitle}>
        Оставьте заявку, и мы свяжемся с вами в течение 24 часов
      </Paragraph>
      <Card style={styles.contactForm}>
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
        >
          <Form.Item
            name="name"
            label="Имя"
            rules={[{ required: true, message: 'Пожалуйста, введите ваше имя' }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Ваше имя" />
          </Form.Item>
          <ValidationError prefix="Name" field="name" errors={state.errors} />
          <Form.Item
            name="company"
            label="Название компании"
            rules={[{ required: true, message: 'Пожалуйста, введите название компании' }]}
          >
            <Input prefix={<BankOutlined />} placeholder="Название вашей компании" />
          </Form.Item>
          <ValidationError prefix="Company" field="company" errors={state.errors} />
          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: 'Пожалуйста, введите ваш email' },
              { type: 'email', message: 'Пожалуйста, введите корректный email' },
            ]}
          >
            <Input prefix={<MailOutlined />} placeholder="Ваш email" />
          </Form.Item>
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <Form.Item
            name="phone"
            label="Телефон"
            rules={[{ required: true, message: 'Пожалуйста, введите ваш телефон' }]}
          >
            <Input prefix={<PhoneOutlined />} placeholder="Ваш телефон" />
          </Form.Item>
          <ValidationError prefix="Phone" field="phone" errors={state.errors} />
          <Form.Item
            name="businessType"
            label="Тип бизнеса"
          >
            <Select placeholder="Выберите тип бизнеса">
              <Option value="retail">Розничный магазин</Option>
              <Option value="online">Интернет-магазин</Option>
              <Option value="salon">Салон красоты</Option>
              <Option value="distributor">Дистрибьютор</Option>
              <Option value="other">Другое</Option>
            </Select>
          </Form.Item>
          <ValidationError prefix="BusinessType" field="businessType" errors={state.errors} />
          <Form.Item
            name="message"
            label="Сообщение"
          >
            <TextArea
              rows={4}
              placeholder="Напишите о ваших потребностях и примерных объемах заказа"
            />
          </Form.Item>
          <ValidationError prefix="Message" field="message" errors={state.errors} />
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              disabled={state.submitting}
            >
              Отправить заявку
            </Button>
          </Form.Item>
        </Form>
      </Card>
      <Modal
        visible={modalVisible}
        onOk={() => setModalVisible(false)}
        onCancel={() => setModalVisible(false)}
        footer={null}
        closable={false}
        style={{ top: '20%', borderRadius: '8px' }}
        bodyStyle={styles.customModal}
      >
        <div style={styles.checkmarkCircle}>✓</div>
        <Title level={3} style={styles.modalTitle}>Потрясающе!</Title>
        <Paragraph style={styles.modalMessage}>
          Спасибо за ваш запрос! Мы свяжемся с вами в ближайшее время.
        </Paragraph>
        <Button style={styles.customButton} onClick={() => setModalVisible(false)}>
          OK
        </Button>
      </Modal>
    </div>
  );
}

export default Contact;