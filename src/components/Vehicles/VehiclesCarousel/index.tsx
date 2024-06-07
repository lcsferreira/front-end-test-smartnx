import { Card, Image } from "antd";
import {
  CarouselContainer,
  CarouselImage,
  CharacterVehiclesContainer,
} from "./style";
import { imgApiUrl } from "../../../api/utils";
import useFetchVehicles from "../../../hooks/useFetchVehicles";

interface VehiclesCarouselProps {
  loading: boolean;
  vehiclesUrls: string[];
}

const VehiclesCarousel = ({ loading, vehiclesUrls }: VehiclesCarouselProps) => {
  const { vehicles, loadingVehicles } = useFetchVehicles(vehiclesUrls);

  return (
    <CharacterVehiclesContainer title="Veículos que pilotou" loading={loading}>
      <CarouselContainer arrows autoplay dots>
        {vehicles.map((vehicle) => (
          <Card
            key={vehicle.name}
            title={vehicle.name}
            loading={loadingVehicles}
            cover={
              <CarouselImage
                src={`${imgApiUrl}vehicles/${
                  vehicle.url.match(/\d+/)?.[0]
                }.jpg`}
                onError={(e) => {
                  e.currentTarget.src = `${imgApiUrl}placeholder.jpg`;
                }}
                alt={vehicle.name}
                preview={false}
              />
            }
          ></Card>
        ))}
      </CarouselContainer>
    </CharacterVehiclesContainer>
  );
};

export default VehiclesCarousel;
