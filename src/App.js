import React, { useState, useEffect } from 'react';
import { Layout, Menu, Typography, Button, Row, Col, Card, Form, Input, Select, message, Drawer } from 'antd';
import { PhoneOutlined, MailOutlined, HomeOutlined, ShoppingOutlined, UserOutlined, BankOutlined, MessageOutlined, LeftOutlined, RightOutlined, MenuOutlined } from '@ant-design/icons';
import Slide2 from "./assets/images/2.png";
import Slide3 from "./assets/images/3.png";
import Slide4 from "./assets/images/4.png";
import Slide5 from "./assets/images/5.png";
import Slide6 from "./assets/images/6.png";
import Video from "./assets/images/video.mp4";

const { Footer, Content } = Layout;
const { Title, Paragraph, Text } = Typography;
const { Option } = Select;
const { TextArea } = Input;

const WildberriesLogo = () => (
  <img src={require('./assets/images/Wildberries_Logo.png')} style={styles.wbLogo} alt="Wildberries Logo" />
);

const styles = {
  header: {
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
  tagline: {
    fontSize: '18px',
    margin: '5px 0 0 0',
    fontStyle: 'italic',
    opacity: 0.9,
    color: "#000",
  },
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
  wbLogo: {
    width: "40vw",
    height: "auto",
  },
  hero: {
    padding: '60px 20px',
    textAlign: 'center',
    background: '#fce4ec',
    marginBottom: '40px',
    marginTop: '110px',
  },
  heroTitle: {
    fontSize: '32px',
    marginBottom: '20px',
  },
  heroDescription: {
    fontSize: '18px',
    maxWidth: '800px',
    margin: '0 auto 30px',
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
  featureIcon: {
    fontSize: '36px',
    color: '#d81b60',
    marginBottom: '15px',
  },
  featureTitle: {
    color: '#d81b60',
    fontSize: '20px',
    marginBottom: '10px',
  },
  pinkTitle: {
    color: '#d81b60',
    marginBottom: '15px',
  },
  productImage: {
    height: '200px',
    backgroundColor: '#fce4ec',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#666',
  },
  price: {
    color: '#d81b60',
    fontSize: '18px',
    fontWeight: 'bold',
    margin: '10px 0',
  },
  minOrder: {
    color: '#666',
    fontSize: '14px',
  },
  testimonials: {
    padding: '60px 0',
    background: '#fce4ec',
    marginTop: '40px',
    marginBottom: '40px',
  },
  testimonialAuthor: {
    color: '#d81b60',
    fontWeight: 'bold',
  },
  contactForm: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
  },
  privacyContent: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'left',
  },
  footer: {
    backgroundColor: '#333',
    color: 'white',
    padding: '40px 0 20px',
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
  aboutBox: {
    background: '#fce4ec',
    padding: '30px',
    borderRadius: '4px',
  },
  container: {
    padding: '0 50px',
    maxWidth: '1200px',
    margin: '0 auto',
    marginTop: '100px',
  },
  carouselContainer: {
    maxWidth: '800px',
    margin: '0 auto 30px',
    position: 'relative',
    height: '400px',
    overflow: 'hidden',
  },
  carouselImage: {
    height: '400px',
    width: '100%',
    objectFit: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    opacity: 0,
    transform: 'translateX(100%)',
    transition: 'transform 0.6s ease-in-out, opacity 0.6s ease-in-out',
  },
  carouselImageActive: {
    opacity: 1,
    transform: 'translateX(0)',
    zIndex: 1,
  },
  carouselImagePrev: {
    opacity: 0,
    transform: 'translateX(-100%)',
  },
  carouselImageNext: {
    opacity: 0,
    transform: 'translateX(100%)',
  },
  carouselButton: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    border: 'none',
    padding: '10px',
    fontSize: '24px',
    cursor: 'pointer',
    zIndex: 2,
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'opacity 0.3s ease, background-color 0.3s ease',
  },
  prevButton: {
    left: '10px',
  },
  nextButton: {
    right: '10px',
  },
  carouselIndicators: {
    position: 'absolute',
    bottom: '20px',
    left: '0',
    right: '0',
    display: 'flex',
    justifyContent: 'center',
    zIndex: 2,
  },
  carouselIndicator: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    margin: '0 5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  carouselIndicatorActive: {
    backgroundColor: '#d81b60',
  },
  telegramLink: {
    color: '#0088cc',
    fontSize: '24px',
    marginTop: '10px',
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    marginBottom: "20px",
  },
  telegramLogo: {
    width: '1.5rem',
    height: '1.5rem',
    marginRight: '10px',
    display: 'inline-block',
  }
};

const responsiveStyles = `
  @media (max-width: 768px) {
    .header-menu {
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

const PastiesRuWholesale = () => {
  const [current, setCurrent] = useState('main');
  const [form] = Form.useForm();
  const [slideIndex, setSlideIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState('next');
  const [isAnimating, setIsAnimating] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [prevButtonHover, setPrevButtonHover] = useState(false);
  const [nextButtonHover, setNextButtonHover] = useState(false);

  useEffect(() => {
    document.title = "Pastisy.ru - крупнейший в России оптоптовый поставщик пэстисов"
  }, [])

  const handleClick = (e) => {
    setCurrent(e.key);
    setDrawerVisible(false);
  };

  const handleSubmit = (values) => {
    console.log('Form values:', values);
    message.success('Спасибо за ваш запрос! Мы свяжемся с вами в ближайшее время.');
    form.resetFields();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating && slideIndex !== 0) {
        nextSlide();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [slideIndex, isAnimating]);

  const products = [
    {
      id: 1,
      name: 'Силиконовые классические',
      description: 'Многоразовые, телесного цвета, круглой формы',
      price: 'от 150 ₽/пара',
      minOrder: 'Минимальный заказ: 500 пар'
    }
  ];

  const promoPhotos = [
    { id: 1, src: Video, isVideo: true },
    { id: 2, src: Slide2 },
    { id: 3, src: Slide3 },
    { id: 4, src: Slide4 },
    { id: 5, src: Slide5 },
    { id: 6, src: Slide6 }
  ];

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

  const nextSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setSlideDirection('next');
    
    setTimeout(() => {
      setSlideIndex((prevIndex) => 
        prevIndex === promoPhotos.length - 1 ? 0 : prevIndex + 1
      );
      setTimeout(() => {
        setIsAnimating(false);
      }, 50);
    }, 300);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setSlideDirection('prev');
    
    setTimeout(() => {
      setSlideIndex((prevIndex) => 
        prevIndex === 0 ? promoPhotos.length - 1 : prevIndex - 1
      );
      setTimeout(() => {
        setIsAnimating(false);
      }, 50);
    }, 300);
  };

  const goToSlide = (index) => {
    if (isAnimating || index === slideIndex) return;
    
    setIsAnimating(true);
    setSlideDirection(index > slideIndex ? 'next' : 'prev');
    
    setTimeout(() => {
      setSlideIndex(index);
      setTimeout(() => {
        setIsAnimating(false);
      }, 50);
    }, 300);
  };

  const getSlideStyle = (index) => {
    if (index === slideIndex) {
      return {
        height: '400px',
        width: '100%',
        objectFit: 'cover',
        position: 'absolute',
        top: 0,
        left: 0,
        opacity: 1,
        transform: 'translateX(0)',
        zIndex: 1,
        transition: 'transform 0.6s ease-in-out, opacity 0.6s ease-in-out'
      };
    }
    
    if (slideDirection === 'next' && index === (slideIndex === 0 ? promoPhotos.length - 1 : slideIndex - 1)) {
      return {
        height: '400px',
        width: '100%',
        objectFit: 'cover',
        position: 'absolute',
        top: 0,
        left: 0,
        transform: 'translateX(-100%)',
        opacity: isAnimating ? 1 : 0,
        zIndex: 0,
        transition: 'transform 0.6s ease-in-out, opacity 0.6s ease-in-out'
      };
    }
    
    if (slideDirection === 'prev' && index === (slideIndex === promoPhotos.length - 1 ? 0 : slideIndex + 1)) {
      return {
        height: '400px',
        width: '100%',
        objectFit: 'cover',
        position: 'absolute',
        top: 0,
        left: 0,
        transform: 'translateX(100%)',
        opacity: isAnimating ? 1 : 0,
        zIndex: 0,
        transition: 'transform 0.6s ease-in-out, opacity 0.6s ease-in-out'
      };
    }
    
    return {
      height: '400px',
      width: '100%',
      objectFit: 'cover',
      position: 'absolute',
      top: 0,
      left: 0,
      opacity: 0,
      transform: 'translateX(100%)',
      transition: 'transform 0.6s ease-in-out, opacity 0.6s ease-in-out'
    };
  };

  const renderContent = () => {
    switch (current) {
      case 'main':
        return (
          <>
            <div style={styles.hero}>
              <div style={styles.container}>
                <Title style={styles.heroTitle}>Стань партнером ведущего поставщика пэстисов в России</Title>
                <Paragraph style={styles.heroDescription}>
                  Предлагаем самоклеящиеся силиконовые накладки на грудь оптом для магазинов 
                  нижнего белья, бутиков, онлайн-ритейлеров и салонов красоты.
                </Paragraph>
                <div style={styles.carouselContainer}>
                  <Button 
                    style={{
                      position: 'absolute',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      backgroundColor: prevButtonHover ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.5)',
                      color: 'white',
                      border: 'none',
                      padding: '10px',
                      fontSize: '24px',
                      cursor: 'pointer',
                      zIndex: 2,
                      borderRadius: '50%',
                      width: '50px',
                      height: '50px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'opacity 0.3s ease, background-color 0.3s ease',
                      left: '10px',
                      opacity: prevButtonHover ? '1' : '0.7'
                    }}
                    onClick={prevSlide}
                    disabled={isAnimating}
                    onMouseEnter={() => setPrevButtonHover(true)}
                    onMouseLeave={() => setPrevButtonHover(false)}
                  >
                    <LeftOutlined />
                  </Button>
                  
                  {promoPhotos.map((photo, index) => (
                    photo.isVideo ? (
                      <video
                        key={photo.id}
                        src={photo.src}
                        autoPlay
                        loop
                        muted
                        style={getSlideStyle(index)}
                      />
                    ) : (
                      <img 
                        key={photo.id}
                        src={photo.src} 
                        alt={`Slide ${photo.id}`}
                        style={getSlideStyle(index)}
                      />
                    )
                  ))}
                  
                  <Button 
                    style={{
                      position: 'absolute',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      backgroundColor: nextButtonHover ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.5)',
                      color: 'white',
                      border: 'none',
                      padding: '10px',
                      fontSize: '24px',
                      cursor: 'pointer',
                      zIndex: 2,
                      borderRadius: '50%',
                      width: '50px',
                      height: '50px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'opacity 0.3s ease, background-color 0.3s ease',
                      right: '10px',
                      opacity: nextButtonHover ? '1' : '0.7'
                    }}
                    onClick={nextSlide}
                    disabled={isAnimating}
                    onMouseEnter={() => setNextButtonHover(true)}
                    onMouseLeave={() => setNextButtonHover(false)}
                  >
                    <RightOutlined />
                  </Button>
                  
                  <div style={styles.carouselIndicators}>
                    {promoPhotos.map((_, index) => (
                      <div
                        key={index}
                        style={{
                          width: '12px',
                          height: '12px',
                          borderRadius: '50%',
                          backgroundColor: index === slideIndex ? '#d81b60' : 'rgba(255, 255, 255, 0.5)',
                          margin: '0 5px',
                          cursor: 'pointer',
                          transition: 'background-color 0.3s ease'
                        }}
                        onClick={() => goToSlide(index)}
                      />
                    ))}
                  </div>
                </div>
                <Button 
                  type="primary" 
                  size="large"
                  onClick={() => setCurrent('contact')}
                >
                  Связаться с нами
                </Button>
              </div>
            </div>

            <div style={styles.container}>
              <Row gutter={[24, 24]}>
                <Col xs={24} md={8}>
                  <Card>
                    <div style={{textAlign: 'center'}}>
                      <ShoppingOutlined style={styles.featureIcon} />
                      <Title level={3} style={styles.featureTitle}>Высокое качество</Title>
                      <Paragraph>
                        Пэстисы из гипоаллергенных материалов, безопасных для кожи, с прочным клеевым слоем.
                      </Paragraph>
                    </div>
                  </Card>
                </Col>
                <Col xs={24} md={8}>
                  <Card>
                    <div style={{textAlign: 'center'}}>
                      <BankOutlined style={styles.featureIcon} />
                      <Title level={3} style={styles.featureTitle}>Низкие цены</Title>
                      <Paragraph>
                        Выгодные оптовые цены напрямую от производителя без посредников.
                      </Paragraph>
                    </div>
                  </Card>
                </Col>
                <Col xs={24} md={8}>
                  <Card>
                    <div style={{textAlign: 'center'}}>
                      <ShoppingOutlined style={styles.featureIcon} />
                      <Title level={3} style={styles.featureTitle}>Надежность</Title>
                      <Paragraph>
                        Многоразовые силиконовые пэстисы для любых потребностей клиентов.
                      </Paragraph>
                    </div>
                  </Card>
                </Col>
              </Row>
            </div>
          </>
        );
      
      case 'products':
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
        
      case 'about':
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
                
                <Title level={3} style={{color: '#d81b60', marginBottom: '15px', marginTop: '30px'}}>Наша миссия</Title>
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
        
      case 'testimonials':
        return (
          <div style={styles.testimonials}>
            <div style={styles.container}>
              <Title style={styles.sectionTitle}>Отзывы наших партнеров</Title>
              
              <Row gutter={[24, 24]}>
                {testimonials.map(testimonial => (
                  <Col xs={24} md={8} key={testimonial.id}>
                    <Card>
                      <Paragraph style={{fontStyle: 'italic'}}>
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
        
      case 'contact':
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
                
                <Form.Item
                  name="company"
                  label="Название компании"
                  rules={[{ required: true, message: 'Пожалуйста, введите название компании' }]}
                >
                  <Input prefix={<BankOutlined />} placeholder="Название вашей компании" />
                </Form.Item>
                
                <Form.Item
                  name="email"
                  label="Email"
                  rules={[
                    { required: true, message: 'Пожалуйста, введите ваш email' },
                    { type: 'email', message: 'Пожалуйста, введите корректный email' }
                  ]}
                >
                  <Input prefix={<MailOutlined />} placeholder="Ваш email" />
                </Form.Item>
                
                <Form.Item
                  name="phone"
                  label="Телефон"
                  rules={[{ required: true, message: 'Пожалуйста, введите ваш телефон' }]}
                >
                  <Input prefix={<PhoneOutlined />} placeholder="Ваш телефон" />
                </Form.Item>
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
                
                <Form.Item
                  name="message"
                  label="Сообщение"
                >
                  <TextArea 
                    rows={4} 
                    placeholder="Напишите о ваших потребностях и примерных объемах заказа"
                  />
                </Form.Item>
                
                <Form.Item>
                  <Button type="primary" htmlType="submit" size="large">
                    Отправить заявку
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </div>
        );

      case 'privacy':
        return (
          <div style={styles.container}>
            <Title style={styles.sectionTitle}>Политика конфиденциальности</Title>
            <div style={styles.privacyContent}>
              <Text strong>Дата вступления в силу: 10 марта 2025 года</Text>
              
              <Title level={4}>1. Общие положения</Title>
              <Paragraph>
                1.1. Настоящая Политика конфиденциальности (далее – Политика) разработана в соответствии с Федеральным законом Российской Федерации № 152-ФЗ "О персональных данных" от 27 июля 2006 года и регулирует порядок обработки персональных данных пользователей сайта pastisy.ru (далее – Сайт), принадлежащего ООО "Пастис" (далее – Оператор).<br/>
                1.2. Целью настоящей Политики является обеспечение защиты прав и свобод пользователей при обработке их персональных данных, включая защиту права на неприкосновенность частной жизни, личную и семейную тайну.<br/>
                1.3. Использование Сайта означает безоговорочное согласие пользователя с настоящей Политикой и указанными в ней условиями обработки его персональных данных. В случае несогласия с условиями Политики пользователь должен воздержаться от использования Сайта.
              </Paragraph>

              <Title level={4}>2. Основные понятия</Title>
              <Paragraph>
                2.1. Персональные данные – любая информация, относящаяся к прямо или косвенно определенному или определяемому физическому лицу (субъекту персональных данных).<br/>
                2.2. Обработка персональных данных – любое действие (операция) или совокупность действий (операций), совершаемых с использованием средств автоматизации или без таковых, включая сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных данных.<br/>
                2.3. Пользователь – любое лицо, осуществляющее доступ к Сайту и использующее его функционал.
              </Paragraph>

              <Title level={4}>3. Цели сбора персональных данных</Title>
              <Paragraph>
                3.1. Оператор собирает и обрабатывает персональные данные пользователей в следующих целях:<br/>
                - Обработка запросов на оптовые поставки продукции (пэстисов и аксессуаров);<br/>
                - Установление и поддержание связи с пользователями для предоставления информации о товарах и услугах;<br/>
                - Заключение и исполнение договоров с партнерами и клиентами;<br/>
                - Улучшение качества обслуживания и работы Сайта;<br/>
                - Проведение маркетинговых мероприятий и рассылок (при наличии согласия пользователя);<br/>
                - Выполнение требований законодательства Российской Федерации.
              </Paragraph>

              <Title level={4}>4. Категории собираемых данных</Title>
              <Paragraph>
                4.1. Оператор может собирать следующие персональные данные пользователей:<br/>
                - Имя и фамилия;<br/>
                - Название компании;<br/>
                - Адрес электронной почты (e-mail);<br/>
                - Номер телефона;<br/>
                - Тип бизнеса (например, розничный магазин, интернет-магазин, дистрибьютор);<br/>
                - Сообщения и иная информация, предоставленная пользователем через форму обратной связи;<br/>
                - Технические данные: IP-адрес, данные о браузере, cookies, время посещения Сайта.<br/>
                4.2. Пользователь предоставляет персональные данные добровольно через формы на Сайте или иные способы взаимодействия с Оператором.
              </Paragraph>

              <Title level={4}>5. Порядок и условия обработки персональных данных</Title>
              <Paragraph>
                5.1. Обработка персональных данных осуществляется с согласия пользователя, выраженного путем заполнения формы на Сайте или иного активного действия (например, отправки запроса).<br/>
                5.2. Оператор обеспечивает конфиденциальность персональных данных и принимает необходимые организационные и технические меры для их защиты от неправомерного доступа, уничтожения, изменения, блокирования, копирования, распространения и иных незаконных действий.<br/>
                5.3. Персональные данные обрабатываются в течение срока, необходимого для достижения целей обработки, указанных в пункте 3 настоящей Политики, либо до момента отзыва согласия пользователем.<br/>
                5.4. Оператор вправе передавать персональные данные третьим лицам (например, курьерским службам, партнерам) исключительно для выполнения целей, указанных в пункте 3, при условии соблюдения такими лицами требований законодательства о защите персональных данных.
              </Paragraph>

              <Title level={4}>6. Права пользователей</Title>
              <Paragraph>
                6.1. Пользователь имеет право:<br/>
                - Запрашивать у Оператора информацию об обработке его персональных данных;<br/>
                - Требовать уточнения, блокирования или уничтожения своих персональных данных в случае, если они являются неполными, устаревшими, неточными или обрабатываются с нарушением законодательства;<br/>
                - Отозвать свое согласие на обработку персональных данных, направив письменное уведомление Оператору;<br/>
                - Обжаловать действия или бездействие Оператора в уполномоченный орган по защите прав субъектов персональных данных (Роскомнадзор) или в судебном порядке.<br/>
                6.2. Для реализации своих прав пользователь может направить запрос на адрес электронной почты info@pastisy.ru или по почтовому адресу: г. Москва, ул. Примерная, д. 123.
              </Paragraph>

              <Title level={4}>7. Использование cookies</Title>
              <Paragraph>
                7.1. Сайт использует файлы cookies для улучшения работы и повышения удобства пользователей. Cookies собирают информацию о действиях пользователя на Сайте, включая данные об устройстве и посещенных страницах.<br/>
                7.2. Пользователь может отключить использование cookies в настройках своего браузера, однако это может повлиять на функциональность Сайта.
              </Paragraph>

              <Title level={4}>8. Обеспечение безопасности данных</Title>
              <Paragraph>
                8.1. Оператор применяет современные методы шифрования и защиты данных для предотвращения несанкционированного доступа.<br/>
                8.2. В случае выявления утечки персональных данных Оператор обязуется уведомить пользователей и соответствующие органы в порядке, установленном законодательством.
              </Paragraph>

              <Title level={4}>9. Изменения в Политике конфиденциальности</Title>
              <Paragraph>
                9.1. Оператор оставляет за собой право вносить изменения в настоящую Политику в любое время. Новая редакция Политики вступает в силу с момента ее размещения на Сайте.<br/>
                9.2. Пользователям рекомендуется регулярно проверять актуальную версию Политики на Сайте.
              </Paragraph>

              <Title level={4}>10. Контактная информация</Title>
              <Paragraph>
                10.1. По всем вопросам, связанным с обработкой персональных данных, пользователи могут обращаться к Оператору:<br/>
                - Электронная почта: info@pastisy.ru<br/>
                - Телефон: +7 (978) 284-29-37<br/>
                - Почтовый адрес: г. Москва, ул. Примерная, д. 123
              </Paragraph>
            </div>
          </div>
        );
        
      default:
        return <div>Страница не найдена</div>;
    }
  };

  return (
    <Layout>
      <style>{responsiveStyles}</style>
      <Menu 
        onClick={handleClick} 
        selectedKeys={[current]} 
        mode="horizontal" 
        style={styles.menu}
        className="header-menu"
      >
        <h1 style={styles.logo}>pastisy.ru</h1>
        <Button 
          style={styles.hamburgerButton} 
          className="hamburger-button"
          onClick={() => setDrawerVisible(true)}
        >
          <MenuOutlined />
        </Button>
        <Menu.Item 
          key="main" 
          style={styles.menuItem}
          aria-label="Navigate to Home"
        >
          Главная
        </Menu.Item>
        <Menu.Item 
          key="products" 
          style={styles.menuItem}
          aria-label="Navigate to Products"
        >
          Купить в розницу
        </Menu.Item>
        <Menu.Item 
          key="about" 
          style={styles.menuItem}
          aria-label="Navigate to About"
        >
          О нас
        </Menu.Item>
        <Menu.Item 
          key="testimonials" 
          style={styles.menuItem}
          aria-label="Navigate to Testimonials"
        >
          Отзывы
        </Menu.Item>
        <Menu.Item 
          key="contact" 
          style={styles.menuItem}
          aria-label="Navigate to Contact"
        >
          Контакты
        </Menu.Item>
      </Menu>
      
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
          selectedKeys={[current]}
          onClick={handleClick}
          theme="dark"
        >
          <Menu.Item 
            key="main" 
            style={styles.drawerMenuItem}
            aria-label="Navigate to Home"
          >
            Главная
          </Menu.Item>
          <Menu.Item 
            key="products" 
            style={styles.drawerMenuItem}
            aria-label="Navigate to Products"
          >
            Купить в розницу
          </Menu.Item>
          <Menu.Item 
            key="about" 
            style={styles.drawerMenuItem}
            aria-label="Navigate to About"
          >
            О нас
          </Menu.Item>
          <Menu.Item 
            key="testimonials" 
            style={styles.drawerMenuItem}
            aria-label="Navigate to Testimonials"
          >
            Отзывы
          </Menu.Item>
          <Menu.Item 
            key="contact" 
            style={styles.drawerMenuItem}
            aria-label="Navigate to Contact"
          >
            Контакты
          </Menu.Item>
        </Menu>
      </Drawer>
      
      <Content style={{ minHeight: 'calc(100vh - 64px - 64px - 200px)' }}>
        {renderContent()}
      </Content>
      
      <Footer style={styles.footer}>
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
              <a 
                  href="https://t.me/pastiesru_bot" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={styles.telegramLink}
                >
                  <img src={require('./assets/icons/Telegram.png')} style={styles.telegramLogo} alt="Telegram Logo" /> Telegram: @pastiesru_bot
                </a>
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
                  <Button type="link" style={styles.footerLink} onClick={() => setCurrent('privacy')}>
                    Политика конфиденциальности
                  </Button>
                </li>
              </ul>
            </Col>
          </Row>
          
          <div style={styles.copyright}>
            <p>© 2025 pastisy.ru.</p>
          </div>
        </div>
      </Footer>
    </Layout>
  );
};

export default PastiesRuWholesale;