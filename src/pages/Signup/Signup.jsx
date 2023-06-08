import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import SectionTitle from "../../components/sectionTitle";

const Signup = () => {
    const [errorMsg,setErrorMsg] = useState('')
    const {signUp, updateUserProfile, logOut} = useAuth()
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();
    

    const onSubmit = (user) => {
      if (user.password !== user.confirmPassword) {
        setErrorMsg('Password did not match')
        return
    }else{
        setErrorMsg('')
    }
    console.log(user);
      signUp(user.email, user.password)
        .then(() => {
          updateUserProfile(user.name, user.photo)
            .then(() => {
              alert('register successfull')
              navigate("/")
                
            })
            
        })
        .catch((error) => {
          console.log(error.message);
        });
    };

    return (
        <>
        <SectionTitle sectionHeading={'Sign Up Now!'}></SectionTitle>
        <div className="md:w-1/2 mx-auto">
        <div className="hero-content flex-col gap-10">
          {/* <div className="text-center ">
            <h1 className="text-5xl font-bold">Sign Up now!</h1>
          </div> */}
          <div className="card  w-full  shadow-2xl bg-base-100 ">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered"
                  {...register("name", { required: true })} 
                />
                {errors.name?.type === "required" && (
                  <p className="text-red-800 text-sm">First name is required</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered"
                  {...register("email", { required: true })} 

                />
                {errors.email?.type === "required" && (
                  <p className="text-red-800 text-sm">Email is required</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Upload Your Photo</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Photo"
                  className="input input-bordered"
                  {...register("photo", { required: true })} 
                />
                {errors.photo?.type === "required" && (
                  <p className="text-red-800 text-sm">Photo upload is required</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="********"
                  className="input input-bordered"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/,
                  })}

                />
                {errors.password?.type === "required" && (
                  <p className="text-red-800 text-sm">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-800 text-sm">Password Too short</p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-800 text-sm">
                    Password must have a capital letter and a special character
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="********"
                  className="input input-bordered"
                  {...register("confirmPassword", { required: true })} 

                />
              </div>
              <p className="text-red-800">{errorMsg}</p>
             
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn btn-neutral"
                  value="Sign Up"
                />
              </div>
            </form>
            <p className="text-center">Already have an account? <Link className="btn btn-ghost btn-xs underline mb-4" to={'/login'}>Log In Here!</Link></p>
      {/* <p className="text-center pb-3">Back to <Link className="btn btn-ghost btn-xs underline" to={'/'}>Home</Link></p> */}
    {/* <SocialLogin></SocialLogin> */}
          </div>
        </div>
      </div>
        
        </>
    );
};

export default Signup;