import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import TextTop from '../components/TextTop';
import TranslationCardBottom from '../components/TranslationCardBottom';


const Feature = (props) => {
  const [inputValue, setInputValue] = useState("");

  // Handlers
  const handleUserInput = (e) => {
    setInputValue(e.target.value);
  };
  const resetInputField = () => {
    setInputValue("");
  };

  return (
    <Features>
      <Description>
        <Header>{props.header}</Header>
        <Paragraph>{props.paragraph}</Paragraph>
      </Description>
      <TranslationCardSt>
        <TextTop
          text='The merit of all things lies in their difficulty.'
        />
        <TranslationBottomSt>
          <div>
            <InputTranslationSt
              id="user_translation"
              name="user_translation"
              placeholder="Translate here the above text"
              title="user_translation"
              type='text'
              value={inputValue}
              onChange={handleUserInput}
            />
          </div>
          <Group>
            <ButtonTransp onClick={ resetInputField }>Delete</ButtonTransp>
            <Button>Check</Button>
          </Group>
          <Row>
            %<Element>{(Math.round(0.9*100 * 100) / 100).toFixed(0)}</Element>
            <Element><b>Hit rate:</b></Element>
          </Row>
        </TranslationBottomSt>
      </TranslationCardSt>
    </Features>
  )
};

// Styled components
const Group = styled.div`
  display: flex;
  flex-direction: row;
`;

const Button = styled.a`
  align-items: center;
  background-color: orange;
  border-radius: 0.5em;
  cursor: pointer;
  display: flex;
  height: 2em;
  justify-content: center;
  margin-bottom: 1em;
  margin-left: 0.5em;
  width: 5em;
`;
const ButtonTransp = styled.a`
  align-items: center;
  background-color: rgb(248, 165, 1, 0.5);
  border-radius: 0.5em;
  cursor: pointer;
  display: flex;
  height: 2em;
  justify-content: center;
  margin-bottom: 1em;
  margin-left: 0.5em;
  width: 5em;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 0.5em;
`;
const Element = styled.div`
  margin-left: 0.5em;
`;
const TranslationCardSt = styled.div`
  align-items: center;
  border-radius: 2em;
  border: 0.15em solid var(--gl1);
  box-shadow: 0.2em 0.2em 0.6em 0.1em rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1em 2em 1em 1em;
  min-height: 20em;
  min-width: 24em;
  padding: 2em;
  @media only Screen and (max-width: 60em) {
    min-width: 18em;
  }
  @media only Screen and (max-width: 48em) {
    min-width: 20em;
    margin: 1em 1em 1em 1em;
  }
  @media only Screen and (max-width: 30em) {
    min-width: 14em;
    margin: 1em 1em 1em 1em;
  }
`;

const TranslationBottomSt = styled.div`
  align-items: center;
  border: 0.1em solid rgb(255, 165, 0, 0.5);
  border-radius: 1em;
  background-color: var(--bl3);
  display: flex;
  flex-direction: column;
  min-height: 10em;
  width: 20em;
  @media only Screen and (max-width: 60em) {
    width: 15em;
  }
  @media only Screen and (max-width: 48em) {
    width: 17em;
  }
  @media only Screen and (max-width: 30em) {
    width: 12em;
  }
`;
const InputTranslationSt = styled.textarea`
  border-radius: 0.5em;
  border: 0.1em solid var(--bl1);
  padding: 0.25em;
  min-height: 8em;
  min-width: 21em;
  margin-top: 1em;
  width: 90%;
  @media only Screen and (max-width: 60em) {
    min-width: 15em;
  }
  @media only Screen and (max-width: 48em) {
    min-width: 18em;
  }
  @media only Screen and (max-width: 30em) {
    min-width: 12em;
  }
`;

const Features = styled.div`
  box-shadow: 0.2em 0.2em 0.6em 0.1em rgba(0, 0, 0, 0.2);
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  margin: 2em 0em;
  max-width: 76em;
  min-width: 24em;
  padding: 1rem;
  position: relative;
  width: 80%;
  z-index: 500;
  @media only Screen and (max-width: 60em) {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-items: center;
    min-width: 18em;
  }
  @media only Screen and (max-width: 48em) {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-items: center;
    min-width: 17em;
  }
  @media only Screen and (max-width: 30em) {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-items: center;
    min-width: 18em;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Header = styled.h2`
  margin: 1em 1em 2em 1em;
`;
const Paragraph = styled.p`
  margin: 0em 3em 0em 1.5em;
`;

export default connect((state) => ({
  credentials: state.credentials,
  textid: state.textid,
  hitrate: state.hitrate,
  submited: state.submited,
}))(Feature);