import React from 'react';
import { Row, Col } from 'antd';
import TrophyComponent from '../trophy/TrophyComponent';
import { Trophy } from '../../libs/models/trophy';

interface TrophiesProp {
    trophies : Trophy[]
}

const PlayerTrophyCase:  React.FC<TrophiesProp> = ({trophies}) => {

    return (
        <Row gutter={[16, 16]}>
           
            {trophies.map(t =>  <Col span={3}><TrophyComponent trophy={t} /></Col>)}
           
        </Row>
    );
}

export default PlayerTrophyCase;
