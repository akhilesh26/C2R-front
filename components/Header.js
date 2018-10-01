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
  font-size: 32px;
  margin-bottom: 0px;
  float: right;
  font-family: ff-cocon-pro, sans-serif;
  font-style: italic;
  font-weight: 700;
  @media (max-width: 1100px) {
	  font-size: 24px;
  }
`;

const MenuButtons =styled.div`
	
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-end;

`;

const Logo = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

export default ({ children }) => (
	<Header>
		<div className='ant-row'>
			<div style={{display: 'flex', alignItems: 'center'}}>
				<div>
					<div>
						<Link href='/' passHref>
							<a> 
								<Logo >
									<img 
										style={{width:'60px'}} 
										src='/static/img/c2r-logo.jpg' 
										alt='c2r-logo'
									/> 
									<Title>Connect2Roots</Title>
								</Logo>
								
							</a>
						</Link>
					</div>
				</div>

				<div>
					<MenuButtons>
						<div>
							<Navbar />
						</div>
						
						<div>
							<Button style={{marginLeft:'10px'}}>Register</Button>
							<Button style={{marginLeft:'10px'}}>Login</Button>
						</div>
					</MenuButtons>
				</div>	
			</div>
		</div>
	</Header>
);
