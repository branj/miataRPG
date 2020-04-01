import {Card } from 'antd';
import React from 'react';
import GameSession from '../../libs/session/GameSession';
import { FOCUS_NODES } from '../../libs/constants/FocusNodes';
import ChallengeAvatar from './ChallengeAvatar';
import { TrophyIcon } from '../AppIcons';

interface GameSessionProp {
    gameSession : GameSession
}
  
const ChallengesPath: React.FC<GameSessionProp> = ({gameSession}) => {

    return (
      <div style={{padding:'16px'}}>

        {FOCUS_NODES.map((n,v) => {
                var completed = false
                var focusProgress  = gameSession.progress().filter( c => c.focus.id === n.id)
                var focusStyle = {padding: 0, width: Math.floor(100/focusProgress.length) + "%"}
                return  <Card title={n.name}>
                            { 
                                gameSession.progress().filter( c => c.focus.id === n.id).map((e,i)=>{
                                        completed = e.completed;
                                        return <Card.Grid style={focusStyle}>
                                                    <ChallengeAvatar    
                                                        key={'challeng-car-' + i} 
                                                        gameSession={gameSession} challenge={e} challengeNum={i} 
                                                    />
                                                </Card.Grid>
                                    }
                                )
                            }
                            {completed ? 
                                    <Card.Grid hoverable={false} style={{...focusStyle, ...{textAlign: 'center', fontSize: '28px', border: 'none', backgroundColor: '#fff1b8'}}}>
                                        <TrophyIcon />
                                    </Card.Grid> 
                                        : ''}
                        </Card>
                }
            )
        }
       
      </div>
    );
}

export default ChallengesPath
