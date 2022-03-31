import * as S from './styles'

const LayoutPublic: React.FC = ({ children }) => {
  return (
    <S.Wrapper>
      <S.Content>{children}</S.Content>
    </S.Wrapper>
  )
}

export { LayoutPublic }
