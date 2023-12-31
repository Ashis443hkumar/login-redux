import React,{useState} from "react";
import "./style.css";
import {useDispatch} from "react-redux"
import {loginUser} from "./redux/authSlice"


export default function App() {
  
  const[email, setEmail] = useState("")
  const[password, setPassword] = useState("")
  console.log(email, password)

  const dispatch = useDispatch()

  const handlerLogin = () =>{
      console.log(email, password)
      dispatch(loginUser({email, password}))
  }

  return (
    <div>
      <label htmlFor="">useremail</label>
      <input type="text" value={email} onChange={(e) =>setEmail(e.target.value)} placeholder="enter your email" required />
      <label htmlFor="">userpassword</label>
      <input type="number" value={password} onChange={(e) =>setPassword(e.target.value)} placeholder="enter your email" />
      <button onClick={handlerLogin}>submit</button>
    </div>
  );
}
