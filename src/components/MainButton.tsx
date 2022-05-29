import React from 'react';
import { ReactComponent as ArrowIcon } from '../assets/images/arrow.svg'

type MainButtonProps = {
    value: string;
    arrowActive: boolean;
    style: string;
    fullwidth: boolean;
  };

class MainButton extends React.Component<MainButtonProps> {
    constructor(props) {
        super(props);
        this.state = {}

    }
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
        <div className={`main-button ${this.props.style} ${this.props.fullwidth ? "full-width" : ""}`}>
            <span>{this.props.value}</span>
            {this.renderArrow(this.props.arrowActive)}
        </div>
    )
    }
}

export default MainButton;