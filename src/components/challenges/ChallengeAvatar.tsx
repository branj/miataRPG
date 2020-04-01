import React from 'react';
import { Popover, Typography, Row, Alert} from 'antd';
import { Challenge } from '../../libs/models/challenge';
import GameSession from '../../libs/session/GameSession';
import ChallengePopoverComponent from './ChallengePopoverContent';

const { Title } = Typography;;

interface ChallengeViewProp {
    challenge : Challenge,
    gameSession : GameSession,
    challengeNum : number
}

const ChallengeAvatar: React.FC<ChallengeViewProp> = ({challenge, gameSession, challengeNum}) => {
    
    var points = 0
    challenge.utils.forEach(u => points = points + u.points)
    const bdDifficulty = challenge.difficulty.id
    const locked = gameSession.locked(challenge)
    const completedBG = challenge.completed ? '#95de64' : '#ff7875'
    const textAlert = <Alert message={challenge.focus.name.substr(0,2).toUpperCase() + '-' + challengeNum} type={bdDifficulty === 1 ? 'success' :  bdDifficulty === 2 ? 'warning' : 'error'} />
    const style = {'width' : '100%', 'borderBottom' : 'solid medium ' + completedBG }
    const popoverTitle = <Title style={{marginTop:'16px'}} level={4}>{challenge.name}</Title>
    const content = <ChallengePopoverComponent challenge={challenge} gameSession={gameSession} locked={locked}/>
    
    return (
        <Popover content={content} title={<Row gutter={[0,0]}>{popoverTitle}</Row>}>
            <div style={style}>
                {textAlert}
            </div>
        </Popover>
    );
}

export default ChallengeAvatar;