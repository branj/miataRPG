import React from 'react';
import { Progress, Row, Col } from 'antd';
import ProgressComponent, { ProgressProp } from './ProgressComponent';

interface ProgressesProp {
    dataSource: ProgressProp [],
}

const ProgressesComponent: React.FC<ProgressesProp> = ({dataSource}) => {

    return (
        <div style={{margin: '16px 0px'}}>
            {dataSource.map(e => <ProgressComponent {...e} />)}
        </div>
    );
}

export default ProgressesComponent;