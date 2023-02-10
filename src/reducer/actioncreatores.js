import {ADD_REMINDER, DELETE_REMINDER ,CLEAR_REMINDER ,  EDITE_REMINDER } from '../types/types'
import {listeremind} from '../data/relindliste'
const reminder=(state = listeremind , action )=>{
    if(action.type === ADD_REMINDER){
        // let remind = []
        state = [...state , {text : action.text , date : action.date , id: Math.random()}]
        
        console.log("Add " , state);
        console.log("this dat " , listeremind)
        return state
    }else if(action.type === DELETE_REMINDER){
        let newliste = []

        newliste = state.filter(item => item.id !== action.id)
        console.log(newliste);
        state = newliste
        return state

    }else if(action.type === CLEAR_REMINDER){
        state = []
        return state
    }else if(action.type === EDITE_REMINDER){
        console.log(" u  are here");
        const obj = {
            text : action.text,
            date : action.date,
            id : action.id

        }

        console.log("new state of ", state);
        let newstate = state.map((item) =>{
            if(item.id === action.id){
                
                return(
                   { id : action.id,
                     text : action.text,
                     date : action.date}
                )
                
            }else{
                return {...item}
            }
        } )
        console.log(newstate)



        return newstate
        
    }else{
        return state
    }
    

}

export default reminder