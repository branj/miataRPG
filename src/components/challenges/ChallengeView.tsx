import React from 'react';
import { Layout} from 'antd';
import { useParams } from 'react-router';
import ChallengeDetailComponent from './ChallengeDetailComponent';
import GameSession from '../../libs/session/GameSession';

const { Content } = Layout;

interface ChallengeProps {
    gameSession : GameSession
}

const ChallengeView: React.FC<ChallengeProps> = ({gameSession}) => {
    let {title} = useParams()
    
    var challenge = gameSession.progress().find(challenge => challenge.name === title)

    return (
        <Layout>
            <Content>
              { challenge !== undefined ? 
                <ChallengeDetailComponent gameSession={gameSession} challenge={challenge}/>
                : 'Not found'
              } 
            </Content>
        </Layout>
    );
}

export default ChallengeView;
