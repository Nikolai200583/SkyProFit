import { AppRoutes } from "../../routes";
import styled from "styled-components";

const StyledWrapper = styled.div` 
  width: 100%;
  min-height: 100%;
  overflow: hidden;
 
`;

export function App() {
  
  return (
    <StyledWrapper>
      <AppRoutes />
    </StyledWrapper>
  );
}