import { createSlice } from "@reduxjs/toolkit"; 


const cartSlice  = createSlice({
    name : "cart",
    initialState : {
        items :["burger","pizza"]
    },
    reducers: {
        addItems : (state,action)=>{
            // we are mutating the state here (modifing the existing state)
            state.items.push(action.payload);
        },
        removeItems: (state,action)=>{
            state.items.pop();
        },
        clearCart :(state,action)=>{
            state.items = []
            state.items.length = 0;
        }, 
    }
})

export const { addItems,removeItems,clearCart } = cartSlice.actions; 
export default cartSlice.reducer;