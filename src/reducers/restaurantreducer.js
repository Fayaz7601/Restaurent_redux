import { R_sucess,R_fail } from "../constants/restaurantConstants";

// reducer function
export const restaurantListReducer=(state={restaurantList:[]},action)=>{
    switch(action.type){
        case R_sucess:
            return{restaurantList:action.payload}
        case R_fail:
            return{restaurantList:action.error}
        default:
            return state
        }

}