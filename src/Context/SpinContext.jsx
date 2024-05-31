import React, { createContext, useState } from 'react'

const Spin = createContext()

export default function SpinContext({ children }) {
    const [loader , setloader] = useState(false)


    return (
        <>
            <Spin.Provider value={{loader , setloader}}>
                {children}
            </Spin.Provider>
        </>
    )
}

export {Spin}