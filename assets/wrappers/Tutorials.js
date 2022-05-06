import styled from "styled-components";
const Wrapper = styled.main`
  margin: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 16rem));
  gap: 2rem;
  justify-content: center;

  .card {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: transform 200ms ease-in;
  }
  .card-img {
    width: 100%;
    object-fit: cover;
  }
  .card-title {
    padding: 0.5rem;
  }
  .card_desc {
    padding: 0 1rem;
  }
`;

export default Wrapper;
