import { useSelector,useDispatch } from "react-redux";
import { removeUser } from "../store/slices/userSlice";

export const DisplayUsers = () => {
    const dispatch = useDispatch(); 
  const data = useSelector((state) => {
    return state.users;
  });
//   console.log(data);

const deleteUser = (id) => {
    dispatch(removeUser(id));
};


  return (
    <div>
            <div style={{display:"flex", flexDirection:"row"}}>
            <h2>Managing Users{"  "}</h2>
            <h2>Managing Users{"  "}</h2>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((user,id) => (
                       <tr key={id} >

                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td><button onClick={()=> deleteUser(id)}>Delete</button></td>
                        </tr>
                   ))} 
                </tbody>
            </table>
        </div>
  );
};
