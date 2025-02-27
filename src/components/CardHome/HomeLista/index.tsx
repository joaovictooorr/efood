import { Link } from 'react-router-dom';
import Button from '../../Button'
import * as S from './styles'

const estrela = require('../../../assets/imagens/estrela.png')

type Props = {
  titulo: string
  avaliacao: number
  image: string
  tipo: string
  descricao: string
  id: number
  destacado: boolean
}

const HomeLista = ({
  descricao,
  image,
  tipo,
  titulo,
  avaliacao,
  destacado,
  id
}: Props) => (
  <>
    <S.Card to={`/restaurantes/${id}`}>
      <img src={image} alt={titulo} />
      <S.Infos>
        {destacado === true ? (
          <>
            <S.TagContainer>Destaque do Dia</S.TagContainer>
            <S.TagContainer>{tipo}</S.TagContainer>
          </>
        ) : (
          <S.TagContainer>{tipo}</S.TagContainer>
        )}
      </S.Infos>
      <S.ContainerTitulo>
        <S.Title>{titulo}</S.Title>
        <S.Nota>
          {avaliacao}
          <img src={estrela} alt="" />
        </S.Nota>
      </S.ContainerTitulo>
      <S.Descricao>{descricao}</S.Descricao>
      <Link to={`/restaurantes/${id}`}>
        <Button type="button">Saiba mais</Button>
      </Link>
    </S.Card>
  </>
)

export default HomeLista