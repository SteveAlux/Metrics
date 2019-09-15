import React from 'react'

const maincontext=React.createContext({
    database:{},
    addLead: () =>{},
    addCall: () =>{},
    addScreenp: () =>{},
    addScreenf:()=>{},
    addSourced: () =>{},
    addEmail: () =>{},
    subLead: () =>{},
    subCall: () =>{},
    subScreenp: () =>{},
    subScreenf:()=>{},
    subEmail: () =>{},
    addPSS:()=>{},
    subPSS:()=>{},

})

export default maincontext;
