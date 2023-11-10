import { NextPage } from 'next'
import { Button } from '@nextui-org/react'
import { Layout } from '../components/layouts/'

const HomePage: NextPage = () => {
  return (
    <div>
      <Layout title="Blue Express" />
      <Button color="primary">Click me</Button>
    </div>
  )
}

export default HomePage
