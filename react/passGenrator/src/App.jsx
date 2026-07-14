import { useState, useCallback, useEffect, useRef } from 'react'

import './App.css'

function App() {
  const [length, setLength]= useState(8)
  const [number, setNumber]= useState(false)
  const [symbol, setSymbol]= useState(false)
  const [password, setPassword]= useState("")

  const passwordReff=useRef(null)

  const passwordGenrator= useCallback(()=>{
      let pass=""
      let str="ABCDEFGHIJKLMNOPORSTUVWXYZabcdefghijkImnopqrstuvwxyz"

      if(length) str+="0123456789"
      if(symbol) str+="~`!@#$%^&*()_+=-{}[]:;''<>?/.,|"

      for (let i = 0; i < length; i++) {
        let char= Math.floor(Math.random() * str.length + 1)
        
        pass+=str.charAt(char)
      }

      setPassword(pass)

    }, [length, number, symbol, setPassword])

    const copyPass=useCallback(()=>{
      passwordReff.current?.select()
      window.navigator.clipboard.writeText(password)

    }, [password])


    useEffect(()=>{
      passwordGenrator()
    }, [length, passwordGenrator, number, symbol, setPassword])

  return (
  <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-500 bg-gray-800">
    
    {/* Password field */}
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input
        type="text"
        value={password}
        className="outline-none w-full py-1 px-3"
        readOnly
        ref={passwordReff}
        placeholder="Password"
      />

      <button 
      onClick={copyPass}
      className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
        Copy
      </button>
    </div>

    
    <div className="flex items-center gap-x-2">


      {/* Controls */}
    <div className="flex text-sm gap-x-2">
      <div className="flex items-center gap-x-2">
        <input
          type="range"
          min={6}
          max={100}
          value={length}
          className="cursor-pointer"
          onChange={(e)=>{setLength(e.target.value)}}
        />
        <label>Length: {length}</label>
      </div>
    </div>
  <input
    type="checkbox"
    checked={symbol}
    id="symbolInput"
    onChange={() => setSymbol((prev) => !prev)}
  />
  <label htmlFor="symbolInput">Symbols</label>
</div>

<div className="flex items-center gap-x-2">
  <input
    type="checkbox"
    checked={number}
    id="numberInput"
    onChange={() => setNumber((prev) => !prev)}
  />
  <label htmlFor="numberInput">Numbers</label>
</div>

  </div>
);
}

export default App
