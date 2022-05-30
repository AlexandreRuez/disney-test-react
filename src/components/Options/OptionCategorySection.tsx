import React from 'react';
import OptionCard from "./OptionCard"

type Option = { id: number; title: string; description: string; image: string; }

type OptionCategorySectionProps = {
    options: Option[];
  };


class OptionCategorySection extends React.Component<OptionCategorySectionProps> {
    renderOption() {
        return (
            this.props.options.map(option => (
                <OptionCard option={option} key={option.id}/>
            ))
        )
    }
    render () {
        return (
            <div>
                <div className="option-category-header">
                    <h4>Luggage service upon arrival</h4>
                    <p>Don’t miss a minute of the Magic! With Disney Express, you can head to the Parks as soon as you arrive.</p>
                </div>
                <div className='cards-wrapper'>
                    {this.renderOption()}
                
                </div>
            </div>
        );
    }
}

export default OptionCategorySection