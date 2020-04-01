import React from 'react';
import { Modal, Input, Select, Row, Col, Button, Checkbox, Avatar } from 'antd';
import { FOCUS_NODES } from '../../libs/constants/FocusNodes';
import { COLORS } from '../../libs/constants/ux/colors';
import { TransferItem } from 'antd/lib/transfer';
import { CARS } from '../../libs/constants/Cars';
import PlayerFactory from '../../libs/factories/PlayerFactory';
import GameSession from '../../libs/session/GameSession';
import { PlayerIcon, PlayerObjectIcon, FocusIcon } from '../AppIcons';
import { Player } from '../../libs/models/player';

const { Option } = Select;

interface ModalProp {
    show: boolean,
    gameSession: GameSession
}

const EditPlayerModal: React.FC<ModalProp> = ({show, gameSession}) => {
    
    const [selectedFocus, setSelectedFocus] = React.useState([] as any)
    const [selectedColor, setSelectedColor] = React.useState()
    const [selectedName, setSelectedName] = React.useState()
    const [player, setPlayer] = React.useState(gameSession.player())
    const [visible, setVisible] = React.useState(show)

    React.useEffect(()=>{setVisible(show); console.log(show)},[show])
    
    const transferData:Array<TransferItem> = [];
    FOCUS_NODES.map((node) => {        
        return transferData.push({
            key: node.id,
            title: node.name,
            description: node.description,
            chosen: false
        })
    })

    const handleFocusUpdate = (targetKeys: any) => {
        setSelectedFocus(targetKeys);
    };

    const handleNameChange = (data:any) => {
        setSelectedName(data.target.value);
    };

    const handleColorChange = (index:any) => {
        setSelectedColor(COLORS[index]);
    };
    
    const handleOk = () => {
        gameSession.updatePlayer(selectedName, selectedColor)
        handleCancel()
    };

    const handleCancel = () => {
        setVisible(false)
    };

    const checkBoxOpts =  FOCUS_NODES.map((n,i)=> {
       var disabled = true;
       return { label: n.name, value: i, disabled: disabled }
    })

    return (
        <Modal
            title="Edit Driver"
            centered
            visible={visible}
            onOk={handleOk}
            onCancel={handleCancel}
            closable={true}
        >   
            <Row gutter={[20, 20]} align="middle">
                <Col span={2}>
                    <PlayerIcon />
                </Col>
                <Col span={22}>
                <Input.Group size="large">
                    <Row gutter={0}>
                        <Col span={21}>
                            <Input 
                                onChange={handleNameChange}
                                size="large" 
                                placeholder="Driver Name"
                                defaultValue={player.name} 
                                />
                        </Col>
                        <Col span={3}>
                            <Select 
                                onChange={handleColorChange}
                                showArrow={false}
                                size="large" 
                                placeholder="color" 
                                defaultValue={player.color}
                                style={{ width: '100%' }}>
                                {COLORS.map((color, index)=>{
                                    return <Option value={index} select> <Avatar size="small" style={{ backgroundColor:  color.value}} /></Option>
                                })}
                            </Select>
                        </Col>
                    </Row>
                </Input.Group>
               
                </Col>   
                <Col span={2}>
                    <PlayerObjectIcon />
                </Col>
                <Col span={22}>
                    <Select 
                    disabled
                    
                    size="large" 
                    placeholder="Choose Car" 
                    style={{ width: '100%' }}>
                    {CARS.map((car, index)=>{
                        return <Option value={index}>{car.make} - {car.model}</Option>
                    })}
                    </Select>
                </Col>

                <Col span={2}>
                    <FocusIcon />
                </Col>
                <Col span={22}>
                    <Checkbox.Group options={checkBoxOpts} defaultValue={['0']} onChange={handleFocusUpdate} />
                </Col>
            </Row>
        </Modal>
    );
  
}

export default EditPlayerModal;