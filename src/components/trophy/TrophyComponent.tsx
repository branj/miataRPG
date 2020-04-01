import React from 'react';

import { Trophy } from '../../libs/models/trophy';
import { TrophyTwoTone } from '@ant-design/icons';
import { Statistic, Card, Row, Col } from 'antd';


interface TrophyProp {
    trophy : Trophy
}

const TrophyComponent:  React.FC<TrophyProp> = ({trophy}) => {

    return (
        <Card title={trophy.name}>
            <Statistic title={trophy.description} prefix={<TrophyTwoTone twoToneColor="#eb2f96" />} />
        
        </Card>
    );
}

export default TrophyComponent;
