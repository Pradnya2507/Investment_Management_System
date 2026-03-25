import React, { useState } from 'react'

import { Button, Container, Typography } from "@mui/material";


const AddInvestmentButton = ({onClick}) => {
   
  return (
        <>
        <Button
        sx={{
          width:"10rem",
          // height:"3rem",
          // marginLeft:"46rem",
          // marginTop:"2rem"
        textTransform: "none",
        fontWeight: 600,
        borderRadius: "8px",
        }}
        variant="contained"
        onClick={onClick}
      >
        Add Investment
      </Button>

        </>

        

 
  );
};

export default AddInvestmentButton
