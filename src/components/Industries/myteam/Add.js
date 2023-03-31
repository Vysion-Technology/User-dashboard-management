import React,{useState} from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
// import {addProduct} from '../../services/Api'
// import swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import { addMemberValue } from '../../../service/api';


const Button = styled.button`
display:flex;
justify-content: center;
align-items:center;
  background: ${props => props.primary ? "#338FEB" : "rgba(0, 0, 0, 0.05)"};
  color: ${props => props.primary ? "#FFFFFF" : "#1C1C1C"};
  border: 1px solid #1677FF;
    width: 62px;
    height: 30px;
  border-radius: 8px;
  margin-right:${props => props.primary ? "60px" : "30px"};
  cursor:pointer;
`;


// const options = [
//     {
//       value: 'Consumable',
//       label: 'Consumable',
//     },
//     {
//       value: 'Non-Consumable',
//       label: 'Non-Consumable',
//     },
//     {
//       value: 'Service',
//       label: 'Service',
//     }
//   ];

  const itemInitialValue = {
    name:'',
    post:'',
    phone:'',
    email:''
  }

function Add() {

  const [addItem,setAddItem] = useState(itemInitialValue);
  const navigate = useNavigate();
  const onInputChange = (e)=>{
    setAddItem({...addItem,[e.target.name]:e.target.value});
    // console.log(addItem);
  
  }
  const toIndustry = ()=>{
     navigate('/industry');
  }

  const addMember = async ()=>{
    
    let response = await addMemberValue(addItem);
   
    navigate('/industry');
    if(!response) console.log("Error while calling api");
  }

  // const handleAdd = async()=>{
  //   // alert("Item Added");
  //   const response = await addProduct(addItem);
  //   if(!response){
  //     return console.log('error while adding product');
  //   }
  //   swal.fire({
  //     icon:'success',
  //     title:'Added',
  //     text:`Record has been Added to Database successfully`,
  //     showConfirmButton:false,
  //     timer:1500,
  //   })
  //   console.log(response);
  //   setIsAdding(false);
  // }


  return (
    <Box
      component="form"
      sx={{
        marginTop:"15px",
        height: "556px",
        backgroundColor:"#F7F9FB",
        marginLeft:"15px",
        marginRight:"15px",
        // marginTop:"10px"
      }}
      noValidate
      onSubmit={addMember}
      autoComplete="off"
    >
        <Box style={{display:"flex",justifyContent: 'center'}} >
        <TextField 
            id="outlined-basic" 
            label="Name" 
            variant="outlined" 
            placeholder='Name'
            rows={8}
            name="name"
            onChange={(e)=>onInputChange(e)}
            style={{ width:"45ch",margin:"15px",marginTop:"70px"}}

        />
        <TextField 
            id="outlined-basic" 
            label="Post" 
            variant="outlined" 
            placeholder='Post'
            rows={6}
            name="post"
            // value={itemCode}
            onChange={(e)=>onInputChange(e)}
            style={{ width:"45ch",margin:"15px",marginTop:"70px"}}

        />
        </Box>
        <Box style={{display:"flex",justifyContent: 'center'}} >
        <TextField 
            id="outlined-basic" 
            label="Phone" 
            variant="outlined" 
            placeholder='Phone No.'
            rows={6}
            name="phone"
            // value={itemPrice}
            onChange={(e)=>onInputChange(e)}
            style={{ width:"45ch",margin:"15px"}}

        />
        <TextField 
            id="outlined-basic" 
            label="E-Mail" 
            variant="outlined" 
            placeholder='E-Mail'
            rows={6}
            name="email"
            // value={itemQuantity}
            onChange={(e)=>onInputChange(e)}
            style={{ width:"45ch",margin:"15px"}}

        />
        
        
        
        </Box>
        <Box style={{display:"flex",justifyContent: 'flex-end'}} >
            <Button onClick={()=> toIndustry()} >Cancel</Button>
            <Button primary type="submit">Add</Button>
        </Box>
    </Box>
  )
}

export default Add;