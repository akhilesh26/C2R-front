import styled from 'styled-components';
import Card from '../../common-utils/Card';

const ShortDetail = styled.div`
    text-align: center;
    padding: 3% 0;
    h2{
        color: #492222;
        font-size: 32px;
        font-weight: bold;
        margin: 0px;
        font-family: 'Bree Serif', serif;
    }
    p{
        color: #000;
        font-size: 16px;
        font-family: 'Bree Serif', serif;
        padding: 0 2%;
    }
`;

const CardWraper = styled.div`
    padding: 5px;
    
`;

const CardData = [
    {
        title: 'Education',
        imageSource: '/static/img/shortDetail/edu.svg',
        detail: `This is where we are working to fill the gap to provide the 
        children to have adequate chances to learn the things.`
    },
    {
        title: 'Skill Development',
        imageSource: '/static/img/shortDetail/skill.svg',
        detail: `It is also very important to skills them once they move higher in education level. 
        Which will enable them to get suitable job or start something on their own.`
    },
    {
        title: 'Health services',
        imageSource: '/static/img/shortDetail/health.svg',
        detail: 'We provide education to your locals'
    },
    {
        title: 'Agricultural Advise',
        imageSource: '/static/img/shortDetail/agri.svg',
        detail: 'We provide education to your locals'
    }
];

const cards = () => (
    CardData.map((data, i) =>(
        <div className='ant-col-xs-24 ant-col-sm-12 ant-col-md-6'>
            <CardWraper >
                <Card data={data} />    
            </CardWraper>
            
        </div>
    ))
) 

export default () =>(
    
    <ShortDetail>
        <h2>What C2R do...</h2>
        <p>C2R would act as a transparent platform to connect keen volunteers/donors to
        their village and towns to select a project of their interest which they can monitor and guide
        for development of their village/cities which would further help in development of this
        nation.</p>
        <div className='ant-row'> 
            {cards()}
        </div>
    </ShortDetail>
    
)