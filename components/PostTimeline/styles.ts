import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 100px 0;
  background: gray;
`

export const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 100px;
  color: white;
  font-size: 2rem;
`

export const Bubble = styled.li`
  height: 260px;
  width: 260px;
  background: blue;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`