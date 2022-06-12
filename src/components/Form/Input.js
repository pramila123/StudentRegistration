import { TextField, Typography } from '@mui/material'


import React from 'react'

const Input = ({name,...otherProps}) => {
    const textFieldConfig={
        size:"small",
        fullWidth:true,
        ...otherProps
    }

  return (
   <>
    <Typography>{otherProps.title}</Typography>
   <TextField {...textFieldConfig} name={name}/>
   <Typography className="error">
         {otherProps.touch}   
            </Typography>
   </>
  )
}

export default Input