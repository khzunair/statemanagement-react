import { createSlice } from "@reduxjs/toolkit";
import { clearAllUsers } from "../actions";
// create slice for user
const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        addUser(state, action) {
            // Add the user to the state array
            // For example, assuming action.payload is the user object:
            // return [...state, action.payload];
            console.log(action.payload);
            state.push(action.payload);
        },
        removeUser(state, action) {
            // Remove the user based on some criteria
            // For example, assuming action.payload is the user ID:
            // return state.filter(user => user.id !== action.payload);
            // console.log("removeUser", action.payload);
            state.splice(action.payload, 1);
        },
        updateUser(state, action) {
            // Update the user based on some criteria
            // For example, assuming action.payload is the updated user object:
            return state.map(user => {
                if (user.id === action.payload.id) {
                    return action.payload; // Replace the updated user
                } else {
                    return user; // Keep other users unchanged
                }
            });
        },
        // deleteAllUsers(state, action) {
        deleteAllUsers() {
            return [];
        }   
    },
    // extra reducers are independent of the above reducers
    extraReducers(builder){
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(clearAllUsers, () =>{
            return [];
        })
    }
});

// Export actions and reducer
export const { addUser, removeUser, updateUser,deleteAllUsers } = userSlice.actions;
export default userSlice.reducer;

// Log a message to the console
// console.log(userSlice.actions);
