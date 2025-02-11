import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Section = styled.div`
  margin-bottom: 20px;
`;

const CarouselContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;

  .slick-slide {
    padding: 6px;
  }

  .slick-track {
    display: flex;
    align-items: stretch;
  }

  .slick-dots {
    bottom: -24px;
    
    li button:before {
      color: rgba(255, 255, 255, 0.5);
    }
    
    li.slick-active button:before {
      color: #8BC34A;
    }
  }
`;

const TileContainer = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 20px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 12px;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  margin: 0 8px;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.2);
  }
`;

const TileIcon = styled(motion.div)`
  width: 48px;
  height: 48px;
  margin-bottom: 12px;

  svg {
    width: 100%;
    height: 100%;
    stroke: rgba(255, 255, 255, 0.9);
    stroke-width: 1.8;
  }
`;

const TileTitle = styled.h3`
  color: #8BC34A;
  font-size: 1.12rem;
  font-weight: 600;
  margin: 0;
  letter-spacing: 0.4px;
`;

const TileDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.88rem;
  margin: 0;
  line-height: 1.4;
  max-width: 200px;
`;

const SectionHeader = styled(motion.div)`
  margin-bottom: 20px;
  padding-left: calc(14px + 3%);
`;

const HeaderTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 8px;
  background: linear-gradient(135deg, #8BC34A 0%, #4CAF50 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 15px rgba(139, 195, 74, 0.3);
`;

const HeaderSubtitle = styled.p`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
`;

const shippingTilesData = [
  {
    id: 1,
    title: "Automated Order Processing",
    description: "Streamline your business with our advanced automated order processing system",
    illustration: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
          d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
        />
        <motion.circle
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          cx="12" cy="12" r="3"
        />
      </svg>
    )
  },
  {
    id: 2,
    title: "Pan India Delivery",
    description: "Reach customers across India with our extensive delivery network",
    illustration: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
          d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    )
  },
  {
    id: 3,
    title: "Quality Assurance",
    description: "Every product undergoes rigorous quality checks before shipping",
    illustration: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
          d="M22 11.08V12a10 10 0 11-5.93-9.14"
        />
        <motion.polyline
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          points="22 4 12 14.01 9 11.01"
        />
      </svg>
    )
  },
  {
    id: 4,
    title: "Inventory Management",
    description: "Real-time inventory tracking and automated stock updates",
    illustration: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <motion.rect
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
          x="2" y="3" width="20" height="14" rx="2" ry="2"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          d="M8 21h8M12 17v4"
        />
      </svg>
    )
  },
  {
    id: 5,
    title: "Seamless Integration",
    description: "Easy integration with major e-commerce platforms",
    illustration: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
          d="M16 16v1a2 2 0 01-2 2H3a2 2 0 01-2-2V7a2 2 0 012-2h2m5.66 0H14a2 2 0 012 2v3.34l1 1L23 3"
        />
      </svg>
    )
  },
  {
    id: 6,
    title: "24/7 Support",
    description: "Round-the-clock customer support for all your queries",
    illustration: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
          d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          d="M12 6v6l4 2"
        />
      </svg>
    )
  }
];

const sourcingTilesData = [
  {
    id: 1,
    title: "Market Research",
    description: "Expert analysis of trending products and market demands",
    illustration: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    )
  },
  {
    id: 2,
    title: "Quality Vendors",
    description: "Partnerships with reliable and certified manufacturers",
    illustration: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    )
  },
  {
    id: 3,
    title: "Price Optimization",
    description: "Competitive pricing strategies for maximum profit margins",
    illustration: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    )
  },
  {
    id: 4,
    title: "Product Customization",
    description: "Tailor products to meet your specific requirements",
    illustration: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
        />
      </svg>
    )
  },
  {
    id: 5,
    title: "Sample Management",
    description: "Efficient handling and evaluation of product samples",
    illustration: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    )
  },
  {
    id: 6,
    title: "Compliance Checks",
    description: "Ensuring all products meet quality and safety standards",
    illustration: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    )
  }
];

const AboutTiles = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <Section>
        <SectionHeader
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <HeaderTitle>Shipping</HeaderTitle>
          <HeaderSubtitle>Experience seamless delivery across India.</HeaderSubtitle>
        </SectionHeader>
        <CarouselContainer>
          <Slider {...settings}>
            {shippingTilesData.map((tile) => (
              <TileContainer key={tile.id}>
                <TileIcon>
                  {tile.illustration}
                </TileIcon>
                <TileTitle>{tile.title}</TileTitle>
                <TileDescription>{tile.description}</TileDescription>
              </TileContainer>
            ))}
          </Slider>
        </CarouselContainer>
      </Section>

      <Section>
        <SectionHeader
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <HeaderTitle>Sourcing</HeaderTitle>
          <HeaderSubtitle>Find the perfect products for your business.</HeaderSubtitle>
        </SectionHeader>
        <CarouselContainer>
          <Slider {...settings}>
            {sourcingTilesData.map((tile) => (
              <TileContainer key={tile.id}>
                <TileIcon>
                  {tile.illustration}
                </TileIcon>
                <TileTitle>{tile.title}</TileTitle>
                <TileDescription>{tile.description}</TileDescription>
              </TileContainer>
            ))}
          </Slider>
        </CarouselContainer>
      </Section>
    </>
  );
};

export default AboutTiles;
