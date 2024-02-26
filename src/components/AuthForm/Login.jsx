
import React, { useState } from 'react';
import useLogin from '../../hooks/useLogin';
import {
  Input,
  Button,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";

const Login = () => {
    const [inputs,setInput] = useState({
        email:'',
        password:'',
        confirmPassword:''
      });
      const{loading,error,login}=useLogin()
  return (
   <>
   <Input
          placeholder="Email"
          fontSize={14}
          type="email"
          value={inputs.email}
          size={"sm"}
          onChange={(e) => setInput({...inputs,email:e.target.value})}
        />
        <Input
          placeholder="Password"
          fontSize={14}
          type="password"
          value={inputs.password}
          size={"sm"}
          onChange={(e) => setInput({...inputs,password:e.target.value})}
        />
         {error && (
        <Alert status="error" fontSize={13} p={2} borderRadius={4}>
          <AlertIcon fontSize={12} />
          {error.message}
        </Alert>
      )}
        <Button w={"full"} colorScheme="blue" size="sm" fontSize={14}  isLoading={loading} onClick={() => login(inputs)}>
          Log in
        </Button>
   </>
  )
}

export default Login
