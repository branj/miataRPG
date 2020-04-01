import React from 'react';
import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import LayoutView from './components/Layout';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import GameSession, { GameSessionMessage } from './libs/session/GameSession';
import HomeScreen from './components/pages/HomeScreen';
import { message } from 'antd';

function App() {
  
  const [sessionMessage, setMessage] = React.useState<GameSessionMessage|undefined>(undefined)
  const [gS, setGameSession] = React.useState<GameSession>(new GameSession(setMessage))
  
  React.useEffect(()=>{
    setGameSession(gS)
  }, [gS])

  return (
    <Router>    
      {gS.player() === undefined ? 
        <HomeScreen /> : 
        <LayoutView gameSession={gS} />
      }
      {
        sessionMessage !== undefined ? 
          message.success(sessionMessage?.title)
        :
          ''
      }
    </Router>
  );
}

export default App;
