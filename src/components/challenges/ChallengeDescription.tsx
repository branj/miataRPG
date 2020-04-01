import React from 'react';
import { Descriptions } from 'antd';
import { Challenge } from '../../libs/models/challenge';
import FocusBadge from '../focus/FocusBadge';
import DifficultyBadge from '../difficulties/DifficultyBadge';

interface ChallengeDescripProp {
    challenge : Challenge
}
const ChallengeDescription: React.FC<ChallengeDescripProp> = ({challenge}) => {
    
    return (
        <Descriptions title={challenge.description}>
            <Descriptions.Item label="Difficulty">
                <DifficultyBadge difficulty={challenge.difficulty} />
            </Descriptions.Item>
            <Descriptions.Item label="Focus">
                <FocusBadge focus={challenge.focus} />
            </Descriptions.Item>
        </Descriptions>
    );
}

export default ChallengeDescription;
