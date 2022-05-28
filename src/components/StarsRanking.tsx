import React from 'react';
import star from "../assets/images/star.svg";

type StarsRankingProps = {
    ranking: number
  };

class StarsRanking extends React.Component<StarsRankingProps> {
    renderRanking(rate) {
        const stars = [];
        for (var i = 0; i < rate; i++) {
            stars.push(<i key={i}><img src={star} alt="star icon"></img></i>);
        }
        return (
            <div className='ranking-container'>
                {stars}
            </div>
        )
    }
    render() {
        return (
            <div>
                {this.renderRanking(this.props.ranking)}
            </div>
        );
    }
}

export default StarsRanking