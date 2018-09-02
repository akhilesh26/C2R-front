import styled from 'styled-components';

const Card = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    flex-direction: column;
    padding: 10px;
    border: 1px solid #492222;
    border-radius: 5px;
    transition: transform .2s;
    background: #AFAEAE;
    min-height: 250px;
    min-width: 200px;
    &:hover{
        color: #fff;
        background: #adf400;
        transform: scale(1.05);
        cursor: pointer;
    }
`;

const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`;

const Logo = styled.div`
    img{
        width: 60px;
    }

`;

const Title = styled.h3`
    font-size: 24px;
    font-family: 'Bree Serif', serif;
    font-weight: bold;
    color: #492222;
`;

const Detail = styled.p`
    margin-top: 10px;
    text-align: justify;
    font-family: 'Bree Serif', serif;
    font-size: 16px;
    color: #492727;
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