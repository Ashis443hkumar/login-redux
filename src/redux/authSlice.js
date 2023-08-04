import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


let initialState ={
  user:"",
  token:"",
  loading:false
}


const loginUser = createAsyncThunk("user", async(body)=>{
  let res = await fetch("" , {
    method: "post",
    headers:{
      "Content-Type" : "application/json",
      authrization: localStorage.getItem("token")
    },
    body:JSON.stringify(body)
  })
  return  await res.JSON
})


const authSlice = createSlice({
   name:"user", 
   initialState,
   reducers:{
     addToken:(state, action) =>{
       state.token = localStorage.getItem(token)
     },
     addUser:(state, action) =>{
      state.token = localStorage.getItem(token)
    }
   },
   extraReducers:{
     [loginUser.pending]: (state,action) =>{
       state.loading = true
     },
     [loginUser.pending]: (state, {payload:{user, token}}) =>{
      state.loading = true
      state.user = user,
      state.token = token,
      localStorage.setItem("token", JSON.stringify(token))
      localStorage.setItem("user", JSON.stringify(user))
    },
    [loginUser.pending]: (state,action) =>{
      state.loading = true
    }
   }
})

export const{addToken, addUser} = authSlice.actions;

export default authSlice.reducer