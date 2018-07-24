import {Component} from 'react';
import { Menu, Icon } from 'antd';
import Link from 'next/link';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

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
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
        style={{borderBottom:'0px'}}
      >
        <Menu.Item key="home">
          Home
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
    );
  }
}

export default Navbar;