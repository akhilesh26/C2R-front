import React, { Component } from 'react'
import { Icon, Avatar, Badge, Button } from "antd";
import styled from "styled-components";

import Navbar from './Navbar';


import Link from 'next/link';

const Header = styled.div`
	position:fixed;
	z-index: 10;
	background: #FFF;
	box-shadow: 0 1px 4px 0 rgba(13,26,44,.23);
	width: 100vw;
`;

const Title = styled.h1`
  color: #30120A;
  font-size: 24px;
  margin-bottom: 0px;
  float: right;
  font-family: ff-cocon-pro, sans-serif;
  font-style: italic;
  font-weight: 700;
  margin-left: 5px;
`;

const MenuButtons =styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-end;


	@media(max-width: 1020px) {
		width: 100%;
		justify-content: center;
	}

`;

const Logo = styled.a`
	text-decoration: none;
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;

  @media(max-width: 1020px) {
	  flex-direction: column; 
	  justify-content: center;
  }
`

const MobileMenuButton = styled.div`
	display: none;
	  
	@media(max-width: 1020px) {
		display: block;
	}
`

const LinkWrapper = styled.div`
	@media(max-width: 1020px) {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`

export default class extends Component  {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
		}
	}

	handleClick = () => {
		this.setState({
			isOpen: !this.state.isOpen,
		})
	}

	render() {
		
		return (
			<Header>
				<div className='ant-row'>
					<HeaderWrapper>
						<LinkWrapper>
							<Link href='/' passHref>
									<Logo>
										<img 
											style={{width:'60px'}} 
											src='/static/img/c2r-logo.jpg' 
											alt='c2r-logo'
										/> 
										<Title>Connect2Roots</Title>
									</Logo>		
							</Link>
							<MobileMenuButton onClick={this.handleClick}>
								<Icon type={this.state.isOpen? "close": "menu-fold"} theme="outlined" style={{fontSize: '28px'}}/>
							</MobileMenuButton>
						</LinkWrapper>
						<MenuButtons>
							<Navbar isOpen={this.state.isOpen}/>
						</MenuButtons>
					</HeaderWrapper>
				</div>
			</Header>
		)
	}
}