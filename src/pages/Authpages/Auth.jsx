import React from 'react'
import { Box,Img,Text } from '@chakra-ui/react'
import { BiRightArrowCircle } from 'react-icons/bi';
import '../../style/Firstpage.css'
import { Link } from 'react-router-dom';
export const Auth = () => {
  return (
    <div>
     <Box>

<Text className='heading'
        mt={'1rem'}
textAlign={"center"}
alignItems={"center"} 
fontSize={{base:"2rem",sm:"3rem",md:"3.3rem"}}
   >Meet You</Text>
<Box 
width={"100%"}
 height={{base:"50vh",sm:"50vh",md:"50vh"}}
>
<Img
m='auto'
textAlign={"center"}
height={{base:"100%",sm:"100%",md:"110%"}} 
src="https://img.freepik.com/free-vector/messages-concept-illustration_114360-583.jpg?w=740&t=st=1671788783~exp=1671789383~hmac=6ef4aa0f1fc2d5c5683b12c740e5678a2b7afc0cc4be8f73aa436a3ba6f84eda" alt="" />

</Box>
{/*  */}
<Box>
    <Text 
    mt={{base:"2rem",sm:"2rem",md:"3rem"}}
     textAlign={"center"}
     alignItems={"center"} 
      fontSize={{base:"1rem",sm:"1.3rem",md:"1.5rem"}}
     fontWeight={500}
     className='sub_head'>
        Enjoy the New Experience of
         chatting withGlobal friends
    </Text>
    <Text   className='sub_head'
    mt={{base:"2rem",sm:"2rem",md:"1rem"}}
    textAlign={"center"}
     alignItems={"center"} 
      fontSize={{base:"0.8rem",sm:"1.2rem",md:"1.3rem"}}
     color="grey"
     fontWeight={500}>
        Build the connection around the world
    </Text>
</Box>
{/* slide bar */}
<Link to={'/register'}>
<Box 
width={{base:"50%",sm:"40%",md:"25%"}}
height={{base:"35px",sm:"35px",md:"50px"}}
backgroundColor={'#ff4f58'}
m="auto"
borderRadius={'10px'}
mt={{base:"3rem",sm:"3rem",md:"2rem"}}
display="flex"
justifyContent={"space-between"}
alignItems={"center"} 
p="0px 10px 0px 10px"
>

    <Text
     fontSize={{base:"1.1rem",sm:"1.2rem",md:"1.5rem"}}
     color={"white"} className='sub_head'>Get Started</Text>


     <Box className='arrowslider'>
     <BiRightArrowCircle color="white" 
     size="1.5rem"/>

     </Box>
    
</Box>
</Link>
{/*  */}
<Text 
   textAlign={"center"}
   alignItems={"center"} 
    fontSize={{base:"0.8rem",sm:"1rem",md:"0.8rem"}}
    mt={{base:"3rem",sm:"2rem",md:"0.6rem"}}>Powered by MeetYou</Text>
</Box>
    </div>
  )
}
