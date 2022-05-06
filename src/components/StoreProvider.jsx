import React, { createContext, useReducer } from 'react'

const initialState = {
    note: {
        id: '',
        title: '',
        message: '',
        note: false
    },
    listOfNotes: [
        {
            id: '0',
            title: 'Title by default',
            message: 'Message by default',
            note: true
        }
    ]
}

const Store = createContext(initialState)

const StoreProvider = ({children}) => {
    
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
    <Store.Provider value={{state, dispatch}}>
        {children}
    </Store.Provider>
  )
}

export default StoreProvider