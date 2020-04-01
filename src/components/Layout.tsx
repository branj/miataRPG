import React from 'react';
import { Layout, Menu } from 'antd';
import {
  CarOutlined,
  TrophyOutlined
} from '@ant-design/icons';
import {
    Switch,
    Route,
    Link
  } from "react-router-dom";
import CareerView from './player/Career';
import ConfigView from './config/ConfigView';
import ChallengesDashboard from './challenges/ChallengesDashboard';
import ChallengeView from './challenges/ChallengeView';
import PlayerAvatarComponent from './player/PlayerAvatarComponent';
import GameSession from '../libs/session/GameSession';
import ManageDashboard from './manage/ManageDashboard';

const { Header, Content, Footer, Sider } = Layout;

interface LayoutProps {
    gameSession : GameSession
}
const LayoutView: React.FC<LayoutProps> = ({gameSession}) => {

  const [collapsed, setCollapsed] = React.useState(false) 
  const [player, setPlayer] = React.useState(gameSession.player()) 
  const [activeSession, setActiveSession] = React.useState(gameSession)  
  
  const onCollapse = (collapsed:any) => {
    setCollapsed(collapsed);
  };

  React.useEffect(()=>{
      gameSession = activeSession
      setActiveSession(activeSession)},
      [activeSession]
  )

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo">
              RPG
          </div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            
            <Menu.Item key="1">
            <TrophyOutlined />
                <span>
                    <Link to="/challenges">
                        Challenges
                    </Link>
                </span>
            </Menu.Item>

            <Menu.Item key="3">
                <CarOutlined />
                <span><Link to="/garage">Garage</Link></span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background"  style={{ padding: 0, paddingRight: '16px', textAlign:'right' }}>
              <PlayerAvatarComponent gameSession={activeSession} />
          </Header>
          <Content style={{ margin: '0 8px' }}>      
            <div>

                {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/garage">
                        <ManageDashboard gameSession={activeSession}/>
                    </Route>
                    <Route path="/career">
                        <CareerView />
                    </Route>

                    <Route path="/challenge/accept/:title">
                        <ChallengeView gameSession={activeSession} />
                    </Route>
                    <Route path="/challenges">
                        <ChallengesDashboard gameSession={activeSession} />
                    </Route>
                    <Route path="/garage">
                        <ConfigView />
                    </Route>
                    <Route path="/">
                        <ChallengesDashboard gameSession={activeSession} />
                    </Route>
                </Switch>
            </div>

          </Content>
          <Footer style={{ textAlign: 'center' }}>Miata RPG 2020 Created by brandj.co</Footer>
        </Layout>
      </Layout>
    );
}

export default LayoutView
