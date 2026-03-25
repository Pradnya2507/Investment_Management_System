import React, { useEffect } from 'react'
import AddInvestmentButton from './AddInvestmentButton'
import AddInvestmentModal from '../DailogBox/AddInvestmentModal'
import Portfolio from './Portfolio'
import { useState } from 'react'
import axios from "axios"
import Swal from "sweetalert2";
import PortfolioSummary from './PortfolioSummary'
import { Box } from '@mui/material'

const PortfolioPage = () => {
    const[investments,setInvestments]=useState([])
    const[open,setopen]=useState(false)
    const[editData,setEditData]=useState(null)

    
    const fetchInvestments=async () => {
    try{
        const res=await axios.get("http://localhost:5000/investments")
        setInvestments(res.data)
    }
    catch(error){
        console.error("API ERROR:",error.message)
    }}
    
    useEffect(()=>{
        fetchInvestments()
    },[])


    const handleAdd=async(data)=>{
        const res=await axios.post("http://localhost:5000/investments",data)
        setInvestments([...investments,res.data])
    }
    const handleUpdate=async (data)=>{
        await axios.put(`http://localhost:5000/investments/${data.id}`,data)
        Swal.fire({
            title:"Edit Successfully !",
            icon:"success",
            draggable:true
        })
        setInvestments(investments.map(inv=>inv.id===data.id?data:inv))
    }
    const handleDelete=async(id)=>{
        await axios.delete(`http://localhost:5000/investments/${id}`)
        setInvestments(investments.filter(inv=>inv.id !==id))
    }

    const handleEdit=(investment)=>{
        setEditData(investment)
        setopen(true)
    }
    const handleAddClick=()=>{
        setEditData(null)
        setopen(true)
    }
  return (
    <>
       <Box sx={{px:3,mt:2}}>
       <PortfolioSummary investments={investments}/>

       </Box>

        <Portfolio 
        
        investments={investments}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onAdd={handleAddClick}
        >
        </Portfolio>
        <AddInvestmentModal
        open={open}
        handleClose={()=>{
            setopen(false)
            setEditData(null)
        }}
        onSave={editData?handleUpdate:handleAdd}
        editData={editData}
        />

        

    </>
    
    
    
  )
}

export default PortfolioPage
