import styled from "styled-components";

const Wrapper = styled.section`
  border-radius: var(--border-radius);
  width: 100%;
  background: var(--background-secondary-color);
  padding: 3rem 2rem 4rem;

  aside.owner {
    float: right;
    background: var(--background-secondary-color);
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-2);
    padding: 18px;
    border: 2px solid var(--background-color);
    h4 {
      margin-bottom: 10px;
    }
    .owner-info {
      display: flex;
      flex-direction: column;
      gap: 10px;
      p {
        display: flex;
        gap: 10px;
        span {
          font-weight: 500;
          text-transform: capitalize;
        }
      }
    }
  }

  section#device-details {
    width: 50%;
    padding-left: 30px;
    height: 200px;
    .status {
      position: relative;
      bottom: 35px;
      float: left;
      right: 30px;
    }
    .info {
      float: left;
      margin-top: 10px;
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
  }
  section.sensor {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  @media (max-width: 992px) {
    padding: 2rem 1rem 4rem;
    display: flex;
    flex-direction: column;
    gap: 20px;
    section#device-details {
      height: auto;
      width: 100%;
    }
    section#device-details .status {
      bottom: 22px;
    }
    .form-row {
      width: 100%;
    }
  }
`;
export default Wrapper;
