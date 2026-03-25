import React from 'react'
import { IconButton,Tooltip } from '@mui/material'
import DeleteIcon from "@mui/icons-material/Delete";
import {toast} from "react-toastify";

const DeleteButton = ({onClick}) => {
  const showmessage=()=>{
    onClick()
    toast.success("Investment Deleted successfully")
  }
  
  return (
    <div>
      <Tooltip title="Delete">
        <IconButton color='error' onClick={showmessage}>
            <DeleteIcon fontSize='small'/>
        </IconButton>
      </Tooltip>
    </div>
  )
}

export default DeleteButton
