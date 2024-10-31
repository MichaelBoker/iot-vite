import { TailSpin } from "react-loader-spinner";
import styled from "styled-components";

const Loader = () => {
  return (
    <Wrapper>
      <TailSpin
        visible={true}
        height="80"
        width="80"
        color="#00b0ff"
        radius="1"
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  inset: 0;
  margin: auto;
  width: 100px;
  height: 100px;
`;
export default Loader;
