import styled from "styled-components";

const Wrapper = styled.section`
  height: 6rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: end;
  flex-wrap: wrap;
  gap: 1rem;
  .btn-container {
    background: var(--background-secondary-color);
    border-radius: var(--border-radius);
    display: flex;
  }
  .page-btn {
    background: transparent;
    border-color: transparent;
    width: 50px;
    height: 40px;
    font-weight: 700;
    font-size: 1.25rem;
    color: var(--primary-500);
    border-radius: var(--border-radius);
    cursor:pointer;
  }
  .active{
    background:var(--primary-500);
        color: var(--white);

  }
.dots{
  display:grid;
  place-items:center;
  cursor:text;
}
button.disabled{
  cursor: not-allowed;
    background: var(--grey-400);
}
`;

export default Wrapper