import React from 'react';
import {  Row, Col, Divider, Button, Alert, Result } from 'antd';
import { Challenge } from '../../libs/models/challenge';
import FocusView from '../focus/FocusView';
import MaterialView from '../materials/MaterialView';
import GameSession from '../../libs/session/GameSession';
import { Link } from "react-router-dom";
import { Typography } from 'antd';
import ProgressesComponent from '../common/ProgressesComponent';

const { Text } = Typography;;

interface ChallengeViewProp {
    challenge : Challenge,
    gameSession : GameSession,
    locked : boolean
}

const ChallengePopoverComponent: React.FC<ChallengeViewProp> = ({challenge, gameSession, locked}) => {
    
    var cards = [];
    cards.push(<FocusView key={'focus'+ challenge.focus.id} focus={challenge.focus} />)
    challenge.materials.forEach((material,index) => {
        cards.push(<MaterialView key={'material-' + index} material={material} />)
    }); 
    
    var button = <Button type="primary" block={true} disabled={locked}>{challenge.completed ? "Re-Play" : "Accept"}</Button>
    var link = <Link to={"/challenge/accept/" + challenge.name}>{button}</Link>
    var alert = locked ? <Alert banner message="Not enough xp" type="error" /> : '' 

    const progressData = gameSession.getStatsProgress(challenge.completed ? undefined : challenge); 

    return (
        <div style={{width: '330px', padding: 0}}>
            {challenge.completed ? 
            <Result
                status="success"
                title={challenge.name + " completed!"}
                subTitle={challenge.completedOn}
                extra={[
                    link
                ]}
            /> 
            :
            <div>
                <Text type="secondary" style={{fontSize: '16px', marginBottom: '24px'}}>{challenge.description}</Text>
                {alert}
                {link}
                <Divider>Stats</Divider>
                <ProgressesComponent dataSource={progressData} />
                <Divider>Required Materials</Divider>
                <Row gutter={[8,16]}>
                    {challenge.materials.map((e) => {
                        return <><Col span={2}>#</Col><Col span={20}>{e.title}</Col><Col span={2}>{gameSession.getMaterial(e).qty}/{e.qty}</Col></>
                    })}
                </Row>
            </div>
            }
        </div>
    );
  
}

export default ChallengePopoverComponent;