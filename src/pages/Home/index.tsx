import HomeLista from '../../components/CardHome/Home'
import BannerHome from '../../components/Banner'

import { useGetHomeQuery } from '../../services/api'

const Home = () => {
  const { data: home, isLoading } = useGetHomeQuery()

  return (
    <>
      <BannerHome />
      <HomeLista restaurantes={home} isLoading={isLoading} />
    </>
  )
}

export default Home
