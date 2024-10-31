import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  background: var(--background-secondary-color);
  flex-direction: column;
  border-radius: 17px;
  box-shadow: var(--shadow-2);
  padding: 13px;
  flex: 0 1 20%;
  header {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid var(--grey-100);
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 15px;
  }
  strong {
    font-size: xx-large;
  }

  @media (max-width: 992px) {
    flex: 1 1 45%;
    &.notifications{
      flex: 1 1 100%;
    }
  }
`;

export default Wrapper;
