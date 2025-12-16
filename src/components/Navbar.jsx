import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
    <div className="flex justify-between items-center bg-gray-600 text-white p-4">
        <div className="italic text-2xl">
            logo
        </div>
        <div className="flex gap-10 italic">
            <Link to={'/'}>Home</Link>
            <Link to={'/intract'}>Intract</Link>
        </div>
    </div>
    </>
  )
}

export default Navbar
