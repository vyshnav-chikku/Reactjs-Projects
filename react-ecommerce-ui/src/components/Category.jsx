import styled from "styled-components";
import { categories } from "../data";
import Categoryitem from "./Categoryitem";

const Container = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  overflow: hidden;
  padding: 10px;
  @media (max-width: 414px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;

const Category = () => {
  return (
    <Container>
      {categories.map((item) => (
        <Categoryitem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Category;
