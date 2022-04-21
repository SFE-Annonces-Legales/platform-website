import type { GetStaticProps, NextPage } from 'next'
import axios from 'axios'

const Home: NextPage<{ text: string }> = ({ text }) => {
  return (
    <h1 className='text-7xl text-center font-bold text-red-900'>{ text }</h1>
  )
}


export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get('http://localhost:8000/api/hello');
  return {
    props: {
      text: res.data.text
    }
  }
}

export default Home
