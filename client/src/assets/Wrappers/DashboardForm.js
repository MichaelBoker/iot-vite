import styled from "styled-components";

const Wrapper = styled.section`
  border-radius: var(--border-radius);
  width: 100%;
  background: var(--background-secondary-color);
  padding: 2rem;
  .form-title {
    margin-bottom: 1.5rem;
    width: 100%;
  }
  .form {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    max-width: 100%;
    width: 100%;
  }
  .form-row {
    margin-bottom: 0;
  }
  .form-center {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem 2rem;
    &.device {
      margin-bottom: 3rem;
    }
  }
  
  .form-btn {
    align-self: end;
    margin-top: 3rem;
    display: grid;
    place-items: center;
  }

  section#searchedValues {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    margin-top: 15px;
  }

  .searchVal {
    background: var(--primary-200);
    color: var(--primary-500);
    cursor: pointer;
  }

  .searchVal:hover {
    background: var(--primary-400);
    color: white;
  }

  @media (max-width: 992px) {
    .form-center {
      gap: 1rem;
      justify-content: center;
    }
    .form-title {
      text-align: center;
    }
    .form-row{
      width: 100%;
    }
    section.form-center.device {
        flex-direction: column;
    }
  }
`;

export default Wrapper;
