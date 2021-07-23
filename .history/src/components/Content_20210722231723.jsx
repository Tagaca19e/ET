import React, { useContext } from "react";
import styled, { css } from "styled-components";
import TextLoop from "react-text-loop";

import { AppContext } from "./../App/AppContext";
import Typewriter from "typewriter-effect";

const sharedStyles = css`
  transition: color 0.5s linear;
  font-weight: normal;
  position: relative;
  z-index: 1;
`;

const C = {
  Name: styled.h1`
    ${sharedStyles};
    font-size: 6rem;
    margin: 0 0 3.5rem;
    color: ${({ theme }) => theme.primaryTextColor};
    @media only screen and (max-device-width: 820px) and (-webkit-min-device-pixel-ratio: 2) {
      font-size: 4.5rem;
    }
  `,
  Title: styled.h2`
    ${sharedStyles};
    font-size: 3.5rem;
    margin: 4rem 0;
    color: ${({ theme }) => theme.secondaryTextColor};
    @media only screen and (max-device-width: 820px) and (-webkit-min-device-pixel-ratio: 2) {
      font-size: 2.5rem;
    }
  `,
  Skills: styled.h3`
    ${sharedStyles};
    font-size: 1.5rem;
    margin: 5rem 0;
    color: ${({ theme }) => theme.primaryTextColor};
    max-width: 50rem;

    @media only screen and (max-device-width: 820px) and (-webkit-min-device-pixel-ratio: 2) {
      font-size: 1.5rem;
    }
  `,
};

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "A Developer",
          "A Leader",
          "A Team Player",
          "A Hard Worker",
          "A Problem Solver",
          "A Student",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export const Content = () => {
  const { theme } = useContext(AppContext);

  return (
    <div>
      <C.Name theme={theme} data-v2="name" aria-label="My name is Adam Alston">
        Eidmone Tagaca
      </C.Name>
      <C.Title
        theme={theme}
        data-v2="title"
        aria-label="I am a software engineer"
      >
        <Type
          theme={theme}
          data-v2="title"
          aria-label="I am a software engineer"
        />
      </C.Title>
      <C.Skills
        theme={theme}
        data-v2="skills"
        aria-label="My name is Adam Alston"
      >
        <p1>
          {" "}
          hi, i'm Abhishek Naidu, a passionate self-taught full stack web
          developer and a freelance software engineer from india. my passion for
          software lies with dreaming up ideas and making them come true with
          elegant interfaces. i take great care in the experience, architecture,
          and code quality of the things I build.
        </p1>
        <TextLoop interval={3000} delay={2000}>
          {[
            "Javascript  ",
            "Nodejs      ",
            "React       ",
            "Expressjs   ",
            "React Native",

            // "Cinema 4D",
          ].map((text) => (
            <span key={text}>{text}</span>
          ))}
        </TextLoop>
      </C.Skills>
    </div>
  );
};
