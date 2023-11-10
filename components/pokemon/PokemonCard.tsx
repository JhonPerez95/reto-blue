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
    <Card
      shadow="sm"
      key={pokemon.id}
      isPressable
      onPress={() => console.log(pokemon)}
      onClick={onClick}
    >
      <CardBody className="overflow-visible p-0 ">
        <Image
          shadow="sm"
          radius="lg"
          width="100%"
          height="140"
          alt={pokemon.name}
          className=" object-cover rounded-xl h-140"
          src={pokemon.img}
        />
      </CardBody>
      <CardFooter className="text-small justify-between">
        <h4 className="font-bold text-large capitalize">
          <small className="text-default-500">{pokemon.id}. </small>
          {pokemon.name}
        </h4>
      </CardFooter>
    </Card>
  )
}
