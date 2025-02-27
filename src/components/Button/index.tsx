import { ButtonContainer, ButtonLink } from './styles'

type Props = {
  type: 'button' | 'link' | 'submit'
  title?: string
  to?: string
  onClick?: () => void
  children?: string
  disabled?: boolean
}

const Button = ({ type, title, to, onClick, children, disabled }: Props) => {
  if (type === 'button' || type === 'submit') {
    return (
      <ButtonContainer
        type={type}
        title={title}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </ButtonContainer>
    );
  }

  // Se já estamos dentro de um <Link>, apenas retorna um <span> estilizado
  if (!to) {
    return <span>{children}</span>;
  }

  return (
    <ButtonLink to={to} title={title} onClick={onClick}>
      {children}
    </ButtonLink>
  );
};

export default Button