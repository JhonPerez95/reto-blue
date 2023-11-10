import { NextPage, GetStaticProps } from 'next'
import { Button } from '@nextui-org/react'
import { Layout } from '../components/layouts/'
import { PokemonCard } from '../components/pokemon/'
import { IPokemonListResponse, ISmallPokemon } from '../interfaces/'
import { pokeApi } from '../api'
interface Props {
  pokemons: ISmallPokemon[]
}
const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <div>
      <Layout title="Blue Express" />
      {pokemons.map((pokemon) => (
        <>
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
          {/* <div key={pokemon.id}>
            <p>{pokemon.id}</p>
            <p>{pokemon.name}</p>
            <img src={pokemon.img} alt={pokemon.name} />
          </div> */}
        </>
      ))}

      <Button color="primary">Click me</Button>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await pokeApi.get<IPokemonListResponse>('/pokemon?limit=151')

  const pokemons: ISmallPokemon[] = data.results.map((poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      i + 1
    }.svg`,
  }))

  return {
    props: {
      title: 'Blue Express',
      pokemons,
    },
  }
}
export default HomePage
