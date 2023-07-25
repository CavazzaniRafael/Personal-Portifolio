import React, { useState, useEffect } from "react";
import "./About.css";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  100% {
    opacity: 1;
    filter: blur(0);
  }
`;

const H1Style = styled.h1`
  max-width: 90%;
  margin: 0;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const ChunksStyle = styled.span`
  display: inline-block;
  opacity: 0;
  filter: blur(4px);
  animation: ${fadeIn} 0.8s forwards cubic-bezier(0.11, 0, 0.5, 0);
  animation-delay: ${(props) => `${props.order}s`};
`;

const About = ({ text }: { text: string }) => {
  const words = text.split(" ");

  const birds = words.map((word, index) => {
    const count = (index + 1) / 12;

    return (
      <ChunksStyle key={index} order={count}>
        {word}
      </ChunksStyle>
    );
  });

  return (
    <div className="box-text">
      <H1Style className="text">{birds}</H1Style>
    </div>
  );
};

export default About;
