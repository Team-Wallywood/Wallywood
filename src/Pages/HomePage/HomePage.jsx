import { MainCards } from "../../Components/mainCards/mainCards";
import { Container } from "../../Components/Container/Container";
import { Banner } from "../../Components/Banner/Banner";

export const HomePage = () => {
  return (
    <Container>
      <Banner />
      <MainCards />
    </Container>
  );
};
