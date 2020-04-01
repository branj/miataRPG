import React from 'react';
import Icon from '@ant-design/icons';
import { UserOutlined, 
        CarOutlined, 
        ToolOutlined, 
        StarTwoTone, 
        LockOutlined, 
        UnlockOutlined, 
        CheckCircleFilled, 
        MinusCircleFilled,
        TrophyOutlined
    } from '@ant-design/icons';
import BrakeSVG from '../icons/brake';
import FluidSVG from '../icons/fluid';
import ChassiSVG from '../icons/chassis';
import ElectricalSVG from '../icons/electrical';
import EngineSVG from '../icons/engine';
import DriveTrainSVG from '../icons/drivetrain';
import NoiseSVG from '../icons/noise';
import TrunkSVG from '../icons/trunk';
import InteriorSVG from '../icons/interior';
import ChassisSVG from '../icons/chassis';

export const PlayerIcon:  React.FC = () => {
    return (
        <UserOutlined />
    );
}

export const PlayerObjectIcon:  React.FC = () => {
    return (
        <CarOutlined />    
    );
}

export const FocusIcon:  React.FC = () => {

    return (
        <ToolOutlined />
    );
}

export const XPIcon: React.FC= () => {
    return (<StarTwoTone style={{ color: 'gold' }} />)
}

export const LockIcon : React.FC= () => {
    return (<LockOutlined />)
}

export const TrophyIcon : React.FC= () => {
    return (<TrophyOutlined style={{color: "#ffc53d"}}/>)
}

export const UnLockIcon : React.FC= () => {
    return (<UnlockOutlined />)
}

export const IncompleteIcon : React.FC= () => {
    return (<MinusCircleFilled />)
}

export const CompleteIcon : React.FC= () => {
    return (<CheckCircleFilled />)
}

interface FocusNodeIcon {
    id : any
}

export const FOCUS_ID_SVG = [
    BrakeSVG,
    FluidSVG,
    EngineSVG,
    DriveTrainSVG,
    ElectricalSVG,
    ChassisSVG,
    NoiseSVG,
    InteriorSVG,
    TrunkSVG
];

export const FocusNodeIcon : React.FC<FocusNodeIcon> = ({id}) => {
    return (<Icon component={FOCUS_ID_SVG[id-1]} />);
}
