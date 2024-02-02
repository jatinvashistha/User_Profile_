import {  Button, Container, HStack, Heading,   Stack, Text, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
 import { Link } from 'react-router-dom'
 import { useDispatch, useSelector } from 'react-redux'
  import { toast } from 'react-hot-toast'

const Profile = ({user}) => {
  const dispatch = useDispatch();

  const {message,error} = useSelector(state => state.profile)
  

    useEffect(() => {
      if (error) {
        toast.error(error);
        dispatch({ type: 'clearError' });
      }
      if (message) {
        toast.success(message);
        dispatch({ type: 'clearMessage' });
      }
     
    }, [dispatch, error, message]);
    

   return (
    <Container minH={'90vh'} maxW={'container.lg'} py={'8'}>
        <Heading
         children="PROFILE" m={'8'} textAlign={"center"}/ >

        <Stack
        justifyContent={"center"} 
        
        direction={['column','row']} 
        align={'center'}
        spacing={['8','16']}
         padding={'8'}
         >
        

         <VStack spacing={'6'} alignItems={['center','flex-start']}>

            <HStack>
                <Text children="Name" fontWeight={"bold"}/>
                <Text children={user.name}  />

            </HStack>

            <HStack>
                <Text children="Email" fontWeight={"bold"}/>
                <Text children={user.email}  />

          </HStack>
          
           <HStack>
                <Text children="Mobile Number" fontWeight={"bold"}/>
                <Text children={user.phoneNumber}  />

            </HStack>

            <HStack>
                <Text children="CreatedAt" fontWeight={"bold"}/>
                <Text children={user.createdAt.split('T')[0]}  />

          </HStack>
          
          

           

            <Stack direction={['column','row']} 
        align={'center'} spacing={"6"}>
             <Link to="/updateprofile">
                <Button>Update Profile</Button>
             </Link>

             <Link to="/changepassword">
                <Button>Change Password</Button>
             </Link>
            </Stack>
         </VStack>
        </Stack>
            

    </Container>
  )
}

export default Profile
 