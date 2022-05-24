import React from 'react';
import { ReactComponent as ArrowIcon } from '../assets/images/arrow.svg'

class MainButton extends React.Component {
    renderArrow(arrowActive) {
        if(arrowActive) {
            return (
                <span className='button-arrow'>
                    <ArrowIcon/>
                </span>
            )
        }
        else {
            return
        }
    }
    render() {
    return (
        <div className="main-button">
            <span>{this.props.value}</span>
            {this.renderArrow(this.props.arrowActive)}
        </div>
    )
    }
}

export default MainButton;