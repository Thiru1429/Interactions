import React, { useState } from 'react'

const Usestate = () => {
  const [string, setString] = useState("Thiru")
  const [number, setNumber] = useState(100)
  const [boolean, setBoolean] = useState(true)
  const [nulll, setNulll] = useState(null)
  const [undefine, setUndefine] = useState(undefined)

  const handleChange = () => {
    setString("Moorthi")
    setNumber(200)
    setBoolean(false)
    setNulll("This is Null")
    setUndefine("This is Undefined")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-96 bg-white rounded-xl shadow-lg p-6 space-y-3">

        <h2 className="font-bold">String</h2>
        <p>{string}</p>

        <h2 className="font-bold">Number</h2>
        <p>{number}</p>

        <h2 className="font-bold">Boolean</h2>
        <p>{String(boolean)}</p>

        <h2 className="font-bold">Null</h2>
        <p>{String(nulll)}</p>

        <h2 className="font-bold">Undefined</h2>
        <p>{String(undefine)}</p>

        <button
          onClick={handleChange}
          className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg"
        >
          Change
        </button>

      </div>
    </div>
  )
}

export default Usestate
