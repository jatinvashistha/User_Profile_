import { Box, Button, Container, FormControl, FormLabel, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../../redux/actions/user';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
   
    dispatch(register(name,email,phoneNumber,password));
  };

  return (
    <Container h={'100%'}>
      <VStack h={'full'} justifyContent="center" spacing="20">
        <Heading textTransform="uppercase" children={'Registration'} padding={'5'} />

        <form onSubmit={submitHandler} style={{ width: '100%' }}>
          <FormControl my={'4'}>
            <FormLabel htmlFor="name">Enter Your Name</FormLabel>
            <Input
              required
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="abc"
              type={'text'}
              focusBorderColor="yellow.500"
            />
          </FormControl>

          <FormControl my={'4'}>
            <FormLabel htmlFor="email">Email Address</FormLabel>
            <Input
              required
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="abc@gmail.com"
              type={'email'}
              focusBorderColor="yellow.500"
            />
          </FormControl>

          <FormControl my={'4'}>
            <FormLabel htmlFor="phoneNumber">Mobile Number</FormLabel>
            <Input
              required
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="+0123456789"
              type={'phoneNumber'}
              focusBorderColor="yellow.500"
            />
          </FormControl>

          <FormControl my={'4'}>
            <FormLabel htmlFor="password">Enter Your Password</FormLabel>
            <Input
              required
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              type={'password'}
              focusBorderColor="yellow.500"
            />
          </FormControl>

          <Button my={'3'} colorScheme="yellow" type="submit">
            Sign Up
          </Button>

          <Box my={'4'}>
            Already Signed Up?{' '}
            <Link to="/login">
              <Button colorScheme="yellow" variant="link">
                {' '}
                Login
              </Button>{' '}
              here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Register;
