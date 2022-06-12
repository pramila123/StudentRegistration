import React from 'react'
import Buttons from './Buttons'
import Input from './Input'
import Radios from './Radios'


const FormikController = (props) => {
    const {control,...otherProps}=props
    switch(control)
    {
        case "textfield":
            return <Input {...otherProps}/>
            case "radio":
                return <Radios {...otherProps}/>
               
            case "buttons":
                return <Buttons {...otherProps}/>
            default:
                return null
    }
 
}

export default FormikController