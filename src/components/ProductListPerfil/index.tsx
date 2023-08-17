import Restaurante from '../../models/Restaurantes'
import {
  BannerModal,
  Container,
  HeaderBanner,
  ImageHeroContainer,
  List,
  TitleCard
} from './styles'
import { ProductPerfil } from '../Product'

import imagem from '../../assets/images/pizzza.png'
import fechar from '../../assets/images/fechar_icon.png'

type Props = {
  restaurante: Restaurante[]
}

const ProductListPerfil = ({ restaurante }: Props) => (
  <>
    <Container>
      <List>
        {restaurante.map((restaurante) => (
          <ProductPerfil
            key={restaurante.id}
            description={restaurante.description}
            image={restaurante.image}
            title={restaurante.title}
            category={[]}
            note={''}
          />
        ))}
      </List>
    </Container>
    <ImageHeroContainer>
      <BannerModal>
        <img src={imagem} />
        <div>
          <HeaderBanner>
            <img className="fecharbuttom" src={fechar} />
          </HeaderBanner>
          <TitleCard>Retaurante</TitleCard>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            omnis, ducimus porro eaque nulla eos perferendis natus molestiae
            rerum accusamus iure dignissimos sunt voluptas vitae in debitis
            maxime saepe impedit!
          </p>
          <p>lorrraa</p>
          <button>clique aqui</button>
        </div>
      </BannerModal>
      <div className="overlay"> </div>
    </ImageHeroContainer>
  </>
)

export default ProductListPerfil
