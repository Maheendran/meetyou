import { Box, Button, Img, Input, Text } from '@chakra-ui/react'
import React from 'react'

export const Getprofile = () => {
  return (
    <>
    <Box 
    margin={'auto'}
    width={'100%'}
    height="100vh"
>
       
        <Box  
        margin={'auto'}
        width={'100%'}
        height="40px"
        bg={'grey'}
        mt='2rem'
        color={'white'}
        fontWeight={500}
        textAlign={'center'}>
<Text padding={'5px'}>Change Password</Text>
        </Box>

{/*  */}
<Box  
width={'100%'}
   margin={'auto'}
   height={{base:"88vh",sm:"90vh",md:"30vh"}}
   display={{base:"block",sm:"block",md:"flex"}}
   justifyContent={"space-evenly"}>
<Box  
margin={'auto'} 

  width={{base:"90%",sm:"70%",md:"30%"}}
height={{base:"15vh",sm:"25vh",md:"20vh"}}
display={'flex'}
alignItems={'center'}
justifyContent={'space-between'}>
{/* ////////// */}
<Box 
textAlign={'center'}
>

<Box

 width={{base:"5rem",sm:"7rem",md:"7rem"}}
height={{base:"5rem",sm:"7rem",md:"7rem"}}
borderRadius={'50%'}>
<Img w={'100%'} src="https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png" alt="" />
</Box>
<Text fontWeight={500}>Maheendran</Text>
</Box>
{/* .. */}

<Box
textAlign={'center'}
  width={{base:"100%",sm:"70%",md:"70%"}}
 display={'flex'}
 justifyContent={'space-evenly'}
 fontWeight={{base:500,sm:600,md:700}}
 fontSize={{base:"0.8rem",sm:"1rem",md:"1rem"}}>
    <Box>
        <Text>100</Text>
        <Text>Posts</Text>
    </Box>
    <Box>
        <Text>100</Text>
        <Text>Followers</Text>
    </Box>
    <Box>
        <Text>100</Text>
        <Text>Followings</Text>
    </Box>
</Box>
{/* ////////// */}
</Box>
{/* ..... */}
<Box 
 margin={'auto'}  
 mt={{base:"10vh",sm:"10vh",md:"10vh"}}
 width={{base:"90%",sm:"70%",md:"40%"}}
height={{base:"30vh",sm:"40vh",md:"40vh"}}
alignItems={'center'}
display="flex"
gap={"2rem"}
flexDirection={'column'}>
      <Input type="text" name="" id=""  placeholder='enter new password'/>
      <Input type="text" name="" id=""  placeholder='enter conform password'/>
<Button
bg={'#ff4e58'}
color="white">Done</Button>
</Box>

</Box>


    </Box>
    </>
  )
}
