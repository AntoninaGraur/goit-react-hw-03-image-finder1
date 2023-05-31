import styled from "@emotion/styled";


export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1200;
`;
export const ModalContainer = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
`
export const ModalImage = styled.img`
  max-width: 80%;
  max-height: 80%;
`;