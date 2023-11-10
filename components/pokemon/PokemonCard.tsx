import { FC } from 'react'
import { useRouter } from 'next/router'
import { Card, CardHeader, CardBody, Image } from '@nextui-org/react'

// import { Grid, Card, Row, Text } from '@nextui-org/react'

import { ISmallPokemon } from '../../interfaces'

interface Props {
  pokemon: ISmallPokemon
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {
  const router = useRouter()

  const onClick = () => {
    router.push(`/pokemon/${pokemon.id}`)
  }

  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">
          <h4 className="font-bold text-large capitalize">
            <small className="text-default-500">{pokemon.id}. </small>
            {pokemon.name}
          </h4>
        </p>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={pokemon.img}
          width={270}
        />
      </CardBody>
    </Card>
    // <Grid xs={6} sm={3} md={2} xl={1} key={pokemon.id}>
    //   <Card hoverable clickable onClick={onClick}>
    //     <Card.Body css={{ p: 1 }}>
    //       <Card.Image src={pokemon.img} width="100%" height={140} />
    //     </Card.Body>
    //     <Card.Footer>
    //       <Row justify="space-between">
    //         <Text transform="capitalize">{pokemon.name}</Text>
    //         <Text>#{pokemon.id}</Text>
    //       </Row>
    //     </Card.Footer>
    //   </Card>
    // </Grid>
  )
}
