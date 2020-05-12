import styled from 'styled-components'

export const LoaderWrapper = styled.div`
  width: 100px;
  height: 100px;
  margin: 0 auto;
  margin-top: 15%;
  position: relative;
`

export const LoaderSpinner = styled.div`
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`
