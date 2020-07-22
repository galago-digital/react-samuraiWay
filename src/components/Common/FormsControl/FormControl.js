import React from 'react';
import classes from './FormControl.module.css'
import {Field} from "redux-form";


export const createField = (component, name, placeholder, validators, props = {}, text= "") =>{
    return (
    <div>
        <Field placeholder={placeholder} name={name} component={component} validate ={validators} {...props}/>{text}
    </div>
    )
}

const Element = Element => ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={ classes.formControl + " " + (hasError ? classes.error : "") }>
            <Element {...input} {...props} />
            { hasError && <span> { meta.error } </span> }
        </div>
    );
};
export default Element

