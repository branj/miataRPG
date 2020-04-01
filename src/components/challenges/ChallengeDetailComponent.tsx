import React from 'react';
import { PageHeader, Switch, Row, Col, Divider, Result, Button } from 'antd';

import { Challenge } from '../../libs/models/challenge';
import GameSession from '../../libs/session/GameSession';
import ChallengeStatusLabel from './ChallengeStatusLabel';
import MaterialsTable from '../materials/MaterialsTable';
import ProgressesComponent from '../common/ProgressesComponent';
import ChallengeSteps from './ChallengeSteps';

interface ChallengeDetailProp {
    challenge : Challenge,
    gameSession : GameSession
}
const ChallengeDetailComponent: React.FC<ChallengeDetailProp> = ({challenge, gameSession}) => {
    
    const [completed, setCompleted] = React.useState(challenge.completed)
    const [progressData, setProgressData] = React.useState(gameSession.getStatsProgress(completed ? undefined : challenge))
    
    const updateChallenge = () => {
        challenge.completed = !completed
        setCompleted(challenge.completed)
        gameSession.complete(challenge)
        setProgressData(gameSession.getStatsProgress(completed ? undefined : challenge));
    }

    return (
        <>
            <PageHeader
                title={challenge.name}
                subTitle={challenge.focus.name}
                className="site-page-header"
                onBack={() => {window.history.back()}}
                tags={<ChallengeStatusLabel challenge={challenge} />}
                extra={[
                <Switch
                    style={{marginLeft:'8px'}}
                    onChange={updateChallenge}
                    defaultChecked={challenge.completed}
                    checkedChildren={<span>Undo</span>}
                    unCheckedChildren={<span>Mark Done</span>}
                />
                ]}
                avatar={{ src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4' }}
                //breadcrumb={{ routes }}
                footer={
                    <p>
                    {challenge.description}
                    </p>
                }
            />

            <Row align="top" gutter={16}>
                <Col span={14}>
                   {!challenge.completed ? <ChallengeSteps challengeSteps={challenge.steps} completeFunction={updateChallenge} /> : 
                    <Result
                        status="success"
                        title="Finished!"
                        subTitle="Your rock."
                        extra={[
                            <Button key="buy">View Steps</Button>,
                        ]}
                    />
                   } 
                
                </Col>
                <Col style={{textAlign:'center'}} span={10}>
                    <ProgressesComponent dataSource={progressData} />
                    <Divider />
                    <MaterialsTable materials={challenge.materials} />
                </Col>
            </Row>
        </>

    );
}

export default ChallengeDetailComponent;
