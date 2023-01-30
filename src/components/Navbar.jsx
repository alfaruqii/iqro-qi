import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from '@chakra-ui/react'
import { HamburgerIcon } from "@chakra-ui/icons"
import { Link } from "react-router-dom"
import { FaQuran } from "react-icons/fa"

export const Navbar = () => {
  return (
    <div className="sticky backdrop-blur-2xl p-4 z-[1000] w-full top-0 border flex items-center sm:justify-around justify-between">
      <div className='flex items-center'>
        <FaQuran />
        <button className='ml-1 font-bold sm:text-lg'>
          <Link to="/">
            Baca Quran
          </Link>
        </button>
      </div>
      <div className='sm:flex mr-3 sm:mr-0 sm:text-lg'>
        <div>
          <button>
            <Link to="/search">Search</Link>
          </button>
        </div>
      </div>
    </div>
  )
}
