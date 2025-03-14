import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Card, Button, Typography } from 'antd';
import { ShoppingOutlined, BankOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import Slide2 from '../assets/images/2.png';
import Slide3 from '../assets/images/3.png';
import Slide4 from '../assets/images/4.png';
import Slide5 from '../assets/images/5.png';
import Slide6 from '../assets/images/6.png';
import Video from '../assets/images/video.mp4';

const { Title, Paragraph } = Typography;

const styles = {
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
  container: {
    padding: '0 50px',
    maxWidth: '1200px',
    margin: '0 auto',
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
};

function Home() {
  const navigate = useNavigate();
  const [slideIndex, setSlideIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState('next');
  const [isAnimating, setIsAnimating] = useState(false);
  const [prevButtonHover, setPrevButtonHover] = useState(false);
  const [nextButtonHover, setNextButtonHover] = useState(false);

  const promoPhotos = [
    { id: 1, src: Video, isVideo: true },
    { id: 2, src: Slide2 },
    { id: 3, src: Slide3 },
    { id: 4, src: Slide4 },
    { id: 5, src: Slide5 },
    { id: 6, src: Slide6 },
  ];

  useEffect(() => {
    document.title = "Pastisy.ru - крупнейший в России оптовый поставщик пэстисов";
    const interval = setInterval(() => {
      if (!isAnimating && slideIndex !== 0) {
        nextSlide();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [slideIndex, isAnimating]);

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
        ...styles.carouselImage,
        opacity: 1,
        transform: 'translateX(0)',
        zIndex: 1,
      };
    }
    if (slideDirection === 'next' && index === (slideIndex === 0 ? promoPhotos.length - 1 : slideIndex - 1)) {
      return {
        ...styles.carouselImage,
        transform: 'translateX(-100%)',
        opacity: isAnimating ? 1 : 0,
        zIndex: 0,
      };
    }
    if (slideDirection === 'prev' && index === (slideIndex === promoPhotos.length - 1 ? 0 : slideIndex + 1)) {
      return {
        ...styles.carouselImage,
        transform: 'translateX(100%)',
        opacity: isAnimating ? 1 : 0,
        zIndex: 0,
      };
    }
    return styles.carouselImage;
  };

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
                ...styles.carouselButton,
                ...styles.prevButton,
                backgroundColor: prevButtonHover ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.5)',
                opacity: prevButtonHover ? '1' : '0.7',
              }}
              onClick={prevSlide}
              disabled={isAnimating}
              onMouseEnter={() => setPrevButtonHover(true)}
              onMouseLeave={() => setPrevButtonHover(false)}
            >
              <LeftOutlined />
            </Button>
            {promoPhotos.map((photo) =>
              photo.isVideo ? (
                <video
                  key={photo.id}
                  src={photo.src}
                  autoPlay
                  loop
                  muted
                  style={getSlideStyle(promoPhotos.indexOf(photo))}
                />
              ) : (
                <img
                  key={photo.id}
                  src={photo.src}
                  alt={`Slide ${photo.id}`}
                  style={getSlideStyle(promoPhotos.indexOf(photo))}
                />
              )
            )}
            <Button
              style={{
                ...styles.carouselButton,
                ...styles.nextButton,
                backgroundColor: nextButtonHover ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.5)',
                opacity: nextButtonHover ? '1' : '0.7',
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
                    ...styles.carouselIndicator,
                    backgroundColor: index === slideIndex ? '#d81b60' : 'rgba(255, 255, 255, 0.5)',
                  }}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </div>
          <Button
            type="primary"
            size="large"
            onClick={() => navigate('/contact')}
          >
            Связаться с нами
          </Button>
        </div>
      </div>
      <div style={styles.container}>
        <Row gutter={[24, 24]}>
          <Col xs={24} md={8}>
            <Card>
              <div style={{ textAlign: 'center' }}>
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
              <div style={{ textAlign: 'center' }}>
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
              <div style={{ textAlign: 'center' }}>
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
}

export default Home;