import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { FaGoogle } from "react-icons/fa";
import axios from "axios";
import Swal from "sweetalert2";

const SocialLogins = () => {
    const {loginWithGoogle} = useAuth()

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        loginWithGoogle()
            .then(result=>{
                const loggedInUser = result.user;
                // console.log(loggedInUser);
                const savedUser = { name: loggedInUser.displayName, email: loggedInUser.email, photo: loggedInUser.photoURL}
                axios.post('https://samurai-summer-camp-server.vercel.app/users',savedUser)
                .then(res=>{
                    // console.log(res.data);
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Log In successful.',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate(from, { replace: true });
  
                })
            })
            .catch(error=>{
                // console.log(error.message);
            })
            // navigate(from, { replace: true });
    }
    return (
        <div>
            <div className="divider w-9/12 mx-auto">Or You Can</div>
            <div className="w-full text-center my-4">
                <button onClick={handleGoogleSignIn} className="btn  btn-outline ">
                    <FaGoogle className="text-red-600"></FaGoogle> Sign In with Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogins;