import React from 'react';
import { Car } from '../../libs/models/car';

interface PlayerObjectProp {
    object : Car
}

const PlayerObjectView:  React.FC<PlayerObjectProp> = ({object}) => {

    return (
        <div style={{width:'100%', textAlign:'center', margin: '16px 0px 24px 0px'}}><img src={object.image} width={'350px'}/></div>
    );
}

export default PlayerObjectView;
