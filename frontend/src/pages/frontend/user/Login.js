import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import userservice from "../../../services/UserService";

function Login() {
  let navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    async function login(e){
      e.preventDefault();
      var user = new FormData();
      user.append('username',username);
      user.append('password',password);
      user.append('roles',1);
      await userservice.login(user).then(function(res){
        if(res.data.success === true){
          alert('thanh cong');
          navigate('/admin');
        }else{
          alert('tai khoan hoac mat khau sai');
        }
      });
    }
  return (   <form method="post" onSubmit={login}>
  <div className="imgcontainer">
    <img src={require("../user/login.png")} alt="Avatar" className="avatar" />
  </div>
  <div className="container">
    <label htmlFor="username">
      <b>Username</b>
    </label>
    <input type="text" placeholder="Enter Username" name="uname" required="" />
    <label htmlFor="password">
      <b>Password</b>
    </label>
    <input
      type="password"
      placeholder="Enter Password"
      name="psw"
      required=""
    />
    <button type="submit">Login</button>
    <label>
      <input type="checkbox" defaultChecked="checked" name="remember" />{" "}
      Remember me
    </label>
  </div>
  <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
    <button type="button" className="cancelbtn">
      Cancel
    </button>
    <span className="psw">
      Forgot <a href="#">password?</a>
    </span>
  </div>
</form>  );
}

export default Login;


