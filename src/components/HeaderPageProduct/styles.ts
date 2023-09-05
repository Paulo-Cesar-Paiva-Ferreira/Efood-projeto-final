import { Link } from 'react-router-dom'

import styled from 'styled-components'

import bgImage from '../../assets/images/bg-header.png'
import { breakpoints, colors } from '../../styles'

export const Container = styled.div`
  background-image: url(${bgImage});
  padding: 40px 0 64px;
`

export const Content = styled.div`
  font-weight: 900;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }
`

export const LinkLogo = styled(Link)`
  text-decoration: none;
  margin: 0 auto;
  justify-content: center;
`
export const LinkHome = styled(Link)`
  text-decoration: none;
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 900;
  color: ${colors.darkPink};
  margin-right: 124px;

  @media (max-width: ${breakpoints.tablet}) {
    margin: 0 auto;
  }
`
export const CartButton = styled.a`
  cursor: pointer;
  font-size: 18px;
  font-weight: 900;
`
