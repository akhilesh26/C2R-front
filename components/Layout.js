import {
  Form,
  Select,
  InputNumber,
  DatePicker,
  Switch,
  Slider,
  Button
} from "antd";
import styled from "styled-components";

import Head from "next/head";
import Header from "components/Header";
import Footer from "components/Footer";
import { height } from "window-size";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;

const Content = styled.div`
  align-items: center;
  margin-top: 70px;
`;

const Burger = styled.div`
  display: none;
  @media (max-width: 1050px) {
    display: inline-block;
  }
`;

export default ({ children, title }) => (
  <Wrapper>
    <Head>
      <title>{title}</title>
    </Head>
    <Header />
    <Burger style={{position:'absolute', zIndex: '10', right: '0', top: '70px', background: 'red', width: '400px', height: '400px'}}>

    </Burger>
    <Content> {children} </Content>
    <Footer />
  </Wrapper>
);
