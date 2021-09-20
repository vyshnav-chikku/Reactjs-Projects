import styled from "styled-components";
import { popularProducts } from "../data";
import Productitem from "./Productitem";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 30px 0 0;
`;

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Productitem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
