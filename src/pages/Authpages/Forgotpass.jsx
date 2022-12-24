import { Box, Button, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export const Forgotpass = () => {
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
    <img src="https://img.freepik.com/free-vector/data-protection-law-illustration-concept_114360-971.jpg?w=900&t=st=1671809070~exp=1671809670~hmac=c26fa3957a3384507805e1fecedd686b89c759da3137f444c3978dc95a2f2637" alt="" />
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
       Forgot Password
      </Text>
    </Box>
    <Box
    mt={{base:"1rem",sm:"0.6rem",md:"0.6rem"}}
    height={{base:"50vh",sm:"40vh",md:"50vh"}}
    display="flex"
    gap={"1.4rem"}
    flexDirection={'column'}>
      <Input type="text" name="" id="" placeholder='enter username'/>
      <Text>Or</Text>
      <Input type="text" name="" id=""  placeholder='enter email'/>
   <Link to={'/updatepassword'}> 
<Button
bg={'#ff4e58'}
color="white"
>SEND</Button>
</Link> 
    </Box>
  
</Box>
</Box>
    </>
  )
}
