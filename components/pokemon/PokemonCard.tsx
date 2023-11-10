import { FC } from 'react'
import { useRouter } from 'next/router'
import { Card, CardFooter, CardBody, Image } from '@nextui-org/react'

import { ISmallPokemon } from '../../interfaces'

interface Props {
  pokemon: ISmallPokemon
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {
  const router = useRouter()

  const onClick = () => {
    alert(`/pokemon/${pokemon.id}`)
    // router.push(`/pokemon/${pokemon.id}`)
  }

  return (
    <Card shadow="sm" key={pokemon.id} isPressable onClick={onClick}>
      <CardBody className="overflow-visible p-0 center">
        <Image
          width="100%"
          height="140"
          alt={pokemon.name}
          className=" object-cover rounded-xl max-h-[140] h-140"
          src={pokemon.img}
        />
      </CardBody>
      <CardFooter className="text-small justify-between">
        <b className=" capitalize">{pokemon.name}</b>
        <p className="text-default-500 ">#{pokemon.id}</p>
      </CardFooter>
    </Card>
  )
}
