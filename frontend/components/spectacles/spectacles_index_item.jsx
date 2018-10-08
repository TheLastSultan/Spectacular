import React from 'react';
import spectacleIndexItem from './spectacles_index_item';
import { Link } from 'react-router-dom'; 


const SpectacleIndexItem = ({spectacle }) => (
        <li className="spectacle-thumbnail col-md-3">
            <Link to={`/spectacles/${spectacle.id}`}>
                <img src={spectacle.image_url} className="spectacle-image" alt={spectacle.title} /> 
                <span className="spectacle-title">{spectacle.title}</span>  
            </Link> 
        </li> 
    
); 

export default SpectacleIndexItem;