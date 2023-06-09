import { useQuery } from "@tanstack/react-query";
import { FaTrash, FaUser, FaUserNinja, FaUserShield } from "react-icons/fa";
// import axios from "axios";

const AllUsers = () => {

    // const [axiosSecure] = useAxiosSecure()
    const {data:users=[],refetch} = useQuery(['users'],async()=>{
        const res = await fetch('http://localhost:3000/users')
        return res.json()

        // const res  = await axios.get('/users')
        // return res.data
    })
    console.log(users);
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
                <button className="btn btn-xs btn-success "><FaUserNinja></FaUserNinja>Make Instructor</button>
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