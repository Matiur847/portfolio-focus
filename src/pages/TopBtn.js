import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';


const ButtonContainer = styled.span`
  position: fixed;
  bottom: 32px;
  right: 20px;
  align-items: center;
  height: 40px;
  width: 40px;
  justify-content: center;
  z-index: 1000;
  cursor: pointer;
  animation: fadeIn 0.3s;
  opacity: 0.1;
  background: #3b3b98;
  border-radius: 50%;
  transition: opacity 0.4s, color ease-in-out 0.2s, background ease-in-out 0.2s;
  display: ${({ isScrollButtonVisible }) =>
        isScrollButtonVisible ? 'flex' : 'none'};

  &:hover {
    opacity: 1;
  }
`;

const TopBtn = () => {

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const checkScrollHeight = () => {
            if (!showButton && window.pageYOffset > 200) {
                setShowButton(true);
            } else if (showButton && window.pageYOffset <= 200) {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', checkScrollHeight);
        return () => {
            window.removeEventListener('scroll', checkScrollHeight);
        };
    }, [showButton]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <ButtonContainer isScrollButtonVisible={showButton} onClick={scrollToTop}>
            <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
        </ButtonContainer>
    );
};

export default TopBtn;