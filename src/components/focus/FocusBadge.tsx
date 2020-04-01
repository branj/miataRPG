import React from 'react';
import { Badge } from 'antd';
import { FocusNode } from '../../libs/models/models';

interface FocusViewProp {
    focus : FocusNode
}

const FocusBadge: React.FC<FocusViewProp> = ({focus}) => {
    
    return (
        <Badge status="processing" text={focus.name} />
    );
  
}

export default FocusBadge;