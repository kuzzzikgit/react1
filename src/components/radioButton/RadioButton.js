import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export default class RadioButton extends React.Component {
  render() {
    const { label, name, value } = this.props;

    return (
      <label className='radio-button__label'>
        <input className='radio-button__radio' type='radio' name={name} value={value} />
        {label}
      </label>
    );
  }
}

RadioButton.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string
};