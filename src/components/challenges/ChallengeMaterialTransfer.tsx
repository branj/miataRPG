import React from 'react';
import { Transfer } from 'antd';
import { TransferItem } from 'antd/lib/transfer';
import { Material } from '../../libs/models/material';

interface ChallengeDetailProp {
    challengeMaterials : Material[],
    playerMaterials : Material[]
}

const ChallengeMaterialTransfer: React.FC<ChallengeDetailProp> = ({challengeMaterials, playerMaterials}) => {
    const [selectedData, setSelectedData] = React.useState()
    const handleChange = (targetKeys:Array<string>, direction:any, moveKeys:any) => {
            console.log(targetKeys, direction, moveKeys);
            setSelectedData(targetKeys);
    };
    const renderItem = (item:any) => {
        const customLabel = (
          <span className="custom-item">
            {item.title} - {item.description}
          </span>
        );
    
        return {
          label: customLabel, // for displayed item
          value: item.title, // for title and filter matching
        };
    };
    const transferData:Array<TransferItem> = [];
    challengeMaterials.map((node,i) => {  
        var playerHasOne = playerMaterials.find(m => m.title === node.title)
        var title       
        return transferData.push({
            key: node.title + i,
            title: node.title,
            description: node.description,
            chosen: false
        })
    })
    return (

        <Transfer
            style={{width:'100%'}}
            dataSource={transferData}
            titles={['Skills', 'Your Skills']}
            targetKeys={selectedData}
            onChange={handleChange}
            render={renderItem}
        />
    );
}

export default ChallengeMaterialTransfer;