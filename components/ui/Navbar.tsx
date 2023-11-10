import { Navbar, NavbarContent, NavbarItem, Link } from '@nextui-org/react'
import Image from 'next/image'

export const NavbarComponet = () => {
  return (
    <Navbar
      isBordered
      position="static"
      isBlurred={false}
      className="bg-gray-900 flex justify-between "
    >
      <NavbarContent>
        <NavbarItem>
          <Image
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
            alt="icono de la app"
            width={80}
            height={80}
          />
        </NavbarItem>
        <NavbarItem>
          <Link className="font-bold text-inherit" color="foreground" href="/">
            Pokemon
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* <NavbarContent justify="end">
        <NavbarItem>
          <Link color="foreground" href="/">
            Favorites
          </Link>
        </NavbarItem>
      </NavbarContent> */}
    </Navbar>
  )
}
