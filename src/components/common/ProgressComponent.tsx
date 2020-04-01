import React from 'react';
import { Progress, Row, Col } from 'antd';

export interface ProgressProp {
    name : string
    percent : number,
    progressPercent? : number
}

const ProgressComponent: React.FC<ProgressProp> = ({name, percent, progressPercent}) => {
  
    const succcessPercent = progressPercent !== undefined ? progressPercent : percent

    return (
        <Row style={{margin: '0px 0px', width:'100%', textAlign:'left'}} gutter={24}>
            <Col span={6}>{name}</Col>
            <Col span={18}>
                <Progress 
                    showInfo={true} 
                    successPercent={percent} 
                    percent={succcessPercent}
                    strokeLinecap="round"
                />
            </Col>
        </Row>
    )
}

export default ProgressComponent;