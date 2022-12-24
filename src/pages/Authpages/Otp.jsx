import { Box, Button, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export const Otp = () => {
  return (
    <>
    <Box
      margin={'auto'}
      textAlign="center"
      height="100vh"
      alignItems={'center'}
      position={'relative'}
      display={{base:"block",sm:"block",md:"flex"}}
      justifyContent={"space-evenly"}>

    <Box
 margin={'auto'}
   width={{base:"100%",sm:"80%",md:"40%"}}>
    <img src="https://img.freepik.com/free-vector/secure-data-concept-illustration_114360-483.jpg?w=740&t=st=1671812943~exp=1671813543~hmac=ea49c9da26dbf9a4c550e6c78b45425968a2df4f2f31211fbcf635fe16711231" alt="" />
    </Box>

    <Box 
     margin={'auto'}
     width={{base:"90%",sm:"70%",md:"40%"}}
     height={{base:"50vh",sm:"40vh",md:"30vh"}}
     >
    <Box>
      <Text
       fontSize={{base:"1.3rem",sm:"1.3rem",md:"2rem"}}
       className='sub_head'>
      OTP
      </Text>
    </Box>
    <Box
    mt={{base:"1rem",sm:"0.6rem",md:"0.6rem"}}
    height={{base:"10vh",sm:"10vh",md:"10vh"}}
    display={'flex'}>
      <Input w={{base:"4rem",sm:"4rem",md:"4rem"}} type="text" name="" id="" placeholder='+91'
      value={"+91"}/>

      <Input  w={{base:"90%",sm:"90%",md:"90%"}} type="text" name="" id=""  placeholder='Enter Mobile Number'/>
  
    </Box>
    <Link to={'/verify'}> 
<Button
bg={'#ff4e58'}
color="white"
>Next</Button>
</Link> 
</Box>
</Box>
    </>
  )
}
