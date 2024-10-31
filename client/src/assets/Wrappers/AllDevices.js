import styled from 'styled-components';

const Wrapper = styled.section`
  h2 {
    text-transform: none;
  }
  h5 {
    font-weight: 700;
    margin-bottom: 1.5rem;
    margin-top: 1.5rem;
  }
  .devices {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem 1rem;
  }

  
  @media (min-width: 992px) {
    .devices {
      grid-template-columns: 1fr 1fr 1fr;
      gap: 2rem;
    }
  }
`;
export default Wrapper;