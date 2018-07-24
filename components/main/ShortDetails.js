import styled from 'styled-components';
import Card from '../../common-utils/Card';

const ShortDetail = styled.div`
    text-align: center;
    padding: 3% 0;
    h2{
        font-size: 32px;
    }
    p{
        font-size: 16px;
    }
`;

const CardData = [
    {
        title: 'Education',
        imageSource: '/static/img/shortDetail/edu.svg',
        detail: 'We provide education to your locals'
    },
    {
        title: 'Education',
        imageSource: '/static/img/shortDetail/edu.svg',
        detail: 'We provide education to your locals'
    },
    {
        title: 'Education',
        imageSource: '/static/img/shortDetail/edu.svg',
        detail: 'We provide education to your locals'
    },
    {
        title: 'Education',
        imageSource: '/static/img/shortDetail/edu.svg',
        detail: 'We provide education to your locals'
    }
];

const cards = () => (
    CardData.map((data, i) =>(
        <div className='ant-col-xs-24 ant-col-sm-12 ant-col-md-6'>
            <Card data={data} />
        </div>
    ))
) 

export default () =>(
    <ShortDetail>
        <h2>What C2R do...</h2>
        <p>Help your people from your lacation to your root</p>
        <div className='ant-row'> 
            {cards()}
        </div>
    </ShortDetail>
)