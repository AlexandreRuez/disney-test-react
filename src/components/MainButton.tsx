import React from 'react';
import { ReactComponent as ArrowIcon } from '../assets/images/arrow.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

type MainButtonProps = {
    value: string;
    arrowActive: boolean;
    outlineStyle: boolean;
    fullwidth: boolean;
    icon: boolean;
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
        <div className={`main-button ${this.props.outlineStyle ? "outline" : ""} ${this.props.fullwidth ? "full-width" : ""}`}>
            <span>{this.props.value}</span>
            {this.renderArrow(this.props.arrowActive)}
            {
            this.props.icon && 
                <FontAwesomeIcon icon={solid('trash-can')} />
            }
        </div>
    )
    }
}

export default MainButton;