import React from 'react'
import { IconButton,Tooltip } from '@mui/material'
import EditIcon from "@mui/icons-material/Edit"

const EditButton = ({onClick}) => {
  return (
    <div>
      <Tooltip title="Edit">
        <IconButton color='primary' onClick={onClick}>
            <EditIcon fontSize='small'/>
        </IconButton>
      </Tooltip>
    </div>
  )
}

export default EditButton
