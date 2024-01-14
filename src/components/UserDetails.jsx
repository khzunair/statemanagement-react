import { useSelector } from "react-redux";
import { fakeUserData } from "../api";
import { useDispatch } from "react-redux";
import { addUser,
    //  deleteAllUsers
     } from "../store/slices/userSlice";
import { clearAllUsers } from "../store/actions";

export const UserDetails = () => {
    const dispatch = useDispatch();

    const addNewUser = (payload) => {
        console.log(payload)
        dispatch(addUser(payload));
    };
// come on
// const clearAllUsers = () => {
//     dispatch(deleteAllUsers());
// };

const deleteAllUsers = () => {
    dispatch(clearAllUsers());
};

    const users = useSelector((state) => state.users);

    return (
        <div>
            <div style={{display:"flex", flexDirection:"row"}}>
            <h2>User Details{"  "}</h2>
            <button onClick={()=>addNewUser(fakeUserData())}>Button</button>
            <button onClick={deleteAllUsers}>Delete All</button>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>

                            <td>{user.name}</td>
                            <tr>{user.email}</tr>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

