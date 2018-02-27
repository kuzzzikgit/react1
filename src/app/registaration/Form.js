import React from 'react';

import FormField from '../../components/FormField/FormField';
import RadioButton from '../../components/radioButton/RadioButton';
import CheckBox from '../../components/checkBox/CheckBox';
import Button from '../../components/button/Button';

import './style.scss';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            sex: '',
            email: '',
            password: '',
            consent: false
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
}
    
        handleChange(event) {
        let target = event;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
            [name]: value
        });
        }
            
        handleSubmit(event) {
        event.preventDefault();
                    
        console.log(
            'firstName: ' + this.state.firstName
            + ' lastName: ' + this.state.lastName
            + ' sex: ' + this.state.sex
            + ' email: ' + this.state.email
            + ' pass: ' + this.state.password
            + ' consent: ' + this.state.consent);
        }
    
render() {
    return (
        <div className='form__header'>
        <header className='form__header'>
            <h2 className='form__heading'>Давайте начнем! </h2>
        </header>
        <form className='form__reg' onSubmit={this.handleSubmit}>
        <FormField
            label = 'Имя'
            type = 'text'
            name = 'firstName'
            placeholder = 'Чендлер'
            value={this.state.firstName}
            onChange={this.handleChange}
        />
        <FormField
            label = 'Фамилия'
            type = 'text'
            name = 'secondName'
            placeholder = 'Бинг'
            onChange={this.handleChange}
         />
        <div className='form__label' onChange={this.handleChange}>
        <label>Ваш пол</label>
        <RadioButton
            label = 'Женский'
            name = 'sex'
            value = 'female'
            checked
        />
       <RadioButton
            label = 'Мужской'
            name = 'sex'
            value = 'male'
        />
        </div>
        <FormField
            label = 'Введите электронный адрес'
            type = 'text'
            name = 'email'
            placeholder = 'email@gmail.com'
            onChange={this.handleChange}
        />
       <FormField
            label = 'Придумайте пароль'
            type = 'password'
            name = 'password'
            onChange={this.handleChange}
        />
        <CheckBox
            id='consent'
            name='consent'
            checked={this.state.consent}
            onChange={this.handleChange}
        />
       <div className='form__check'>
            Я принимаю условия <a href='#' className='form__check_href' htmlFor='consent'>Пользовательского соглашения</a> и даю свое согласие на обработку моих персональных данных на условиях, определенных <a href='#' className='form__check_href' htmlFor='consent'>Политикой конфиденциальности</a>
       </div>
    
        <Button classes = 'form__button' type = 'submit' value = 'Зарегистрироваться' />
        </form>
        </div>
        )
    }
}