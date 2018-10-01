import { Component, Fragment } from 'react';
import styled from 'styled-components'
import { Menu, Icon } from 'antd';
import Link from 'next/link';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const DesktopMenu = styled.div`
  @media(max-width: 768px) {
    display: none;
  }
`

const MobileMenu = styled.div`
  display: block;

  @media(min-width: 768px) {
    display: none;
  }
`

class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            current: 'home',
          }
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
          </Menu>
        </DesktopMenu>


        <MobileMenu>
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
          </Menu>
        </MobileMenu>
      </Fragment>
    );
  }
}

export default Navbar;