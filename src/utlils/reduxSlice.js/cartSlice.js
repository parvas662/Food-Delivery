import { createSlice } from "@reduxjs/toolkit"; 
 
const cartSlice  = createSlice({
    name : "cart",
    initialState : {
        items :[]
    },
    reducers: {
        addItems : (state,action)=>{
            // we are mutating the state here (modifing the existing state)   
            state.items.push(action.payload);
            console.log("action ",action.payload)
            console.log("itemssss", JSON.parse(JSON.stringify(state.items)));
        },
        removeItems: (state)=>{
            state.items.pop();
        },
        clearCart :(state)=>{
            state.items = []
            //state.items.length = 0;
        }, 
    }
})
 
export const { addItems,removeItems,clearCart } = cartSlice.actions; 
export default cartSlice.reducer;