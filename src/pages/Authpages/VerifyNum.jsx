import { Box, Button, Input, Text } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

export const VerifyNum = () => {
    const[otp,setOtp]=useState('')
const[timemin,setTimemin]=useState(1)
const[timesec,setTimesec]=useState(5)
const [popup,setPopup]=useState(false)
    useEffect(()=>{
     setTimeout(()=>{
            setOtp( Math.floor(Math.random() * (99999 - 11111) + 11111))
            setPopup(true)
         
        },3000)
          },[])
        ////  
        
useEffect(()=>{
 var times=59

         var data= setInterval(()=>{
  setTimesec(times--)   
  if(times===1){
    times=59
  }
    },1000)
   
   
  
   return ()=>clearInterval(data)
},[])
   
  const handlipopup=()=>{
    setPopup(false)
  }
  return (
    <>
    {popup&&
    <Box
    width={{base:"120px",sm:"140px",md:"200px"}}
    fontSize={{base:"13px",sm:"15px",md:"20px"}}
    zIndex={1}
    height={'50px'}
    position={'absolute'}
    borderRadius={'10px'}
    left={0}
    textAlign="center"
    fontWeight={600}
    alignItems={'center'}
    top={'1rem'}
    right={0}
    margin={'auto'}
    bg={"white"}
    cursor='pointer'
    boxShadow={'1px 1px 3px '}>
<Text mt={'0.5rem'} onClick={handlipopup}>OTP is {otp} </Text>
    </Box>}
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
    <img src="https://img.freepik.com/free-vector/enter-otp-concept-illustration_114360-7867.jpg?w=900&t=st=1671811466~exp=1671812066~hmac=d45904329654ce88b88d9326c9d431fe1a2bac8fd3b35d8d926878cc666f5dfb" alt="" />
    </Box>

    <Box 
     margin={'auto'}
     width={{base:"90%",sm:"70%",md:"40%"}}
     height={{base:"36vh",sm:"40vh",md:"35vh"}}
     >
    <Box>
      <Text
       fontSize={{base:"1.3rem",sm:"1.3rem",md:"2rem"}}
       className='sub_head'>
      Verify your Number
      </Text>
      <Text
       fontSize={{base:"0.8rem",sm:"1rem",md:"1rem"}}
       className='sub_head'
       mt={{base:"1.3rem",sm:"1.9rem",md:"1.5rem"}}>
      Enter the 5 digit code sent to +91 8610766505 <span style={{color:"blue"}}>Automatic Detection</span>
      </Text>
    </Box>
    <Box

    height={{base:"10vh",sm:"10vh",md:"10vh"}}
    
    display={'flex'}
    justifyContent={'space-evenly'} 
    mt={{base:"1.3rem",sm:"1.9rem",md:"1.5rem"}}>
      <Input maxLength={1} fontSize={'2rem'} w={{base:"4rem",sm:"4rem",md:"4rem"}} type="text" name="" id="" />
      <Input maxLength={1} fontSize={'2rem'}w={{base:"4rem",sm:"4rem",md:"4rem"}} type="text" name="" id="" />
      <Input maxLength={1}fontSize={'2rem'} w={{base:"4rem",sm:"4rem",md:"4rem"}}type="text" name="" id="" />
      <Input maxLength={1}fontSize={'2rem'} w={{base:"4rem",sm:"4rem",md:"4rem"}}type="text" name="" id="" />
      <Input maxLength={1}fontSize={'2rem'} w={{base:"4rem",sm:"4rem",md:"4rem"}} type="text" name="" id="" />
  
    </Box>
    <Box display={'flex'}
    width={'90%'}
    margin={'auto'}
    justifyContent={'space-between'}>
        <Text>Resend Otp</Text>
        <Text>{timemin}:{timesec}</Text>
    </Box>


    <Link to={'/verify'}> 
<Button
bg={'#ff4e58'}
color="white"
>Verify</Button>
</Link> 
</Box>
</Box></>
  )
}
