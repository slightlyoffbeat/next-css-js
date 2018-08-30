import React from "react";
import styled from "styled-components";
import theme from "../config/theme";
import {
  H1,
  H2,
  H3,
  H4,
  H5,
  P,
  Lead,
  Small,
  Blockquote,
  HR,
  A,
  UL,
  OL
} from "~/components/Type";

const Title = styled.h1`
  color: ${props => props.theme.colors.black};
  font-size: 50px;
`;

const Wrapper = styled.div`
  width: 650px;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  align-items: center;
`;

const myApp = () => (
  <Wrapper>
    <Title>My Page yo yo ${theme.typography.leading}</Title>
    <h1>this is a test</h1>
    <p>lets see if this works</p>
    <HR />
    <H1>H1 Heading</H1>
    <H2>H2 Heading</H2>
    <H3>H3 Heading</H3>
    <H4>H4 Heading</H4>
    <H5>H5 Heading</H5>
    <HR />
    <P>
      Be a nyan cat, <A>feel great about it</A>, be annoying 24/7 poop rainbows
      in litter box all day eat from dog's food purr while eating pet right
      here, no not there, here, no fool, right here that other cat smells funny
      you should really give me all the treats because i smell the best and omg
      you finally got the right spot and i love you right now but lick left leg
      for ninety minutes, still dirty, but head nudges.
    </P>
    <p>
      Attack feet your pillow is now my pet bed warm up laptop with butt lick
      butt fart rainbows until owner yells pee in litter box hiss at cats but
      twitch tail in permanent irritation when owners are asleep, cry for no
      apparent reason purrrrrr lick human with sandpaper tongue.{" "}
    </p>

    <Lead>
      Attack feet your pillow is now my pet bed warm up laptop with butt lick
      butt fart rainbows until owner yells pee in litter box hiss at cats but
      twitch tail in permanent irritation when owners are asleep.
    </Lead>

    <Small>
      I smell the best and omg you finally gotnp the right spot and i love you
      right now but lick left leg for ninety minutes, still dirty, but head
      nudges.
    </Small>

    <Blockquote>
      I smell the best and omg you finally gotnp the right spot and i love you
      right now but lick left leg for ninety minutes, still dirty, but head
      nudges.
    </Blockquote>

    <UL>
      <li>List item 1</li>
      <li>List item 2</li>
      <li>List item 3</li>
      <li>List item 4</li>
      <li>List item 5</li>
    </UL>

    <OL>
      <li>List item 1</li>
      <li>List item 2</li>
      <li>List item 3</li>
      <li>List item 4</li>
      <li>List item 5</li>
    </OL>
  </Wrapper>
);

export default myApp;
