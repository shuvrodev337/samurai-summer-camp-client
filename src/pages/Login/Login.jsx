import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
const Login = () => {

  const [errorMsg,setErrorMsg] = useState('')
  const {loginWithEmailPass, logOut} = useAuth()
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = user=>{
// console.log(user);
    loginWithEmailPass(user.email, user.password)
    .then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      navigate(from,{replace:true});
    })
    .catch((error) => {
      if (error.message === "Firebase: Error (auth/user-not-found).") {
        setErrorMsg("The email address you have entered is not registered!");
      } else if (error.message === "Firebase: Error (auth/wrong-password).") {
        setErrorMsg("Password Incorrect! Type again or reset.");
      }
    });

  }

    return (
      <div className="md:w-1/2 mx-auto">
      <div className="hero-content flex-col gap-10">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Log In now!</h1>
        </div>
        <div className="card  w-full  shadow-2xl bg-base-100 ">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            
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
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="********"
                className="input input-bordered"
                {...register("password")}

              />
              {errors.password?.type === "required" && (
                <p className="text-red-800 text-sm">Password is required</p>
              )}
              
            </div>
            
            <p className="text-red-800 text-sm">{errorMsg}</p>
           
            <div className="form-control mt-6">
              <input
                type="submit"
                className="btn btn-neutral"
                value="Log In"
              />
            </div>
          </form>
          <p className="text-center">New Here? <Link className="btn btn-ghost btn-xs underline mb-4" to={'/signup'}>Sign Up!</Link></p>
    {/* <p className="text-center pb-3">Back to <Link className="btn btn-ghost btn-xs underline" to={'/'}>Home</Link></p> */}
  {/* <SocialLogin></SocialLogin> */}
        </div>
      </div>
    </div>
    );
};

export default Login;