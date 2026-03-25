import React from 'react'
import { Button } from '@mui/material'
const CancleButton = ({onClick}) => {
  return (
    <div>
      <Button
      variant='outlined'
      sx={{width:"5rem"}}
      onClick={onClick}
      >
        Cancel
      </Button>
    </div>
  )
}

export default CancleButton
