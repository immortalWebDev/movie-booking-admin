import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = {
  currentUser: JSON.parse(localStorage.getItem('currentUser')) || null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    login: (state, action) => {
        const { idToken,uid, email } = action.payload; 
        state.currentUser = { idToken,uid, email }; 
        console.log(state.currentUser)
        localStorage.setItem('currentUser', JSON.stringify({ idToken,uid, email }));
        console.log(email,'logged in successfully')
      },
    logout: (state) => {
      console.log(state.currentUser.email,'logged out from client')
      state.currentUser = null;
      localStorage.removeItem('currentUser');
      

     
    },
  },
});

export const { login,logout} = authSlice.actions;
export default authSlice.reducer;

