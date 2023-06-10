import {  FaUser, FaUserNinja, FaUserShield } from "react-icons/fa";
// import axios from "axios";
import Swal from "sweetalert2";
import { useState } from "react";
const UsersRow = ({user, index,refetch}) => {
    const [disabledInstructorBtn,setDisabledInstructorBtn] = useState(false)
    const [disabledAdminBtn,setDisabledAdminBtn] = useState(false)



// Making Any User instructor
const makeInstructor = user =>{

    if (user.role === 'instructor') {
        return;
      }

    Swal.fire({
        title: 'Are you sure?',
        text: `You want to make ${user.name} an Instructor?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Do It!'
      }).then((result) => {
        if (result.isConfirmed) {

            fetch(`http://localhost:3000/users/instructor/${user._id}`,{
                method: 'PATCH'
            })
            .then(res=>res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    setDisabledInstructorBtn(true)
                    setDisabledAdminBtn(false)
                    // setDisable(true)
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
// Making Any User Admin
const makeAdmin = user =>{
    if (user.role === 'admin') {
        return;
      }
    Swal.fire({
        title: 'Are you sure?',
        text: `You want to make ${user.name} an Admin?`,
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
                    setDisabledAdminBtn(true)
                    setDisabledInstructorBtn(false)
                    // setDisable(true)
                    refetch()
                    Swal.fire(
                        `${user.name} has been made Admin`,
                        'success'
                      )  
                }
            })



          
        }
      })
}

    return (
      //TODO remove key from here and test
        <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role ==='admin'?'Admin':(user.role === 'instructor'?'Instructor':'Student')}
                  
              </td>
              <td className="flex flex-col items-end gap-2 justify-center">
                <button disabled={disabledAdminBtn || user.role === 'admin'} onClick={()=>makeAdmin(user)} className="btn btn-xs btn-warning"><FaUserShield></FaUserShield>Make Admin</button> 
                <button disabled={disabledInstructorBtn || user.role === 'instructor'} onClick={()=>makeInstructor(user)} className="btn btn-xs btn-success"><FaUserNinja></FaUserNinja>Make Instructor</button>
              
              </td>
                </tr>
    );
};

export default UsersRow;