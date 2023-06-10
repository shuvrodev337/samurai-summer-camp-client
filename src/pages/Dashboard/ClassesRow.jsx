
const ClassesRow = ({singleClass,index,refetch}) => {
    const {_id,className,instructorEmail,classPhoto,instructorName,availableSeats,price,instructorId,status,enrolledStudents,feedback} = singleClass

    return (
        <tr>
                  <th>{index + 1}</th>
                  <td>{className}</td>
                  <td>{availableSeats}</td>
                  <td className="text-center">${price}</td>
                  <td>{status ==='pending'?'Pending':(status === 'approved'?'Approved':'Denied')}</td>
                  <td>{status=='denied' && feedback ? feedback :'No feedback'}</td>

              {/* <td className="flex flex-col items-end gap-2 justify-center">
                <button disabled={disabledAdminBtn || user.role === 'admin'} onClick={()=>makeAdmin(user)} className="btn btn-xs btn-warning"><FaUserShield></FaUserShield>Make Admin</button> 
                <button disabled={disabledInstructorBtn || user.role === 'instructor'} onClick={()=>makeInstructor(user)} className="btn btn-xs btn-success"><FaUserNinja></FaUserNinja>Make Instructor</button>
              
              </td> */}
                </tr>
    );
};

export default ClassesRow;