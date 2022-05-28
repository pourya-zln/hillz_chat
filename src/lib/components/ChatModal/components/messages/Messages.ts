import styled from "styled-components"

export const CHMessages = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0 25px;
  max-height: 277px;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`
