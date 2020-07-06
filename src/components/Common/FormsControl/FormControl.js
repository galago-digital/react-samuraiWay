import React from 'react';
import classes from './FormControl.module.css'

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