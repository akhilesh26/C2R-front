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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;

const Content = styled.div`
  align-items: center;
  margin-top: 70px;
`;

export default ({ children, title }) => (
  <Wrapper>
    <Head>
      <title>{title}</title>
    </Head>
    <Header />
    <Content> {children} </Content>
    <Footer />
  </Wrapper>
);
