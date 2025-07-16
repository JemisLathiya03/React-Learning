import { Button } from '@mui/material'
import React from 'react'

const CommonButton = ({children,variant,color,size,disabled,sx,handleClickAction,onSubmit}) => {
  return (
    <Button
     color={color}
     disabled={disabled}
     size={size}
     sx={sx}
     variant={variant}
     onClick={handleClickAction}
     onSubmit={onSubmit}>{children}</Button>
  )
}

export default CommonButton