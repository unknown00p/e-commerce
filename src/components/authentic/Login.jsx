import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import {Input,Button} from '../index';
import { fetchLogIn, getCurrentUser } from '../../FetchFunc/fetchUserApi';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Cookies from "js-cookie"
import { loginDetails } from '../../store/userSlice';

function Login() {
  const { handleSubmit, register } = useForm()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [error, setError] = useState(null)

  const handelData = async (data) => {
      const dispatched = dispatch(loginDetails(data))
      const isUser = await dispatched
      // console.log(isUser);
      if (isUser?.payload.user) {
        navigate("/")
      }
  }

  return (
    <form onSubmit={handleSubmit(handelData)}>
      <div className='flex shadow-xl flex-col gap-4 bg-[#111827] w-[35%] rounded-md m-auto p-6 justify-center items-center'>

        <Input
          label="Username"
          type="text"
          className="border-[#c9c9c9] border-2 outline-none rounded-[4px] px-[3px] w-[24rem] h-[2.4rem]"
          labelClass="text-white"
          placeholder="Billu bhai"
          {...register("username")}
        />

        <Input
          label='Password'
          type="password"
          className="border-[#c9c9c9] border-2 outline-none rounded-[4px] px-[3px] w-[24rem] h-[2.4rem]"
          labelClass="text-white"
          placeholder="********"
          {...register("password")}
        />

        <div className='text-[#fff]'>Don't have a account? <Link to="/signup" className='text-[#185ac6]'>Sign Up</Link></div>

        <Button
          type='submit'
          text='Login'
          buttonClass="bg-[#3c3f73] text-[#ffffff] px-4 py-2 rounded-md"
        />


      </div>
    </form>
  )
}

export default Login
