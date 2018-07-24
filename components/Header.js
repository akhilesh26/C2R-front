import { Icon, Avatar, Badge, Button } from "antd";
import styled from "styled-components";
import Navbar from './Navbar';
import Link from 'next/link';
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  top:0;
  position:fixed;
  width: 100vw;
  height: 70px;
  align-items: center;
  z-index: 10;
  background: #FFF;
  box-shadow: 0 1px 4px 0 rgba(13,26,44,.23);
  padding-right: 10px;
  padding-left: 10px;
  @media(max-width: 800px){
    flex-direction: column;
  }
`;

const Title = styled.h1`
  color: #492222;
  font-size: 36px;
  margin-bottom: 0px;
  float: right;
  font-family: ff-cocon-pro, sans-serif;
  font-style: italic;
  font-weight: 700;
`;


export default ({ children }) => (
  <Header>
    <div>
      <Link href='/' passHref>
        <a> <Title>Connect2Root</Title></a>
      </Link>
      
    </div>
    <Navbar />

    <div>
    <Button>Register</Button>
    <Button style={{marginLeft:'20px'}}>Login</Button>
    </div>
   

  </Header>
);
