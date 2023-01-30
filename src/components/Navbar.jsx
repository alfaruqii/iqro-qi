import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from '@chakra-ui/react'
import { HamburgerIcon } from "@chakra-ui/icons"
import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <div className="sticky backdrop-blur-2xl p-4 z-[1000] w-full top-0 border flex items-center sm:justify-around justify-around">
      <div>
        <button className='font-bold'>
          <Link to="/">
            Baca Quran
          </Link>
        </button>
      </div>
      <div className='sm:flex '>
        <div>
          <button>
            <Link to="/search">Search</Link>
          </button>
        </div>
      </div>
    </div>
  )
}
