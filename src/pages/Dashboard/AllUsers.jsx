import { useQuery } from "@tanstack/react-query";
import { FaTrash, FaUser, FaUserNinja, FaUserShield } from "react-icons/fa";
import axios from "axios";
import Swal from "sweetalert2";

const AllUsers = () => {

    // Getting All Users 
    // const [axiosSecure] = useAxiosSecure()
    const {data:users=[],refetch} = useQuery(['users'],async()=>{

        const res  = await axios.get('http://localhost:3000/users')
        return res.data
    })
    console.log(users);

// Making A User instructor
const makeInstructor = user =>{

    Swal.fire({
        title: 'Are you sure?',
        text: `You want to make ${user.name} an instructor?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Do It!'
      }).then((result) => {
        if (result.isConfirmed) {

            fetch(`http://localhost:3000/users/admin/${user._id}`,{
                method: 'PATCH'
            })
            .then(res=>res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    Swal.fire(
                        `${user.name} has been made Instructor`,
                        'success'
                      )  
                }
            })



          
        }
      })
}

    return (
        <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th className="text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              users.map((user,index)=> <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role ==='admin'?'Admin':(user.role === 'instructor'?'Instructor':'Student')}
                  
                  {/* <button onClick={()=>makeAdmin(user)} className="btn btn-ghost text-xl"><FaUserShield></FaUserShield></button> */}
              </td>
              <td className="flex flex-col items-end gap-2 justify-center">
                <button className="btn btn-xs btn-error"><FaTrash></FaTrash>Delete User</button>
                <button onClick={()=>makeInstructor(user)} className="btn btn-xs btn-success "><FaUserNinja></FaUserNinja>Make Instructor</button>
                <button className="btn btn-xs btn-warning "><FaUserShield></FaUserShield>Make Admin</button> 
              
              </td>
                </tr>)
            }
            
            
          </tbody>
        </table>
      </div>
    );
};

export default AllUsers;

// {user.role ==='admin' && <button  className="btn btn-ghost text-xl"><FaUserShield></FaUserShield></button> }
//                   {user.role === 'instructor' && <button  className="btn btn-ghost text-xl"><FaUserNinja></FaUserNinja></button> }
//                   {user.role === 'student' &&<button  className="btn btn-ghost text-xl"><FaUser></FaUser></button> }