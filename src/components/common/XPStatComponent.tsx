import React from 'react';
import { Statistic } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { Theme } from '../../libs/theme/Theme';


interface StatProp {
    amount : number
    increase : boolean
}

const XPStatComponent: React.FC<StatProp> = ({amount,increase}) => {
    const style = {margin:'24px 8px', color: (increase) ? Theme.color('green').value : Theme.color('red').value}
    const prefix = (increase) ? <PlusOutlined /> : <MinusOutlined />
    const suffix = <div style={{color: Theme.color('lightGray').value}}>xp</div>

    return (
        <Statistic 
            value={amount} 
            valueStyle={style}
            prefix={prefix}
            suffix={suffix}
        />
    );
}

export default XPStatComponent;