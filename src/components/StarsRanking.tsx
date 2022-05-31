import React from 'react';
import star from "../assets/images/star.svg";

type StarsRankingProps = {
    ranking: number
  };

function StarsRanking(props: StarsRankingProps) {
    var stars = [];
    for (var i = 0; i < props.ranking; i++) {
        stars.push(<i key={i}><img src={star} alt="star icon"></img></i>);
    }
    return (
        <div className='ranking-container'>
            {stars}
        </div>
    )
}

export default StarsRanking