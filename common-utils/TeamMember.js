import React,{Component} from 'react';

import { Card } from 'antd';
const { Meta } = Card;

export default (props) =>(
    <Card
        hoverable
        style={{ width: 240, height: 350}}
        cover={<img alt="Member Image" src={props.imageUrl} />}
    >
        <Meta
            title={props.name}
            description={props.detail}
        />
    </Card>
)