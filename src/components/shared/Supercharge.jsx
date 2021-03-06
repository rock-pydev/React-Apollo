import React, { Component } from 'react';
import styled from 'styled-components';
import { Button, Column, SpanTitle, Text } from '../../theme/index';
import { Link } from 'react-router-dom';
import Reveal from 'react-reveal/Reveal';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 4em 0;

  @media (max-width: 1000px) {
    flex-direction: column;
    margin: 0 auto;
    padding: 3em 0 1.5em 0;
    text-align: center;
  }
`;

const StyledColumn = styled(Column)`
  text-align: center;
  align-items: center;
  margin: 0 auto;
`;

export default class Supercharge extends Component {
  render() {
    return (
      <Wrapper>
        <Reveal effect="fadeIn">
          <StyledColumn>
            <SpanTitle new>
              Supercharge Your Business With <br /> Engaging Videos That Generate{' '}
              <span style={{ color: '#d21f04' }}>Results</span> <br /> (and Goosebumps)
            </SpanTitle>
            <Column width="85%">
              <Text>So many businesses are wasting money creating videos that just don&apos;t work.</Text>
              <Text red>We want to help you dominate your market.</Text>
              <Text>
                At Creative114, we deliver far more than beautiful cinematic work. Our passion is telling your inspiring
                and emotional stories through the art of video. Our greatest payment comes in the form of laughter,
                tears, applause, and goosebumps.
              </Text>
              <Text red>It&apos;s our job to help you produce those feelings.</Text>
            </Column>
            <Link to="/launch">
              <Button primary margin="2em 0 0 0" smallText>
                Free Story Formula
              </Button>
            </Link>
          </StyledColumn>
        </Reveal>
      </Wrapper>
    );
  }
}
