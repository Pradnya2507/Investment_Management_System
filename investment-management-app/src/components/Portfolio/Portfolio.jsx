import React from 'react'

import EditButton from '../Common/EditButton'
import DeleteButton from '../Common/DeleteButton'
import AddInvestmentButton from './AddInvestmentButton'
import { Table,Box, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
const Portfolio = ({investments, onEdit, onDelete,onAdd}) => {
  return (
    <>
    <Paper
      elevation={3}
      sx={{
        p:2,
        borderRadius:3,
        backgroundColor:"#fff",
        marginLeft:"10rem",
        marginRight:"10rem",
       
        marginTop:"5rem",
     
        

      }}
      >
        <Box
        marginTop="1rem"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
        >
          <Typography variant='h6' fontWeight={600}
          >Portfolio Overview</Typography>

          <AddInvestmentButton onClick={onAdd}/>
       
        </Box>
        <TableContainer>
          <Table>
          
            <TableHead >
              <TableRow 
              sx={{
            "& th": {
            backgroundColor: "#efececff",
            color: "#201f1fff",
           
          },
              }}>
              <TableCell >Name</TableCell>
              <TableCell >Type</TableCell>
              <TableCell >Amount</TableCell>
              <TableCell >Purchase Date</TableCell>
              <TableCell >Current Value</TableCell>
              <TableCell ></TableCell>

              </TableRow>
            </TableHead>
          
            <TableBody>
              {investments.map((inv,index)=>(
                <TableRow key={index} hover>
                <TableCell>{inv.name}</TableCell>
                <TableCell>{inv.type}</TableCell>
                <TableCell>₹{inv.amount}</TableCell>
                <TableCell>{inv.purchaseDate}</TableCell>
                <TableCell> ₹{inv.currentValue}</TableCell>
                
                <TableCell align='right'>
                <Box display="flex">
                    <EditButton onClick={()=>onEdit(inv)} />
                    <DeleteButton onClick={()=>onDelete(inv.id)} />
                </Box>


                </TableCell>
                

                

                </TableRow>
              )

              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    
      {/* <Table  >
      <caption>Portfolio Overview</caption>
      <thead>
        <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Purchase Date</th>
            <th>Current Value</th>
            <th> </th>
        </tr>
      </thead>
      <tbody>
      {investments.map((inv,index)=> (
        <tr key={index}>
            <td>{inv.name}</td>
            <td>{inv.type}</td>
            <td>{inv.amount}</td>
            <td>{inv.purchaseDate}</td>
            <td>{inv.currentValue}</td>
            <td>
               <EditButton onClick={()=>onEdit(inv)} />
               <DeleteButton onClick={()=>onDelete(inv.id)} />
            </td>
        </tr>
    
      ))}
      
      </tbody>
      

      </Table> */}
    </>
  )
}

export default Portfolio
