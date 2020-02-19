import React from 'react';
import { Field, reduxForm } from 'redux-form';
import history from '../history';

class Form extends React.Component {

    state = { button: 'active' };

    renderError ({ error, touched }) {
        if( touched && error ){
            return (
                <div className="ui error message">
                    <div className="header">
                        {error}
                    </div>
                </div>
            );
        }
    }

    renderInput = ({ input, label, meta, className }) => {
        const style = `${className} ${meta.error && meta.touched ? 'error' : '' }`;
        return (
            <div className={style}>
                <label>{label}</label>
                <input {...input} autoComplete="off"/>
                {this.renderError(meta)}
            </div>
        );
    }

    onSubmit(formValues) {
        history.push('/subscription');
    }

    render() {

        return (
            <div style={{marginTop: '20px'}}>
                <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <div className="fields">
                        <Field name="lastName" component={this.renderInput} label="Last Name" className={`eight wide field`}/>
                        <Field name="firstName" component={this.renderInput} label="First Name" className={`eight wide field`}/>
                    </div>
                    <div className="fields">
                        <Field name="address" component={this.renderInput} label="Address" className={`six wide field`}/>
                        <Field name="city" component={this.renderInput} label="City" className={`six wide field`}/>
                        <Field name="postalCode" component={this.renderInput} label="Postal Code" className={`four wide field`}/>
                    </div>
                    <div className="fields">
                        <Field name="mail" component={this.renderInput} label="Mail" className={`nine wide field`}/>
                        <Field name="phone" component={this.renderInput} label="Phone" className={`seven wide field`}/>
                    </div>
                    <div style={{marginTop: '20px'}}>
                        <button className="ui left floated blue button">Subscribe</button>
                    </div>
                </form>
            </div>
        );
    

        
    }
}

const validate = (formValues) => {
    const errors = {};

    if(!formValues.lastName) {
        errors.lastName = 'You must enter your last name';
    }

    if(!formValues.firstName) {
        errors.firstName = 'You must enter your first name';
    }

    if(!formValues.address) {
        errors.address = 'You must enter your address';
    }

    if(!formValues.city) {
        errors.city = 'You must enter the city';
    }

    if(!formValues.postalCode) {
        errors.postalCode = 'You must enter the postal code';
    }

    if(!formValues.mail) {
        errors.mail = 'You must enter your email';
    }

    if(!formValues.phone) {
        errors.phone = 'You must enter your phone number';
    }    
    
    return errors;
}


export default reduxForm({ 
    form: 'formSubscription',
    validate: validate
})(Form);