import styled from "styled-components";

const Wrapper = styled.section`
  .dashboard {
    display: flex;
  }

  .dashboard-body{
    flex:auto;
  }

  .dashboard-content {
    width: 90%;
    margin: 0 auto;
    padding: 2rem 0;
  }
  
  @media (max-width: 992px) {
    .dashboard {
        flex-direction: column;
    }
  }
`;

export default Wrapper;
