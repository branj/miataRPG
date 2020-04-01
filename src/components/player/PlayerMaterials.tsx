import React from 'react';

import { Material } from '../../libs/models/material';
import MaterialsTable from '../materials/MaterialsTable';
import MaterialsDashboard from '../materials/MaterialsDashboard';

interface PlayerMaterialProp {
    materials : Material[]
}

const PlayerMaterials:  React.FC<PlayerMaterialProp> = ({materials}) => {
    return (
        <MaterialsDashboard materials={materials} />
    );
}

export default PlayerMaterials;
