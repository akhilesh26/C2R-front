import { Component, Fragment } from 'react';
import styled from 'styled-components'
import { Menu, Icon } from 'antd';
import Link from 'next/link';

import Register from './Register';
import Login from './Login';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const DesktopMenu = styled.div`
  @media(max-width: 1020px) {
    display: none;
  }
`

const MobileMenu = styled.div`
  display: ${props => props.isOpen? "block": "none"};
  width: 100%;

  @media(min-width: 1020px) {
    display: none;
  }
`

class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            current: 'home',
            visibleLogin: false,
            visibleRegister: false
          }
    }
  
  

  handleLoginMenu =() =>{
    console.log('@@@@@@@@@@@@@@@@');
    
    this.setState({
      visibleLogin: !this.state.visibleLogin
    })
  }

  handleRegisterMenu = () =>{
    console.log('RRRRRRRRRRRRRRRRR');
    this.setState({
      visibleRegister: !this.state.visibleRegister
    })
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  

  render() {
    return (
      <Fragment>
        <DesktopMenu>
          <Menu
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
            style={{borderBottom:'0px'}}
          >
            <Menu.Item key="home">
              <Link href='/' passHref> 
                  <a>Home</a>
              </Link>
            </Menu.Item>

            <Menu.Item key="about" >
              <Link href='/aboutc2r' passHref> 
                <a>About C2R</a>
              </Link>
                
            </Menu.Item>


            <SubMenu key="projects" title={<span>C2R Projects <Icon type="caret-down" /></span>}>
              
                <Menu.Item key="setting:1">Completed</Menu.Item>
                <Menu.Item key="setting:2">Ongoing</Menu.Item>
                <Menu.Item key="setting:3">Project-general</Menu.Item>   
            </SubMenu>
            
            <SubMenu key="aop" title={<span>Areas of Operation <Icon type="caret-down" /></span>}>
              
                <Menu.Item key="aop:1">Education</Menu.Item>
                <Menu.Item key="aop:2">Skill Development</Menu.Item>
                <Menu.Item key="aop:3">Helth</Menu.Item>
                <Menu.Item key="aop:4">Agriculture</Menu.Item>    
            </SubMenu>

            <Menu.Item key="gallery">
                Photos Gallery
            </Menu.Item>
            <Menu.Item onClick={this.handleRegisterMenu} style={{border: "2px solid #fa8c16", borderRadius: "5px", margin: "0 10px"}}>
              Register
            </Menu.Item>
            <Menu.Item onClick={this.handleLoginMenu}>
                Login
            </Menu.Item>
          </Menu>
        </DesktopMenu>


        <MobileMenu isOpen={this.props.isOpen}>
          <Menu
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            style={{borderBottom:'0px'}}
            mode="inline"
          >
            <Menu.Item key="home">
              <Link href='/' passHref> 
                  <a>Home</a>
              </Link>
            </Menu.Item>

            <Menu.Item key="about" >
              <Link href='/aboutc2r' passHref> 
                <a>About C2R</a>
              </Link>
                
            </Menu.Item>


            <SubMenu key="projects" title={<span>C2R Projects <Icon type="caret-down" /></span>}>
              
                <Menu.Item key="setting:1">Completed</Menu.Item>
                <Menu.Item key="setting:2">Ongoing</Menu.Item>
                <Menu.Item key="setting:3">Project-general</Menu.Item>   
            </SubMenu>
            
            <SubMenu key="aop" title={<span>Areas of Operation <Icon type="caret-down" /></span>}>
              
                <Menu.Item key="aop:1">Education</Menu.Item>
                <Menu.Item key="aop:2">Skill Development</Menu.Item>
                <Menu.Item key="aop:3">Helth</Menu.Item>
                <Menu.Item key="aop:4">Agriculture</Menu.Item>    
            </SubMenu>

            <Menu.Item key="gallery">
                Photos Gallery
            </Menu.Item>
            <Menu.Item onClick={this.handleRegisterMenu} style={{border: "2px solid #fa8c16", borderRadius: "5px", margin: "10px 0", textAlign: "center"}}>
              Register
            </Menu.Item>
            <Menu.Item onClick={this.handleLoginMenu} style={{textAlign: "center"}}>
                Login
            </Menu.Item>
          </Menu>
        </MobileMenu>

        {
          this.state.visibleLogin &&
          <Login visibleLogin={this.state.visibleLogin} handleLoginMenu={this.handleLoginMenu} />
        }
        {
          this.state.visibleRegister &&
          <Register visibleRegister={this.state.visibleRegister} handleRegisterMenu={this.handleRegisterMenu} />
        }

      </Fragment>
    );
  }
}

export default Navbar;