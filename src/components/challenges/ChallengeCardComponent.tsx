import React from 'react';
import { Card, Row, Col, Statistic, Descriptions } from 'antd';
import { Challenge } from '../../libs/models/challenge';
import FocusView from '../focus/FocusView';
import MaterialView from '../materials/MaterialView';
import ChallengeStatusLabel from './ChallengeStatusLabel';
import GameSession from '../../libs/session/GameSession';
import { Link } from "react-router-dom";

interface ChallengeViewProp {
    challenge : Challenge,
    gameSession : GameSession
}

const ChallengeCardComponent: React.FC<ChallengeViewProp> = ({challenge, gameSession}) => {
    var cards = [];
    cards.push(<FocusView key={'focus'+ challenge.focus.id} focus={challenge.focus} />)
    challenge.materials.forEach((material,index) => {
        cards.push(<MaterialView key={'material-' + index} material={material} />)
    });
    return (
        <Card 
            style={{width:'300', marginBottom: '24px'}} 
            title={challenge.name} 
            actions={[
                <Link to={"/challenge/accept/" + challenge.name}>Accept</Link>
            ]}
            extra={[
                    <ChallengeStatusLabel challenge={challenge} />
                ]}>
            <p>{challenge.description}</p>
            <Row>
                <Col>
                    <Statistic title='XP' value={gameSession.points()} />
                </Col>
                <Col>
                    <Descriptions title='' bordered>
                        <Descriptions.Item label="Required Materials">link, link</Descriptions.Item>
                        <Descriptions.Item label="Dropped Materials">link, link</Descriptions.Item>
                    </Descriptions>
                </Col>
            </Row>
        </Card>
    );
  
}

export default ChallengeCardComponent;