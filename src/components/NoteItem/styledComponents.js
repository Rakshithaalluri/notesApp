// Style your elements here
import styled from 'styled-components'

export const NoteItemCard = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  height: 120px;
  width: 170px;
  border: 1px #aab8c8 solid;
  border-radius: 2px;
  font-family: 'Roboto';
  padding-left: 10px;
  margin: 12px;
`

export const NoteItemTitle = styled.h1`
  color: #1e293b;
  font-size: 14px;
  font-weight: 400px;
  margin-bottom: 0px;
  margin-top: 20px;
`

export const NoteItemDescription = styled.p`
  color: #334155;
  font-size: 10px;
  font-weight: 300px;
`
