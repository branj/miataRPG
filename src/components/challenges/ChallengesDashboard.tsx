import { Layout } from "antd";

import React from "react";
import GameSession from "../../libs/session/GameSession";
import ChallengesPath from "./ChallengesPath";

const { Content, Footer } = Layout;

interface GameSessionProp {
  gameSession : GameSession
}

const ChallengesDashboard: React.FC<GameSessionProp> = ({gameSession}) => {

  return (
      <Layout className="site-layout">
        <Content>
            <ChallengesPath gameSession={gameSession} />
        </Content>
        <Footer style={{ textAlign: 'center' }}>
            
        </Footer>
      </Layout>
  );
}

export default ChallengesDashboard
