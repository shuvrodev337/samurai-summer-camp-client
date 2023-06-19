import SectionTitle from "../../../components/sectionTitle";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const Feedback = () => {
    const {user} = useAuth()
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit= feedback =>{
        // console.log(feedback);
        Swal.fire({
            title: 'Are you sure?',
            text: `You want send this feedback?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Send!'
          }).then((result) => {
            if (result.isConfirmed) {
                axios.post('https://samurai-summer-camp-server.vercel.app/users/feedbacks',feedback)
                .then(res=>{
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Feedback Sent!',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
            }
          })
        

    }
  return (
    <div >
      <SectionTitle
        sectionHeading={"We Value Your Feedback"}
        sectionSubHeading={"Share Your Thoughts and Experience with Us"}
      ></SectionTitle>
      <div className="md:flex gap-12 my-14">

      <div className="w-full md:w-1/2 flex flex-col justify-center items-center gap-6 p-6">
        <h1 className="text-3xl font-semibold">OUR MISSION</h1>
        <p>
          We strive to be the best Martial Arts service provider in the world,
          consistently innovating in order to achieve optimal member experience
          and influence. To have the highest level of Martial Arts education;
          emotionally and physically inspiring individuals to overcome barriers
          for life. To the create the reach to influence as many people with the
          martial arts philosophies and way of life.
        </p>
      </div>
      <div className="card  w-full md:w-1/2  shadow-2xl bg-base-100 ">
      <h1 className="text-3xl text-center font-semibold my-4">Your Feedback</h1>

          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                defaultValue={user?.displayName}
                placeholder={!user ? "Name": ''}
                readOnly={user? user : false}

                className="input input-bordered"
                {...register("name", { required: true })} 

              />
              {errors.name?.type === "required" && (
                <p className="text-red-800 text-sm">Name is required</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input
                type="email"
                defaultValue={user?.email}
                readOnly={user}

                placeholder={!user ? "Email" : ''}
                className="input input-bordered"
                {...register("email", { required: true })} 

              />
              {errors.email?.type === "required" && (
                <p className="text-red-800 text-sm">Email is required</p>
              )}
            </div>
            <div className="form-control">
            <label className="label">
                <span className="label-text">Your Feedback</span>
              </label>
            <textarea className="textarea textarea-bordered"
             placeholder="Write Feedback"
             {...register("userFeedback", { required: true })} 
             ></textarea>
             {errors.userFeedback?.type === "required" && (
                <p className="text-red-800 text-sm">Feedback Field is required</p>
              )}
            
            </div>
            
           
            <div className="form-control mt-6 w-1/2 mx-auto">
              <input
                type="submit"
                className="btn btn-neutral"
                value="Send"
              />
            </div>
          </form>
          
        </div>
      </div>
      
    </div>
  );
};

export default Feedback;
