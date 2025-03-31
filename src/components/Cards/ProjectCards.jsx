import React from 'react';
import styled from 'styled-components';
import p4 from '../../images/p4.png'
const Card = styled.div`

    width: 100%;
    height: 490px;
    background-color: ${({ theme }) => theme.card};
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0 0 12px 4px rgba(0,0,0,0.4);
    overflow: hidden;
    padding: 26px 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    transition: all 0.5s ease-in-out;
    
    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 0 50px 4px rgba(0,0,0,0.6);
        filter: brightness(1.1);
    }
`;

const Title = styled.h3`
    font-size: 24px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
`;

const Description = styled.p`
    font-size: 16px;
    color: ${({ theme }) => theme.text_secondary};
`;



const ProjectCards = ({ project }) => {
    return (
      <Card>
        <Title>{project.Title}</Title>
        <Description>{project.Description}</Description>
        <img src={project.image} alt={project.Title} />
      </Card>
    );
  };

export default ProjectCards;
