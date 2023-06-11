import { useForm } from "react-hook-form";
import SectionTitle from "../../components/sectionTitle";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const AddAClass = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const onSubmit = (addedClass) => {
    const formData = new FormData();
    formData.append("image", addedClass.classPhoto[0]);
    console.log(addedClass);
    Swal.fire({
      title: "Are you sure?",
      text: `You will add ${addedClass.calssName} class`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Add it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(img_hosting_url, {
          method: "POST",
          body: formData,
        })
          .then((res) => res.json())
          .then((imgResponse) => {
            if (imgResponse.success) {
              const imgURL = imgResponse.data.display_url;
              addedClass.availableSeats = parseFloat(addedClass.availableSeats);
              addedClass.price = parseFloat(addedClass.price);
              addedClass.classPhoto = imgURL;

              axiosSecure.post("/classes", addedClass).then((res) => {
                if (res.data.insertedId) {
                  reset();
                  Swal.fire("Added!", "Your class has been added.", "success");

                  navigate(`/dashboard/instructors/classes`);
                }
              });
            }
          });
      }
    });
  };

  return (
    <>
      <Helmet>
        <title>Samurai Camp | Add Class</title>
      </Helmet>
      <SectionTitle sectionHeading={"Add A Class"}></SectionTitle>
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
                  {...register("clssName", { required: true })}
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
                  type="file"
                  placeholder="Class Photo"
                  className="file-input file-input-bordered file-input-accent w-full max-w-xs"
                  {...register("classPhoto", { required: true })}
                />
                {errors.classPhoto?.type === "required" && (
                  <p className="text-red-800 text-sm my-2">
                    Photo upload is required
                  </p>
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
                  <p className="text-red-800 text-sm">
                    Available Seats section is required
                  </p>
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
                  <p className="text-red-800 text-sm">
                    Price section is required
                  </p>
                )}
              </div>

              <div className="form-control mt-6">
                <input type="submit" className="btn btn-neutral" value="Add" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddAClass;
