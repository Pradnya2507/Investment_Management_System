import React from 'react'
import { Button } from '@mui/material'
const SaveButton = ({onClick,disabled=false}) => {
  return (
    <div>
    <Button 
    variant='contained'
    sx={{width:"5rem"}}
    onClick={onClick}
    disabled={disabled}
    >
        Save
    </Button>
      
    </div>
  )
}

export default SaveButton
