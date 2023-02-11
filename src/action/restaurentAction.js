import axios from "axios";
import { R_sucess, R_fail } from "../constants/restaurantConstants";

// create asynvh fn to api call

export const RestaurantListAction = () => async (dispatch) => {
    try {
        const result = await axios.get('/restaurants.json')
        console.log(result.data.restaurants);
        dispatch(
            {
                type:R_sucess,
                payload:result.data.restaurants
            }
        )
    }
    catch(error) {
        dispatch(
            {
                type:R_fail,
                error:error
            }
        )
    }
}
