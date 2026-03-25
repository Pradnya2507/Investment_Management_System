import { Box, Grid, Typography } from '@mui/material';
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import React from 'react'

const PortfolioSummary = ({investments}) => {
    const totalInvested=investments.reduce(
        (sum,inv)=> sum + Number(inv.amount || 0),0
    );

    const totalCurrentValue= investments.reduce(
        (sum,inv)=> sum + Number(inv.currentValue || 0),0
    )
  return (
<>
    <Grid container spacing={4} justifyContent="center" alignItems="center" mt={4}>
    <Grid item xs={12} md={5} display="flex" justifyContent="center">
    <Box
    sx={{
        background:"linear-gradient(135deg, #5b8def, #6ea8fe)",
        color:"#fff",
        borderRadius:1,
        p:4,
        display:'flex',
        alignItems : "center",
        gap:3,
        width:"32rem",
        minHeight:"8rem"
    }}
    >
    <TrendingUpIcon sx={{fontSize:52}} />
    <Box>
        <Typography variant='h5' >Total Invested</Typography>
        <Typography variant='h4' fontWeight={700}>₹{totalInvested.toLocaleString()}</Typography>
    </Box>

    </Box>

    </Grid>
    <Grid item xs={12} md={5} display="flex" justifyContent="center">
    <Box
    sx={{
        background:"linear-gradient(135deg, #43a047, #66bb6a)",
        color:"#fff",
        borderRadius:1,
        p:4,
        display:"flex",
        alignItems:"center",
        gap:3,
        width:"32rem",
        minHeight:"8rem",
    }}
    >
    <AccountBalanceWalletIcon sx={{fontSize:52}} />
    <Box>
        <Typography variant='h5' >Current Value</Typography>
        <Typography variant='h4' fontWeight={700}>₹{totalCurrentValue.toLocaleString()}</Typography>
    </Box>

    </Box>

    </Grid>
    

    </Grid>
</>
  )
}

export default PortfolioSummary
