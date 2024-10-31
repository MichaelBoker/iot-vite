import styled from "styled-components";

const Wrapper = styled.article`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  padding: 20px 10px;
  border: 1px solid #ccc;
  border-radius: 17px;
  .content {
    display: flex;
    flex-direction: column;
    gap: 7px;
    span {
      font-size: 13px;
    }
  }
  svg {
    font-size: xx-large;
  }
`;

export default Wrapper;
