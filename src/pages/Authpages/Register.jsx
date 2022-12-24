import { Box, Button, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../style/Firstpage.css'
export const Register = () => {
  const[toggle,setToggle]=useState(true)
  const handletoogle=()=>{
    setToggle(!toggle)
  }
  return (
    <>
    <Box
    margin={'auto'}
    textAlign="center"
    height="100vh"
    alignItems={'center'}
    position={'relative'}
    display={{base:"block",sm:"block",md:"flex"}}
    justifyContent={"space-evenly"}
  
    >
        {/* left */}
        {toggle  ?
    <Box
  
 margin={'auto'}

   width={{base:"74%",sm:"45%",md:"30%"}}
   height={{base:"40vh",sm:"40%",md:"60%"}}>

    <img src="https://img.freepik.com/free-vector/sign-concept-illustration_114360-125.jpg?w=740&t=st=1671791765~exp=1671792365~hmac=b850e9ab53178e1ef50d66c9594f2c819d04ee76000c2efa3cca2daca1b8143e" alt="" />
    </Box>
:
    <Box
 margin={'auto'}
   width={{base:"70%",sm:"40%",md:"40%"}}>
    <img src="https://img.freepik.com/free-vector/group-chat-concept-illustration_114360-1495.jpg?w=900&t=st=1671808854~exp=1671809454~hmac=ed1d6b862f035ce99bd3e46bcdd36d89e289e7f554e85e0541053e88a13dc2f0" alt="" />
    </Box>}
    {/* right */}
{toggle  ?
    <Box 

     margin={'auto'}
     width={{base:"70%",sm:"60%",md:"30%"}}
     height={{base:"60vh",sm:"30vh",md:"60%"}}>
    <Box>
      <Text
       fontSize={{base:"1.3rem",sm:"1.5rem",md:"2rem"}}
       className='sub_head'>
        Welcome Onboard
      </Text>
      <Text 
      mt={{base:"1.3rem",sm:"1.9rem",md:"1.5rem"}} className='sub_head'
      color={'grey'}>
        Connecting the people around the world
      </Text>
     
    </Box>
    <Box mt={{base:"1.3rem",sm:"1.9rem",md:"1.5rem"}}
    height={{base:"50vh",sm:"40vh",md:"50vh"}}
    display="flex"
    gap={"0.7rem"}
    flexDirection={'column'}
    >
      <Input type="text" name="" id="" placeholder='enter username'/>
      <Input type="text" name="" id=""  placeholder='enter email'/>
      <Input type="text" name="" id=""  placeholder='enter password'/>
      <Input type="text" name="" id=""  placeholder='enter conform username'/>
<Link to={'/otp'}>
<Button
bg={'#ff4e58'}
w={'100%'}
color="white">Register</Button>
</Link>
<Box onClick={()=>handletoogle()}>
  <Text  style={{cursor:"pointer"}}>
  Already have a account? <span style={{color:"blue"}}>Sign in</span>
</Text>
</Box>
    </Box>
  
</Box>:

 <Box 
     margin={'auto'}
     width={{base:"70%",sm:"60%",md:"30%"}}>
    <Box>
      <Text
       fontSize={{base:"1.3rem",sm:"1.5rem",md:"2rem"}}
       className='sub_head'>
        Welcome Onboard
      </Text>
      <Text 
      mt={{base:"1.3rem",sm:"1.5rem",md:"1.5rem"}} className='sub_head'
      color={'grey'}>
        Connecting the people around the world
      </Text>
     
    </Box>
    <Box   mt={{base:"1.3rem",sm:"1.5rem",md:"1.5rem"}}
    height={{base:"50vh",sm:"50vh",md:"50vh"}}
    display="flex"
    gap={"1rem"}
    flexDirection={'column'}
    >
      <Input type="text" name="" id="" placeholder='enter username'/>
      <Input type="text" name="" id=""  placeholder='enter password'/>
     <Link to={'/forgotpassword'}>
      <Text  textAlign={'right'}
      color='blue'>
 Forgot password 
</Text>
</Link>
  
<Button
bg={'#ff4e5a'}
color="white"
w={'100%'}
m={'a'}
>Log In</Button>

<Box onClick={()=>handletoogle()} >
<Text style={{cursor:"pointer"}} >
  Create an a account? <span style={{color:"blue"}}>Sign Up</span>
</Text>
</Box>

    </Box>
  
</Box>
}

    </Box>
    
    </>
  )
}
