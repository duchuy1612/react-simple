import React from 'react'
import { useNavigate } from 'react-router-dom'
import BlueButton from '../components/Buttons/BlueButton'
import InputBlue from '../components/InputBox/InputBlue'
import '../styles/signup.css'

export default function Signup() {
    const navigate = useNavigate()

    const navigateToHome = () => {
      navigate('/home')
    }
    return (
      <div className="container_body">
        <div className="login__container">
          {/* <div className="logo">
            <img src="../logo.png" className="img_size"></img>
            <h1 className="h1_font">My Home</h1>
          </div> */}
          <p className="p__size">Sign up</p>
          <p className="title__">
            Welcome to Leavunity! Fill your infomation to sign up.
          </p>
          <InputBlue label="Username" type="text"></InputBlue>
          <InputBlue label="Password" type="password"></InputBlue>
          <InputBlue label="Confirm password" type="password"></InputBlue>

          <a className="a__" href="./login" onClick={navigateToHome}>
            Have account already? Click here.
          </a>
          <div className="contain__button">
            <BlueButton onClick={navigateToHome}>Create Account</BlueButton>
          </div>
        </div>
      </div>
    )
}