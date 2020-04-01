import React from 'react';
import { Progress, Row, Col, Statistic, Card, Popover } from 'antd';
import { FocusNode } from '../../libs/models/focusNode';
import { CHALLENGES } from '../../libs/constants/Challenges';
import GameSession from '../../libs/session/GameSession';
import { FocusNodeIcon } from '../AppIcons';

interface FocusNodeProp {
    node : FocusNode,
    xp : number
}

const FocusNodeComponent: React.FC<FocusNodeProp> = ({node, xp}) => {
    var totalChallengesOfType = CHALLENGES.filter((e) => {return node.id === e.focus.id})
    var completeNodesOfType =  GameSession.completedNodes(node)
    var percent = 1
   if (completeNodesOfType > 0) {
        percent = completeNodesOfType/totalChallengesOfType.length * 100
    }
    var progress = <Progress  strokeColor={node.color} key={node.id} showInfo={false}  percent={percent}  />
    const content = (
        <div>
            <p>{node.description}</p> 
            <p>{completeNodesOfType}/{totalChallengesOfType.length}</p>
            {progress}
        </div>
    );
      
    return (
        <Card>
            <Row style={{height: '70px'}} align="middle" gutter={24}>
                <Popover content={content} title={node.name}>
                    <Col flex="auto" span={8} style={{height:'100%', background: node.color, paddingTop: '10%'}}>
                        <FocusNodeIcon id={node.id} />
                    </Col>
                </Popover>
                <Col span={12}>
                    <Statistic title={'xp'} value={xp}/>
                </Col>
            </Row>
        </Card>
    );
}

export default FocusNodeComponent