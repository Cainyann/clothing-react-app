import './button.style.scss'

const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted',
    // default: 'button-container'
}

const Button = ({children,buttonType,...otherProps}) => {

    return (
        <button 
        className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}   
        {...otherProps}
        > 
        {children}
        </button>
    )
}

export default Button;

/* 
考虑到整个app用到三种类型的button
default
inverter
google signin
 */



