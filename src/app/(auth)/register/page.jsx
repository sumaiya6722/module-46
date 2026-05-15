// import React from 'react';
'use client'
import Link from "next/link";
import { useForm, handleSubmit } from "react-hook-form";
// import { AuthClient } from "better-auth/client";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";


const RegisterPage = () => {

  // const handleformfunc = (e) => {
  //   e.preventDefault();
  //   const email = e.target.email.value;
  //   const password = e.target.password.value;
  //   console.log(email, password); //returns a string

  // }



  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleformfunc = async (data) => {
    console.log('the form', data); //returns object
    const { name, email, password, image} = data;

    const { data: res, error } = await authClient.signUp.email({
      name: name, // required
      email: email, // required
      password: password,
      image: image, // required
      callbackURL: "/",
    });
    console.log(data, error);
    if(error){
      toast.error('Something went wrong. Plz try again')
    }
    if(res){
      toast.success('SignUp successful');
    }
  }

  return (
    <div className="container mx-auto flex justify-center items-center 
    min-h-[60vh] ">
      <div className="py-12 px-18 my-12 shadow rounded bg-white">

        <h2 className="font-semibold text-3xl text-center ">Register Your Account</h2>
        <form className="" onSubmit={handleSubmit(handleformfunc)}>
          <fieldset className="fieldset space-y-4 mx-auto w-100 p-5 border-t border-gray-200 my-8">

            <label className="label text-lg font-semibold">Name</label>
            <input  {...register("name", { required: true })} type="text" className="input w-full bg-base-200 border-none" placeholder="Name" />
            {errors.name && <p className="text-red-500">Please enter the name</p>}

            <label className="label text-lg font-semibold">Photo URL</label>
            <input  {...register("image", { required: true })} type="url" className="input w-full bg-base-200 border-none" placeholder="photo url" />
            {errors.photo && <p className="text-red-500">Please enter the photo</p>}


            <label className="label text-lg font-semibold">Email</label>
            <input  {...register("email", { required: true })} type="email" className="input w-full bg-base-200 border-none" placeholder="Email" />
            {errors.email && <p className="text-red-500">Please enter the email</p>}

            <label className="label text-lg font-semibold">Password</label>
            <input  {...register("password", { required: true })} type="password" className="input w-full bg-base-200 border-none" placeholder="Password" />
            {errors.password && <p className="text-red-500">Please enter the password</p>}

            <button className="btn btn-neutral mt-4">Register</button>
           
          </fieldset>
        </form>
        <small><p className="font-semibold text-center  text-gray-700">Already have an account? <Link className="text-red-500" href={'/login'}>Login Now</Link>
        </p></small>
      </div>
    </div>
  );
};

export default RegisterPage;