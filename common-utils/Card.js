import styled from 'styled-components';

const Card = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    flex-direction: column;
    padding: 10px;
    border: 1px solid #492222;
    border-radius: 5px;
`;

const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const Logo = styled.div`
    img{
        width: 60px;
    }

`;

const Title = styled.h3`

`;

const Detail = styled.p`

`;

export default (props) =>(
    <Card>
        <Header>
            <Logo><img src={props.data.imageSource}/></Logo>
            <Title>{props.data.title}</Title>
        </Header>
        <Detail>{props.data.detail}</Detail>
    </Card>
)