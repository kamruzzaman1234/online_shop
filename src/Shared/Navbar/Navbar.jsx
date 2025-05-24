import { Link } from "react-router-dom";

const Navbar = ()=>{
  return(
    <div className="bg-[#333300]">
        <div className="navbar max-w-[1460px] w-full mx-auto shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content  rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><Link to="" className="text-[16px] uppercase md:text-[17px] font-medium">Home</Link></li>
        <li><Link to="" className="text-[16px] uppercase md:text-[17px] font-medium">About</Link></li>
        <li><Link to="" className="text-[16px] uppercase md:text-[17px] font-medium">Pages</Link></li>
        <li><Link to="" className="text-[16px] uppercase md:text-[17px] font-medium">Shop</Link></li>
        <li><Link to="" className="text-[16px] uppercase md:text-[17px] font-medium">Contact</Link></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-2xl">Online Shop</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to="" className="text-[16px] uppercase md:text-[17px] lg:text-[16px] font-medium">Home</Link></li>
      <li><Link to="" className="text-[16px] uppercase md:text-[17px] lg:text-[16px] font-medium">About</Link></li>
      <li><Link to="" className="text-[16px] uppercase md:text-[17px] lg:text-[16px] font-medium">Pages</Link></li>
      <li><Link to="" className="text-[16px] uppercase md:text-[17px] lg:text-[16px] font-medium">Shop</Link></li>
      <li><Link to="" className="text-[16px] uppercase md:text-[17px] lg:text-[16px] font-medium">Contact</Link></li>
      
     
    </ul>
  </div>
  <div className="navbar-end px-2 flex gap-2">
    <button className="btn btn-outline btn-warning text-white">Registration</button>
    <button className="btn btn-outline btn-warning text-white">Login</button>
  </div>
</div>
    </div>
  )
}

export default Navbar;