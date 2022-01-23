import { ORDER } from "../actions/types";


const initialState = {
    order : [],
}

export default function foo (state = initialState,action){
    const {payload,type } = action

    switch(type){
        case ORDER:
            return{
                ...state,
                order:[payload]
            }
     
   
       default:
           return state
    }
}
