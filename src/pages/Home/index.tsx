import Col from "antd/lib/col";
import Row from "antd/lib/row";
import CategoryCard from "../../components/CategoryCard";
import {
  Container,
  HomeContent,
  HomeFooter,
  HomeTitle,
  SpanTitle,
} from "./style";

export const Home = () => {
  return (
    <Container>
      <HomeTitle>
        Bem-vindo ao Guia Visual de <SpanTitle>Star Wars</SpanTitle>
      </HomeTitle>
      <HomeContent>
        <Row gutter={[16, 16]} wrap={true}>
          <Col span={6} xs={24} sm={12} md={6} lg={6} xl={6}>
            <CategoryCard
              title="Personagens"
              link="/characters"
              cover_img="https://images.unsplash.com/photo-1547700055-b61cacebece9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </Col>
          <Col span={6} xs={24} sm={12} md={6} lg={6} xl={6}>
            <CategoryCard
              title="Filmes"
              link="/movies"
              cover_img="https://images.unsplash.com/photo-1605270488815-93566ee46a1f?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </Col>
          <Col span={6} xs={24} sm={12} md={6} lg={6} xl={6}>
            <CategoryCard
              title="Planetas"
              link="/planets"
              cover_img="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </Col>
          <Col span={6} xs={24} sm={12} md={6} lg={6} xl={6}>
            <CategoryCard
              title="Naves"
              link="/starships"
              cover_img="https://images.unsplash.com/photo-1590562177087-ca6af9bb82ea?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </Col>
        </Row>
      </HomeContent>
      <HomeFooter>
        Desenvolvido por Lucas Ferreira ©2024. Star wars e todos os personagens
        são de autoria da Disney e Lucasfilm. As imagens foram recolhidas
        livremente da Wookiepedia e Unsplash.
      </HomeFooter>
    </Container>
  );
};
