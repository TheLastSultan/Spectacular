import React from 'react';
import spectacleIndexItem from './spectacles_index_item';


const SpectacleIndexItem = ({spectacle }) => (
    <li className="spectacle-index-item">
        <span>{spectacle.id}</span>
        <span>{spectacle.title}</span>  
    </li> 

); 

export default SpectacleIndexItem;