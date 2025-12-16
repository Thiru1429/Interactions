

const Intraction = () => {

    let count = 0
    const handleclick = () => {
        count++
        console.log(count);
        alert(count)
        
    }

    const handlesubmit = (e) => {
        e.preventDefault()
        alert(count);
        

    }
  return (
    <>
    <div>
        <h1 className="text-center italic text-5xl">Click Events</h1>

        <div className="flex justify-center items-center mt-5 bg-amber-300 h-50 flex-col">
            <h2 className="text-3xl mb-4 italic">Onclick-Event {count}</h2>
            <button onClick={handleclick} className="bg-blue-500 p-2 text-white rounded w-26 italic ">Count</button>
        </div>

        <div className="flex justify-center items-center mt-5 bg-red-400 h-50 flex-col" >
            <h2 className="text-3xl mb-4 italic">Onsubmit-Event</h2>
            <form onSubmit={handlesubmit} className="flex gap-5">
                <input type="text" name="username" className="bg-white p-2 rounded" required/>
                <input type="submit" value="Submit" className="bg-blue-500 p-2 text-white rounded w-26 italic text-center"/>
            </form>
        </div>

        <div className="flex justify-center items-center mt-5 bg-orange-400 h-50 flex-col">
            <button onClick={count} className="bg-blue-500 p-2 text-white rounded w-26 italic ">Change</button>
        </div>
    </div>
    </>
  )
}

export default Intraction
