import React from 'react';
import { Tag } from 'antd';
import { Challenge } from '../../libs/models/challenge';

interface LabelViewProp {
    challenge : Challenge
}

const ChallengeStatusLabel: React.FC<LabelViewProp> = ({challenge}) => {
    
    const getColor = (status : boolean) => {
        if(status) {
            return 'success'
        } else {
            return 'error'
        }
    }

    const getText = (status : boolean) => {
        if(status) {
            return 'completed'
        } else {
            return 'incomplete'
        }
    }
    return (
        <Tag color={getColor(challenge.completed)}>{getText(challenge.completed)}</Tag>
    );
}

export default ChallengeStatusLabel;