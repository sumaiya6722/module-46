// import React from 'react';
'use client'
import Link from "next/link";
import { useForm, handleSubmit } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const LoginPage = () => {

  // const handleformfunc = (e) => {
  //   e.preventDefault();
  //   const email = e.target.email.value;
  //   const password = e.target.password.value;
  //   console.log(email, password); //returns a string

  // }

  const [isShowPassword, setIsShowPassword] = useState(true);


  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleformfunc = async (data) => {
    console.log('the form', data); //returns object
    const { name, email, password, photo } = data;

    const { data:res, error } = await authClient.signIn.email({
      email: email, // required
      password: password, // required
      rememberMe: true,
      callbackURL: "/",
    });
    // console.log(data, error)
    if (error) {
      toast.error('Something went wrong. Plz try again')
    }
    if (res) {
      toast.success('SignIn successful');
    }
  }


  return (
    <div className="container mx-auto flex justify-center items-center 
    min-h-[60vh] ">
      <div className="py-12 px-18 my-12 shadow rounded bg-white">

        <h2 className="font-semibold text-3xl text-center ">Login Your Account</h2>
        <form className="" onSubmit={handleSubmit(handleformfunc)}>
          <fieldset className="fieldset relative space-y-4 mx-auto w-100 p-5 border-t border-gray-200 my-8">

            <label className="label text-lg font-semibold">Email</label>
            <input  {...register("email", { required: true })} type="email" className="input w-full bg-base-200 border-none" placeholder="Email" />
            {errors.email && <p className="text-red-500">Please enter the email</p>}

            <label className="label text-lg font-semibold">Password</label>
            <input  {...register("password", { required: true })} type={isShowPassword ? 'text' : 'password'}className="input w-full bg-base-200 border-none" placeholder="Password" />
            <span className="absolute right-10 top-49" onClick={()=>setIsShowPassword(!isShowPassword)}>{!isShowPassword ? <FaEye/>:<FaEyeSlash/>}</span>
            {errors.password && <p className="text-red-500">Please enter the password</p>}

            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </form>
        <small><p className="font-semibold text-center  text-gray-700">Don`t have an account? <Link className="text-red-500" href={'/register'}>Register</Link>
        </p></small>
      </div>
    </div>
  );
};

export default LoginPage;