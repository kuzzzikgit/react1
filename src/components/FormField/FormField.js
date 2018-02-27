import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export default class FormField extends React.Component {
      render() {
    const { label, type, name, placeholder } = this.props;

    return (
      <label className='form__label'>{label}
        <input className='form__in' type={type} name={name} placeholder={placeholder} />
      </label>
    );
  }
}

FormField.defaultProps = {
  type: 'text'
};

FormField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string
};