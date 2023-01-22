import React from 'react';

import { ImageList } from '@mui/material';
import InfoCard from './InfoCard';

const AnimeList = (props) => {
    return (
        <ImageList>
        {props.data.map((anime) => (
           <InfoCard key={anime.node.id} anime={anime}/> 
           ))}

         </ImageList>
    );
};

export default AnimeList;