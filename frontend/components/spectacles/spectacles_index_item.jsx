import React from 'react';
import spectacleIndexItem from './spectacles_index_item';


const SpectacleIndexItem = ({spectacle }) => (
        <li className="spectacle-thumbnail col-md-3">
            <img src={spectacle.image_url} className="spectacle-image" alt={spectacle.title} /> 
            <span className="spectacle-title">{spectacle.title}</span>  
        </li> 
    
); 

export default SpectacleIndexItem;