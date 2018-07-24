import styled from "styled-components";

const Footer = styled.div`
  h3{
    color: #fff;
    text-align: center;
  }
  background: #000000;
  width: 100vw;
  
`;

const FooterText = styled.p`
background: #492222;
  text-align: center;
  margin: 0px;
  color: #fff;
  font-family: "Avenir Roman", "proxima-nova", "Helvetica Neue", Helvetica,
    Arial, sans-serif;
  font-size: 14px;
  line-height: 18px;
  padding: 16px 0;
`;

export default ({ children }) => (
  <Footer>
   <div style={{padding: '3% 8%', borderBottom: '1px solid hsla(0,0%,100%,.25)'}}>
    <div className='ant-row'>
        <div className='ant-col-xs-24 ant-col-sm-24 ant-col-md-6'>
          <h3>Team</h3>
        </div>
        <div className='ant-col-xs-24 ant-col-sm-24 ant-col-md-6'>
          <h3>Contact Us</h3>
        </div>
        <div className='ant-col-xs-24 ant-col-sm-24 ant-col-md-6'>
          <h3>Carrier</h3>
        </div>
        <div className='ant-col-xs-24 ant-col-sm-24 ant-col-md-6'>
          <h3>Share</h3>
        </div>
      </div>
   </div>
      
    <FooterText>Copyright © 2018 Connect2Roots, All Rights Reserved.</FooterText>
  </Footer>
);
