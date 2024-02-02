import {server} from "../Store";
import axios from "axios";

export const login = (email,phoneNumber,password)=>async(dispatch)=>{
    try {
        dispatch({type:"loginRequest"});

      const {data} = await axios.post(`${server}/login`,{email,phoneNumber,password},{
            headers:{
                'Content-type': 'application/json',
            },
            withCredentials:true,
        });
        
        dispatch({ type: 'loginSuccess', payload: data });
    } catch (error) {
        dispatch({ type: 'loginFail', payload:  error.response.data.message });
    }
}

export const register = (name,email,phoneNumber,password)=> async dispatch => {
    try {
      dispatch({ type: 'registerRequest' });
  
      const { data } = await axios.post(
        `${server}/register`,
        {name, email, phoneNumber, password },
        {
          headers: {
            'Content-type': 'application/json',
          },

          withCredentials: true,
        }
      );
  
      dispatch({ type: 'registerSuccess', payload: data });
    } catch (error) {
      dispatch({ type: 'registerFail', payload: error.response.data.message });
    }
  };

  export const loadUser = () => async dispatch => {
    try {
      dispatch({ type: 'loadUserRequest' });
  
      const { data } = await axios.get(`${server}/me`,
  
        {
          withCredentials: true,
        }
      );
      dispatch({ type: 'loadUserSuccess', payload: data.user });
    } catch (error) {
      dispatch({ type: 'loadUserFail', payload: error.response.data.message });
    }
  };

  

  export const logout = () => async dispatch => {
    try {
      dispatch({ type: 'logoutRequest' });
  
      const { data } = await axios.get(`${server}/logout`, {
        withCredentials: true,
      });
      dispatch({ type: 'logoutSuccess', payload: data.message });
    } catch (error) {
      dispatch({ type: 'logoutFail', payload: error.response.data.message });
    }
  };

   

   