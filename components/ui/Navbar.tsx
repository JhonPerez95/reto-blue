import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarBrand,
} from '@nextui-org/navbar'
import { Link } from '@nextui-org/react'
import Image from 'next/image'

export const NavbarComponet = () => {
  return (
    <Navbar
      isBordered
      position="static"
      isBlurred={false}
      className="bg-gray-900 flex justify-between "
    >
      <NavbarBrand>
        <Image
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
          alt="icono de la app"
          width={80}
          height={80}
        />
        {/* <p className="font-bold text-inherit">ACME</p> */}
        <Link className="font-bold text-inherit" color="foreground" href="/">
          Pokemon
        </Link>
      </NavbarBrand>

      {/* <NavbarContent justify="end" className=" justify-end ">
        <NavbarItem className=" justify-end ">
          <Link color="foreground" href="/favorites">
            Favorites
          </Link>
        </NavbarItem>
      </NavbarContent> */}
    </Navbar>
  )
}
