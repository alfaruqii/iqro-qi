import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from '@chakra-ui/react'
import { HamburgerIcon } from "@chakra-ui/icons"
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <div className="sticky backdrop-blur-xl p-4 z-[1000] w-full top-0 border flex items-center sm:justify-around justify-between">
      <div>
        <button className='font-bold'>
          <Link to="/">
            Baca Quran
          </Link>
        </button>
      </div>
      <div className='sm:hidden'>
        <Menu className="relative">
          < MenuButton
            className='border rounded'
            boxSize={40}
            as={IconButton}
            aria-label='Options'
            icon={<HamburgerIcon />}
            variant='outline' />
          <MenuList className='p-4 backdrop-blur-md text-left pr-12 mt-3 border '>
            <MenuItem>
              <Link to="/surat/1">Search</Link>
            </MenuItem>
            <MenuItem>Tafsir</MenuItem>
            <MenuItem>Audio Quran</MenuItem>
          </MenuList>
        </Menu>
      </div>
      <div className='hidden sm:flex '>
        <div>
          <button>Search</button>
        </div>
      </div>
    </div>
  )
}
