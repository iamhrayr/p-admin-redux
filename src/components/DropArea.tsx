import * as React from "react";
import styled from "styled-components";

const WrapperDiv = styled.div`
  padding: 20px;
  border: dashed 1px #5d8ecc;
  border-radius: 4px;
  background: #fafafa;
  text-align: center;
  p {
    margin-bottom: 0;
  }
`;

type Props = {
  getInputProps: () => any,
  getRootProps: () => any,
  text: string,
}

const DropArea: React.FC<Props> =  ({ getInputProps, getRootProps, text }) => {
  return (
    <WrapperDiv {...getRootProps()}>
      <input {...getInputProps()} />
      <p>{text}</p>
    </WrapperDiv>
  );
};

export default DropArea;