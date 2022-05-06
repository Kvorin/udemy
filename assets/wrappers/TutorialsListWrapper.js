import styled from "styled-components";

const Wrapper = styled.main`
  display: grid;
  .card_image {
    max-width: 100px;
  }
  .cards {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
  .card {
    background-color: var(--grey-500);
  }
`;

export default Wrapper;
