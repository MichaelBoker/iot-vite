import styled from "styled-components";

const Wrapper = styled.section`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: flex-start;
  }
  .page {
    min-height: calc(89vh - var(--nav-height));
    display: grid;
    align-items: start;
    padding-top: var(--nav-height);
  }
  h1 {
    font-weight: 700;
    span {
      color: var(--primary-500);
    }
    margin-bottom: 1.5rem;
  }
  p {
    line-height: 2;
    color: var(--text-secondary-color);
    margin-bottom: 1.5rem;
    max-width: 42em;
  }
  .info strong {
      display: block;
      color: lightskyblue;
  }
  .register-link {
    margin-right: 1rem;
  }
  .main-img {
    display: none;
  }
  .btn {
    padding: 0.75rem 1rem;
  }
  div#buttons-wrapper {
    display: flex;
    justify-content: space-between;
    width: fit-content;
    gap: 15px;
  }
  div#logo-container {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
}
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 400px;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }

  @media (max-width: 992px) {
    div#logo-container {
      display: flex;
      justify-content: center;
    }

    .page{
      padding-top: 20px;
      display: flex;
    flex-direction: column-reverse;
    }

    div#buttons-wrapper {
      padding-bottom: 25px;
  }
  }
`;

export default Wrapper;