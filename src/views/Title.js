import styled from 'styled-components'

export const Small = styled.h2`
  font-weight: bold;
  font-size: 1rem;
  text-transform: uppercase;
  margin-bottom: 20px;
  text-align: center;
`

export const Middle = Small.extend`
  font-size: 1.6rem;
  margin-top:0;
`

export const Large = styled.h1`
  font-size: 2rem;
`