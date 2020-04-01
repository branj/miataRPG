import React from 'react';
import { Badge } from 'antd';
import { Difficulty } from '../../libs/models/difficulty';
import { DIFFICULTIES } from '../../libs/constants/Difficulties';

interface DifficultyViewProp {
    difficulty : Difficulty
}

const DifficultyBadge: React.FC<DifficultyViewProp> = ({difficulty}) => {
    
    const getStatus = (id : number) => {
        var index = id-1
        console.log(id)
        if(id === DIFFICULTIES[index].id) {
            return 'success'
        } 
        if(id === DIFFICULTIES[index].id) {
            return 'warning'
        }
        if(id === DIFFICULTIES[index].id) {
            return 'error'
        }
        return 'default'
    }

    return (
        <Badge status={getStatus(difficulty.id)} text={difficulty.name} />
    );
  
}

export default DifficultyBadge;