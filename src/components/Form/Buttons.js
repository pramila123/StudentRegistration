import { Button } from '@mui/material'
import React from 'react'

const Buttons = ({name, ...otherProps}) => {
    const buttonFieldConfig={
        size:"small",
        ...otherProps
    }
  return (
   <Button {...buttonFieldConfig} >{name}</Button>
  )
}

export default Buttons