import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.section`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 80px;
  row-gap: 64px;
  margin-bottom: 64px;
  padding-top: 80px;
`

export const ImageHeroContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const BannerModal = styled.div`
  display: flex;
  width: 1024px;
  margin: 0 auto;
  background-color: ${cores.rosaEscuro};
  color: ${cores.branca};
  position: relative;
  z-index: 1;

  p {
    margin-right: 32px;
  }

  img {
    width: 280px;
    height: 280px;
    margin: 32px;
  }
`
export const TitleCard = styled.h3`
  margin-top: 10px;
  margin-bottom: 16px;
`

export const HeaderBanner = styled.header`
  display: flex;
  justify-content: end;

  img {
    width: 16px;
    height: 16px;
    margin: 8px 8px 0 0;
  }
`
