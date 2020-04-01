import React from 'react';
import { Avatar } from 'antd';
import EditPlayerModal from './EditPlayerModal';
import GameSession from '../../libs/session/GameSession';

interface AvatarProp {
    gameSession : GameSession
}

const PlayerAvatarComponent: React.FC<AvatarProp> = ({gameSession}) => {
    
    const [show, setShow] = React.useState(false)
    const [player, setPlayer] = React.useState(gameSession.player())
    const handleClick = () => {
        setShow(!show)
    }

    return (
        <div>
            <EditPlayerModal show={show} gameSession={gameSession} />
            <span onClick={handleClick}>
            <Avatar style={{ backgroundColor: player.color, verticalAlign: 'middle' }} size="large">
                {player.name}
            </Avatar>
            </span>
        </div>
    );
  
}

export default PlayerAvatarComponent;