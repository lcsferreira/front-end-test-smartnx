import {
  CarouselContainer,
  CarouselImage,
  CharacterStarshipsContainer,
} from "./style";
import { Card } from "antd";
import { imgApiUrl } from "../../../api/utils";
import useFetchStarships from "../../../hooks/useFetchStarships";

interface StarshipsCarouselProps {
  loading: boolean;
  starshipsUrls: string[];
}

const StarshipsCarousel = ({
  loading,
  starshipsUrls,
}: StarshipsCarouselProps) => {
  const { starships, loadingStarships } = useFetchStarships(starshipsUrls);

  return (
    <CharacterStarshipsContainer title="Naves que pilotou" loading={loading}>
      <CarouselContainer arrows autoplay dots>
        {starships.map((starship) => (
          <Card
            key={starship.name}
            title={starship.name}
            loading={loadingStarships}
            cover={
              <CarouselImage
                src={`${imgApiUrl}starships/${
                  starship.url.match(/\d+/)?.[0]
                }.jpg`}
                alt={starship.name}
                preview={false}
                onError={(e) => {
                  e.currentTarget.src = `${imgApiUrl}placeholder.jpg`;
                }}
              />
            }
          ></Card>
        ))}
      </CarouselContainer>
    </CharacterStarshipsContainer>
  );
};

export default StarshipsCarousel;
