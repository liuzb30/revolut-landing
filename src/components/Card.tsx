import React from 'react';
import styled from 'styled-components';

interface CardProps {
  image: string;
  amount: string;
  currency: string;
  description: string;
  location: string;
  time: string;
  cashback?: string;
  cashbackText?: string;
}

const CardContainer = styled.div`
  position: relative;
  width: 220px;
  height: 300px;
  border-radius: 16px;
  overflow: hidden;
  background: #fff;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.1) 50%,
    rgba(0, 0, 0, 0.3) 100%
  );
`;

const LocationBadge = styled.div`
  background: rgba(255, 255, 255, 0.98);
  border-radius: 100px;
  padding: 6px 12px;
  font-size: 12px;
  color: #000000;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-weight: 500;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  margin-top: 8px;
`;

const CardContent = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  padding: 0 16px;
  color: white;
  text-align: center;
`;

const Amount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1px;
  margin-bottom: 12px;
  
  .currency {
    font-size: 24px;
    font-weight: 600;
  }
  
  .value {
    font-size: 36px;
    font-weight: 600;
    line-height: 1;
  }
`;

const CashbackBadge = styled.div`
  position: absolute;
  left: 12px;
  right: 12px;
  bottom: 12px;
  background: rgba(255, 255, 255, 0.98);
  border-radius: 12px;
  padding: 10px 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  
  .icon {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: #E91E63;
    display: flex;
    align-items: center;
    justify-content: center;
    
    svg {
      width: 16px;
      height: 16px;
      color: white;
    }
  }
  
  .content {
    flex: 1;
    
    .description {
      font-size: 10px;
      font-weight: 500;
      color: #000000;
      margin-bottom: 1px;
    }
    
    .text {
      font-size: 10px;
      color: #666666;
    }
  }
  
  .amount {
    font-size: 10px;
    font-weight: 600;
    color: #00875A;
  }
`;

const Card: React.FC<CardProps> = ({
  image,
  amount,
  currency,
  description,
  location,
  time,
  cashback,
  cashbackText
}) => {
  return (
    <CardContainer>
      <CardImage src={image} alt={description} />
      <CardOverlay />
      <CardContent>
        <Amount>
          <span className="currency">{currency}</span>
          <span className="value">{amount}</span>
        </Amount>
        <LocationBadge>
          {location} <span style={{ opacity: 0.5 }}>▼</span>
        </LocationBadge>
      </CardContent>
      {cashback && (
        <CashbackBadge>
          <div className="icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 6L18 8M18 8L16 10M18 8H13M12 17H7M7 17L9 15M7 17L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          <div className="content">
            <div className="description">{description}</div>
            <div className="text">{cashbackText}</div>
          </div>
          <div className="amount">{cashback}</div>
        </CashbackBadge>
      )}
    </CardContainer>
  );
};

export default Card; 