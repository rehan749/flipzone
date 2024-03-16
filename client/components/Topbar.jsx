
import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/flipkart.png'
import './topbar.css'
import { FaRegUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";


const Topbar = () => {

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary ">
    <div className="container">
      <div className="col-md-3 col-lg-3 col-sm-4">
        <Image src={logo}  alt="logo"
      width={150}
      height={50} />
      </div>
      <div className="col-md-5 col-lg-5 col-sm-4 d-none d-sm-block search">
      <CiSearch />
        <input type="text" title="Search" className='search-bar' placeholder='Search for Products, Brands and More'/>
      </div>
      <div className="col-md-4 col-lg-4 col-sm-4 text-align-sm-end top-icons">
        <Link href="/login" className="px-3" ><FaRegUser />Login</Link>
        <Link href="/cart" className="px-3"><FaShoppingCart />Cart</Link>
      </div>
    </div>
    
  </nav>
  )
}

export default Topbar