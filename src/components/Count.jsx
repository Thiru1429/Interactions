import React, { useState } from 'react'

const Count = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <div className="flex flex-col gap-5 justify-center items-center mt-10">
      <h2 className="text-xl font-bold">
        My Count is : {count}
      </h2>

      <button
        onClick={handleClick}
        className="bg-blue-500 text-white p-3 rounded"
      >
        Count
      </button>
    </div>
  )
}

export default Count
