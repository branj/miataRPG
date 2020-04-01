import React from 'react';
import { Tabs } from 'antd';
import GameSession from '../../libs/session/GameSession';
import PlayerObjectProgress from '../player/PlayerObjectProgress';
import FocusNodes from '../focus/FocusNodes';
import PlayerMaterials from '../player/PlayerMaterials';
import PlayerTrophyCase from '../player/PlayerTrophyCase';
const { TabPane } = Tabs;

interface GameSessionProp {
    gameSession : GameSession
}

const ManageDashboard: React.FC<GameSessionProp> = ({gameSession}) => {
    return (
        <Tabs defaultActiveKey="1">
            <TabPane tab="Progress" key="1">
                <PlayerObjectProgress gameSession={gameSession} />
            </TabPane>
            <TabPane tab="Materials" key="2">
                <PlayerMaterials materials={gameSession.player().materials} />
            </TabPane>
            <TabPane tab="Trophies" key="3">
                <PlayerTrophyCase trophies={gameSession.trophies()}  />
            </TabPane>
            <TabPane tab="Settings" key="4">
                
            </TabPane>
        </Tabs>
    );
  
}

export default ManageDashboard;