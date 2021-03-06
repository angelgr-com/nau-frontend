import { connect } from 'react-redux';
import styled from 'styled-components';
import TextTop from '../components/TextTop';
import TranslationCardBottom from '../components/TranslationCardBottom';

const TranslationCard = (props) => {
  

  return (
    <TranslationCardSt>
      <TextTop
        text={props.text}
      />
      <TranslationCardBottom language={props.language}/>
      <Row>
        <Element><b>Hit rate:</b></Element>
        {/* Conditional rendering to avoid a Not a Number error in hit rate */}
        {isNaN(props.hitrate) &&
          <Element>0%</Element>
        }
        {!isNaN(props.hitrate) &&
          <Element>{(Math.round(props.hitrate*100 * 100) / 100).toFixed(0)}%</Element>
        }
      </Row>
    </TranslationCardSt>
  )
}

// Styled componets
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
  background-color: white;
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

export default connect((state) => ({
  credentials: state.credentials,
  textid: state.textid,
  hitrate: state.hitrate,
  submited: state.submited,
}))(TranslationCard);