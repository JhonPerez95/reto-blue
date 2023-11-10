import { GetStaticProps, NextPage, GetStaticPaths } from 'next'
import { Card, Button, CardBody, Image, CardHeader } from '@nextui-org/react'

import { pokeApi } from '../../api'
import { Layout } from '../../components/layouts'
import { IPokemon } from '../../interfaces'

interface Props {
  pokemon: IPokemon
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  // console.log(pokemon)
  return (
    <Layout title={pokemon.name}>
      <div className="grid grid-rows-2 grid-flow-col gap-4">
        <div className="row-span-3">
          <Card>
            <CardBody>
              <Image
                src={
                  pokemon.sprites.other?.dream_world.front_default ??
                  '/no-image.png'
                }
                alt={pokemon.name}
                width="100%"
                height={200}
              />
            </CardBody>
          </Card>
        </div>
        <div className="row-span-2 col-span-2 ...">
          <Card shadow="sm" key={pokemon.id}>
            <CardHeader className=" justify-between ">
              <h1 className="font-bold text-5xl capitalize" color="foreground">
                {pokemon.name}
              </h1>

              <Button color="primary">Guardar en favoritos</Button>
            </CardHeader>
            <CardBody className="overflow-visible p-0 center">
              <p className="p-3  text-xl	">Sprites:</p>
              <div className="grid grid-cols-4 gap-4">
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </Layout>
  )
}

// Traemos los datos del pokemon en tiempo de compilacion
export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemons151 = [...Array(151)].map((value, index) => `${index + 1}`)

  return {
    paths: pokemons151.map((id) => ({
      params: { id },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string }

  const { data } = await pokeApi.get<IPokemon>(`/pokemon/${id}`)

  return {
    props: {
      pokemon: data,
    },
  }
}

export default PokemonPage
