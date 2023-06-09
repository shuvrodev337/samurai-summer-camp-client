import { useForm } from "react-hook-form";
import SectionTitle from "../../components/sectionTitle";
import useAuth from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const AddAClass = () => {
    const navigate = useNavigate()
const {user} = useAuth()
    const { register,reset, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = (addedClass) => {
        console.log(addedClass);
        Swal.fire({
            title: 'Are you sure?',
            text: `You will add ${addedClass.calssName} class`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Add it!'
          }).then((result) => {
            if (result.isConfirmed) {

            //   const newClass = { className: addedClass., email: user.email, photo: user.photo, role: 'student'}
            addedClass.availableSeats = parseFloat(addedClass.availableSeats)
            addedClass.price = parseFloat(addedClass.price)
            // addedClass.instructorId = user._id
            console.log(addedClass);
            //  TODO Use Axios Secure Here
            axios.post('http://localhost:3000/classes',addedClass)
            .then(res=>{
              console.log(res.data);
              if (res.data.insertedId) {
                reset();
                Swal.fire(
                    'Added!',
                    'Your class has been added.',
                    'success'
                  )
                
                //  TODO : uncomment below line
                // navigate('/dasboard/instructor/myclasses')
                
              }

            })
                


            
            }
          })
        
        
               
      };
    

    return (
        <>
        <SectionTitle sectionHeading={'Add A Class'}></SectionTitle>
        <div className="md:w-9/12 mx-auto">
        <div className="hero-content flex-col gap-10">
          
          <div className="card  w-full  shadow-2xl bg-base-100 ">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Class Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Class Name"
                  className="input input-bordered"
                  {...register("calssName", { required: true })} 
                />
                {errors.calssName?.type === "required" && (
                  <p className="text-red-800 text-sm">Class name is required</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Instructor Name</span>
                </label>
                <input
                  type="text"
                  readOnly
                  className="input input-bordered"
                  defaultValue={user?.displayName}
                  {...register("instructorName", { required: true })} 
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  readOnly
                  className="input input-bordered"
                  defaultValue={user?.email}
                  {...register("instructorEmail", { required: true })} 

                />
                
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Upload Class Photo</span>
                </label>
                <input
                  type="text"
                  placeholder="Class Photo"
                  className="input input-bordered"
                  {...register("classPhoto", { required: true })} 
                />
                {errors.classPhoto?.type === "required" && (
                  <p className="text-red-800 text-sm">Photo upload is required</p>
                )}
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Available seats</span>
                </label>
                <input
                  type="number"
                  placeholder="Available Seats"
                  className="input input-bordered"
                  
                  {...register("availableSeats", { required: true })} 
                  
                />
                {errors.availableSeats?.type === "required" && (
                  <p className="text-red-800 text-sm">Available Seats section is required</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="number"
                  placeholder="Price"
                  className="input input-bordered"
                  
                  {...register("price", { required: true })} 
                  
                />
                {errors.price?.type === "required" && (
                  <p className="text-red-800 text-sm">Price section is required</p>
                )}
              </div>
             
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn btn-neutral"
                  value="Add"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
        
        </>
    );
};

export default AddAClass;