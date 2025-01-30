import * as S from './styles'


const footerImagem = require('../assets/imagens/footer.png')
const logo = require('../assets/imagens/logoefood.png')
const facebook = require('../assets/imagens/facebook.png')
const x = require('../assets/imagens/x.png')
const instagram = require('../assets/imagens/instagram.png')


const Footer = () => (
  <S.Container style={{ background: `url(${footerImagem})` }}>
    <div className="container">
      <S.SectionLogo>
        <img src={logo} alt="Efood" />
      </S.SectionLogo>
      <S.SectionSocial>
        <S.Links>
          <S.Link>
            <img src={facebook} alt="" />
          </S.Link>
          <S.Link>
            <img src={x} alt="" />
          </S.Link>
          <S.Link>
            <img src={instagram} alt="" />
          </S.Link>
        </S.Links>
      </S.SectionSocial>
      <S.SectionDescription>
        <S.Description>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </S.Description>
      </S.SectionDescription>
    </div>
  </S.Container>
)

export default Footer