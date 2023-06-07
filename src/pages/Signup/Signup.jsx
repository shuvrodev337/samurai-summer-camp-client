import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Signup = () => {
    const [errorMsg,setErrorMsg] = useState('')

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        if (data.password !== data.confirmPassword) {
            setErrorMsg('Password did not match')
            return
        }else{
            setErrorMsg('')
        }
        console.log(data);
        
    };

    return (
        <div className="hero min-h-screen bg-base-100 ">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up now!</h1>
            <p className="py-6">
              ut assumenda excepturi exercitationem quasi. In deleniti eaque aut
              repudiandae et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
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
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="********"
                  className="input input-bordered"
                  {...register("password", { required: true })} 

                />
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
            <p className="text-center">Already have an account? <Link className="btn btn-ghost btn-xs underline mb-4" to={'/login'}>Sign Up Here!</Link></p>
      {/* <p className="text-center pb-3">Back to <Link className="btn btn-ghost btn-xs underline" to={'/'}>Home</Link></p> */}
    {/* <SocialLogin></SocialLogin> */}
          </div>
        </div>
      </div>
    );
};

export default Signup;