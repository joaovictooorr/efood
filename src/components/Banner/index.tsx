import * as S from './styles'

const fundoImg = require('../../assets/imagens/fundo.svg')

const BannerHome = () => (
    <>
      <S.BannerImage style={{ backgroundImage: `url(${fundoImg})` }}>
        <div className="container">
          <S.Title>
            Viva experiências gastronômicas no conforto da sua casa
          </S.Title>
        </div>
      </S.BannerImage>
    </>
  )
  export default BannerHome