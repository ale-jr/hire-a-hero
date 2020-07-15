import styled from 'styled-components'

const Progress = styled.progress`
  appearance: none;
  color: ${({ theme }) => theme.colors.secondary.main};
  background-color: #d3d6d9;
  &[value] {
    height: 20px;
    width: 100%;
    border-radius: 0;
  }
  &[value]::-webkit-progress-value {
    background: ${({ theme }) => theme.colors.secondary.main};
  }
  &[value]::-moz-progress-bar {
    background: ${({ theme }) => theme.colors.secondary.main};
  }
  &[value]::-webkit-progress-bar {
    background: #d3d6d9;
  }
`

export default Progress
