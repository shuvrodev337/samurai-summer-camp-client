import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import UsersRow from "./UsersRow";

const AllUsers = () => {


    // TODO Make a hook that load all users, use axios secure there.
    const {data:users=[],refetch} = useQuery(['users'],async()=>{

        const res  = await axios.get('http://localhost:3000/users')
        return res.data
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
              users.map((user,index)=> <UsersRow key={user._id} user={user} index={index} refetch={refetch}></UsersRow>)
            }
            
            
          </tbody>
        </table>
      </div>
    );
};

export default AllUsers;

