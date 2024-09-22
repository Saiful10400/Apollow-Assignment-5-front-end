import { createSlice } from "@reduxjs/toolkit";
const initialState={
    UpdateProduct:{},
    updateing:true
}
const DashboardSlice=createSlice({
    initialState,
    name:"dashboard",
    reducers:{
        setProduct:(state,action)=>{
            state.UpdateProduct=action.payload
        },
        UpdateFired:(state)=>{
            state.updateing=!state.updateing
        }
    }
})


const DashboardReducer=DashboardSlice.reducer
export const{setProduct,UpdateFired}=DashboardSlice.actions
export default DashboardReducer