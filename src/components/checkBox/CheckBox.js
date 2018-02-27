import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export default class CheckBox extends React.Component {
    
    render() {
        const {label, name, value, onChange } = this.props;

        return (
            <label className='checkBox__label'>
                <input className='checkBox__box' type='checkbox' name={name} value={value} onChange={onChange}/>
                {label}
            </label>
        );
    }
}

Checkbox.propTypes = {
    value: PropTypes.string,
    label: PropTypes.element,
    name: PropTypes.string,
onChange: PropTypes.func
};