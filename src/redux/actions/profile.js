import { server } from "../Store";
import axios from "axios";

export const updateProfile = (name, email,phoneNumber) => async dispatch => {
    try {
      dispatch({ type: 'updateProfileRequest' });
  
      const { data } = await axios.put(`${server}/updateprofile`,
        {
          name,
          email,
          phoneNumber,
        },
        {
          headers: {
            'Content-type': 'application/json',
          },
  
          withCredentials: true,
        }
      );
  
      dispatch({ type: 'updateProfileSuccess', payload: data.message });
    } catch (error) {
      dispatch({
        type: 'updateProfileFail',
        payload: error.response.data.message,
      });
    }
  };

  
export const changePassword = (oldPassword, newPassword) => async dispatch => {
    try {
      dispatch({ type: 'changePasswordRequest' });
  
      const { data } = await axios.put(`${server}/changepassword`,
        {
          oldPassword,
          newPassword,
        },
        {
          headers: {
            'Content-type': 'application/json',
          },
  
          withCredentials: true,
        }
      );
  
      dispatch({ type: 'changePasswordSuccess', payload: data.message });
    } catch (error) {
      dispatch({
        type: 'changePasswordFail',
        payload: error.response.data.message,
      });
    }
  };

   
