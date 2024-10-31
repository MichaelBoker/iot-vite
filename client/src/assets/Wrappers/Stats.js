import styled from 'styled-components';

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    gap: 40px;
    section#stats_items {
    display: flex;
    align-items: center;
    justify-content: space-around;
}
section#charts {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
}
canvas {
    max-height: 500px;
}

.online{
  color: black !important;
  padding-top: 0 !important;
  }
  .offline{
    color: black !important;
  padding-top: 0 !important;
  }

@media (max-width: 992px) {
    section#stats_items {
    flex-wrap: wrap;
    gap: 10px;
}
}
`;

export default Wrapper;