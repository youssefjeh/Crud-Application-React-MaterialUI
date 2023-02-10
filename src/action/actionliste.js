import {ADD_REMINDER, DELETE_REMINDER,CLEAR_REMINDER , EDITE_REMINDER } from '../types/types'


export const add_reminder = (text , date) =>{
    const action = {

        type : ADD_REMINDER,
        text,
        date
    }
    return action
}

export const deletereminder = (id)=>{
    const action = {
        type : DELETE_REMINDER,
        id
    }

    return action
}

export const clearrlinder= () =>{
    const action = {
        type : CLEAR_REMINDER
    } 
    return action
    
}

export const editereminder =(id ,date , text) => {
    const action = {
        type : EDITE_REMINDER,
        id,
        date,
        text
    }
    return action
}