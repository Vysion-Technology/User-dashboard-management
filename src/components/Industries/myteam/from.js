
import styled from "styled-components";
import React,{useState} from 'react';
import Box1 from '@mui/material/Box';
import { addMemberValue } from "../../../service/api";
import { useNavigate } from "react-router-dom";

const ReqData = styled.input`
width: 21%;
height: 50px;
border-radius: 5px;
margin-top: 4%;
margin-left: 18%;
`

const Box = styled.div`
    display: flex;
    flex-direction: row;
    // justify-content: center;
    // align-items: center;
    // position: absolute;
    // margin: auto;
`
const Button = styled.button`
display:flex;
justify-content: center;
align-items:center;
  // background: ${props => props.primary ? "#338FEB" : "rgba(0, 0, 0, 0.05)"};
  background: #338FEB;
  // color: ${props => props.primary ? "#FFFFFF" : "#1C1C1C"};
  color: #FFFFFF;
  border: 1px solid #1677FF;
    width: 62px;
    height: 30px;
  border-radius: 8px;
  margin-right:${props => props.primary ? "60px" : "30px"};
  cursor:pointer;
`

const itemInitialValue = {
  name:'',
  post:'',
  phone:'',
  email:''
}
const AddMember = ()=>{
  const [addItem,setAddItem] = useState(itemInitialValue);
  const [isOpen, setIsOpen]= useState(true);
  const navigate = useNavigate();
  const onInputChange = (e)=>{
    setAddItem({...addItem,[e.target.name]:e.target.value});
    // console.log(addItem);
  
  }
  const toggleCancel = ()=>{
    navigate('/industry');
       setIsOpen(false);
  }
  const toggleAdd = ()=>{
      
      setIsOpen(false);
  }
  // const toIndustry = ()=>{
  //    navigate('/industry');
  // }

  const addMember = async ()=>{
    
    let response = await addMemberValue(addItem);
   
    navigate('/industry');
    setIsOpen(false);
    if(!response) console.log("Error while calling api");
  }
    return(
        <>
        <Box>
        <ReqData placeholder="Name" type="text" name="name" onChange={(e)=>onInputChange(e)}/>
        <ReqData placeholder="Post" type="text" name="post" onChange={(e)=>onInputChange(e)}/>
        </Box>
        <Box>
        <ReqData placeholder="Phone" type="tel" name="phone" onChange={(e)=>onInputChange(e)}/>
        <ReqData placeholder="Email" type="email" name="email" onChange={(e)=>onInputChange(e)}/>
        </Box>
        <Box1 style={{display:"flex",justifyContent: 'flex-end'}}>
        <Button onClick={()=> toggleCancel()}>Cancel</Button>
        <Button onClick={()=> addMember()}>Add</Button>
        </Box1>
        </>
    );
}

export default AddMember;