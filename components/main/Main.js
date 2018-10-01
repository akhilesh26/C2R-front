import styled from "styled-components";
import Carousel from './Carousel';
import ShortDetail from './ShortDetails';
import { Fragment } from 'react';

const BackgroundImage = styled.div`
    background: #adede3;
  
`;

const Title = styled.h1`
  padding: 20px;
  text-align: center;
  font-size: 64px;
  line-height: 74px;
  text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
  color: #fff;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 100;
`;

class Main extends React.Component {

  render() {
    return (
      <Fragment>
        <Carousel />
        <ShortDetail />
      </Fragment>
    );
  }
}

export default Main;
