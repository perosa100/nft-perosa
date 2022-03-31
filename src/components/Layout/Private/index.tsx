import * as S from './styles'

const LayoutPrivate: React.FC = ({ children }) => {
  return (
    <S.Wrapper>
      <S.Content>{children}</S.Content>
    </S.Wrapper>
  )
}

export { LayoutPrivate }
