import React from 'react';
import { Row, Col} from 'antd';
import FocusNode from '../focus/FocusNode';
import GameSession from '../../libs/session/GameSession';
import { FOCUS_NODES } from '../../libs/constants/FocusNodes';
import PlayerObjectView from './PlayerObjectView';
import ProgressesComponent from '../common/ProgressesComponent';
import XPStatComponent from '../common/XPStatComponent';
import { Typography } from 'antd';

interface PlayerObjectProgressProp {
    gameSession : GameSession
}

const { Title } = Typography;
const LEFT_NODES = FOCUS_NODES.slice(0, Math.floor(FOCUS_NODES.length/2))
const RIGHT_NODES = FOCUS_NODES.slice(Math.ceil(FOCUS_NODES.length/2), FOCUS_NODES.length)

const PlayerObjectProgress: React.FC<PlayerObjectProgressProp> = ({gameSession}) => {
    const progressData = gameSession.getStatsProgress();
    return (
        <Row align="middle" gutter={10}>
            <Col span={4}>
                {
                    LEFT_NODES.map(e => <FocusNode  xp={gameSession.points(e)} node={e} />)
                }
            </Col>
            <Col span={16}>
                <Row style={{textAlign:'center'}} gutter={10}>
                    <Col span={24}>
                        <XPStatComponent amount={gameSession.points()} increase={true} />
                        <Title>{gameSession.getPlayerRank()}</Title>
                    </Col>
                    <Col span={24}>
                        <PlayerObjectView object={gameSession.player().car} />
                    </Col>
                    <Col span={24}>
                        <ProgressesComponent dataSource={progressData} />
                    </Col>
                </Row>
            </Col>
            <Col span={4}>
                {
                    RIGHT_NODES.map(e => <FocusNode xp={gameSession.points(e)} node={e} />)
                }
            </Col>
        </Row>
    );  
}

export default PlayerObjectProgress;