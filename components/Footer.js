import styled from "styled-components";
import Link from 'next/link';

const Footer = styled.div`
  h3{
    color: #fff;
    text-align: center;
  }
  
  background: #30120A;
  width: 100vw;
  
`;

const Logo = styled.img`
  width: 150px;
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
	<div style={{padding: '3% 5%', borderBottom: '1px solid hsla(0,0%,100%,.25)'}}>
		<div className='ant-row'>
			<div className='ant-col-xs-24 ant-col-sm-8 ant-col-md-4' >
				<Link href='/' passHref>
					<a style={{margin: 'auto'}}>
						<Logo src='/static/img/c2r-logo.jpg' alt='c2r-logo'/>
					</a>
				</Link>
			</div>

			<div className='ant-col-xs-24 ant-col-sm-8 ant-col-md-5'>
				<h3>Team</h3>
			</div>

			<div className='ant-col-xs-24 ant-col-sm-8 ant-col-md-5'>
				<h3>Contact Us</h3>
			</div>

			<div className='ant-col-xs-24 ant-col-sm-8 ant-col-md-5'>
				<h3>Carrier</h3>
			</div>

			<div className='ant-col-xs-24 ant-col-sm-8 ant-col-md-5'>
				<h3>Share</h3>
			</div>
		</div>
	</div>

	<FooterText>Copyright © 2018 Connect2Roots, All Rights Reserved.</FooterText>
</Footer>
);
