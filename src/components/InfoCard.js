import React, { useEffect } from 'react';
import "./InfoCard.css"
import { SearchContext } from '../context/search';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import { maxHeight } from '@mui/system';

function InfoCard(props) {
    const id = props.anime[1].node.id
    const onClickHandler = () => {
        window.open("https://myanimelist.net/anime/".concat(id))
    }

    
    var title = props.anime[1].node.title === null ? "": props.anime[1].node.title;
        title = title.length > 20 ? `${title.substring(0, 20)}...`: title;
    const imageUrl = props.anime[1].node.main_picture.large;
    var synopsis = props.anime.node.synopsis === null ? "": props.anime.node.synopsis;
    synopsis = synopsis.length > 120 ? `${synopsis.substring(0, 120)}...`: synopsis;

    // !!! wishlist for the ranking of the recommendations
    
    var score = props.anime.list_status.score

    console.log(title)

    return (
        <div className="InfoCard-container">
            
            <Paper className="animeCard__paper">
 
            <div className="InfoCard-set">

                    <div className="card-title">
                        <h2> 
                            {/* !!! FIGURE OUT SOME WAY TO PUT THE RANKING HERE FOLKS */}
                            1. {/* RIGHT HERE */}
                            {title} 
                        </h2> 
                    </div>
                    
                    <img 
                        src={imageUrl} 
                        alt={title}
                        style={{ maxHeight: 500}}
                        width="80%%"
                        height="80%"
                    />

                    <div className="card-detail">
                    <Typography variant="body2" component="h2" paragraph={true}>
                        {synopsis}
                    </Typography>
                    </div>
                    
                    <div className="MALbutton">
                        <Button variant="body1" style={{marginBottom: 0}} onClick={onClickHandler}>
                            Visit MyAnimeList Website Entry
                        </Button>
                    </div>

                
            </div>

            </Paper> 

        </div>
    )
}

export default InfoCard;