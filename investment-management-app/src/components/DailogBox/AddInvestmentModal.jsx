import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Grid,
  IconButton
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SaveButton from "../Common/SaveButton";
import CancleButton from "../Common/CancleButton";
import { toast } from "react-toastify";

const AddInvestmentModal = ({ open, handleClose,onSave, editData }) => {
  const [form, setForm] = useState({
    name: "",
    type: "",
    amount: "",
    purchaseDate: "",
    currentValue: "",
    
  });

  useEffect(()=>{
    if (editData) setForm(editData)
  },[editData])

  const handleChange = (e) => {
    const{name,value}=e.target;
    if(name==="amount"){
      const amount=Number(value)
      const currentValue=amount?(amount*1.01).toFixed(2):"";
    
    setForm({ ...form,amount:value,currentValue});
  } 
  else{
    setForm({
      ...form,
      [name]:value
    })
  }
}
  const handleSave=()=>{
    if(!form.name||!form.type||!form.amount||!form.purchaseDate){
      toast.error("Please fill all required fields")
      return;
    }
    onSave(form);
    handleClose();
    setForm({
      name: "",
      type: "",
      amount: "",
      purchaseDate: "",
      currentValue: ""
    })
  }

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs" >
      {/* Header */}
      <DialogTitle display={"flex"} sx={{justifyContent:"space-between"}}>
        {editData?"Edit Investment":"Add Investment"}
        
        <CloseIcon onClick={handleClose} />
        
      </DialogTitle>

      {/* Body */}
      <DialogContent>
        <TextField
          label="Investment Name"
          fullWidth
          margin="dense"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <FormControl fullWidth margin="dense">
          <InputLabel>Type</InputLabel>
          <Select
            name="type"
            value={form.type}
            onChange={handleChange}
            label="Type"
            required
          >
            <MenuItem value="Mutual Fund">Mutual Fund</MenuItem>
            <MenuItem value="Equity">Equity</MenuItem>
            <MenuItem value="Debt">Debt Instruments</MenuItem>
            <MenuItem value="ETF">Exchange Traded Funds (ETFs)</MenuItem>
          </Select>
        </FormControl>

        <TextField
          label="Amount"
          type="number"
          fullWidth
          margin="dense"
          name="amount"
          value={form.amount}
          onChange={handleChange}
          required
        />

        <TextField
          label="Purchase Date"
          type="date"
          fullWidth
          margin="dense"
          name="purchaseDate"
          value={form.purchaseDate}
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
          required
        />

        {/* Two-column fields */}
        <Grid container spacing={2} mt={1}>
          <Grid item xs={6}>
            <TextField
              label="Current Value"
              type="number"
              fullWidth
              name="currentValue"
              value={form.currentValue}
              InputProps={{readOnly:true}}
      
            />
          </Grid>

          
        </Grid>
      </DialogContent>

      {/* Footer */}
      <DialogActions sx={{ padding: 2}}>

       <SaveButton onClick={handleSave}/>
       <CancleButton onClick={handleClose}/>
 
      </DialogActions>
    </Dialog>
  );
};

export default AddInvestmentModal;
