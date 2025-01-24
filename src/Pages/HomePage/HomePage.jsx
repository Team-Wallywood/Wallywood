import { MainCards } from "../../Components/mainCards/mainCards";
import Banner from "../../Assets/Images/curtain.jpg"
import { Container } from "../../Components/Container/Container";

export const HomePage = () => {
  return (
    <Container>
      <img src={Banner} alt="Banner" width={1400} />
      <MainCards />
    </Container>
  );
};
