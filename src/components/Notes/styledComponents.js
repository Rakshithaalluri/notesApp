// Style your elements here
import styled from 'styled-components'

export const NotesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
`
export const NotesDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const NotesHeading = styled.h1`
  font-family: 'Bree Serif';
  font-size: 30px;
  font-weight: 500;
  color: #4c63b6;
  margin-top: 50px;
`

export const NotesAddingContainer = styled.form`
  width: 60%;
  box-shadow: 1px 1px 5px 1px #475569;
  border-radius: 3px;
  height: 170px;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`

export const InputTitleElement = styled.input`
  outline: none;
  border: none;
  color: #475569;
  font-family: 'Roboto';
  font-size: 12px;
  padding-left: 20px;
  margin-top: 18px;
`

export const InputTextAreaElement = styled.textarea`
  outline: none;
  border: none;
  color: #475569;
  font-family: 'Roboto';
  font-size: 12px;
  padding-left: 20px;
  margin-top: 25px;
  width: 50%;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  background-color: transparent;
  border: none;
  outline: none;
  margin-top: 30px;
  margin-right: 10px;
`

export const AddButton = styled.button`
  background-color: #4c63b6;
  color: #ffffff;
  height: 30px;
  width: 70px;
  border-radius: 5px;
  font-family: 'roboto';
  font-size: 10px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const EmptyImage = styled.img`
  margin-top: 50px;
  height: 130px;
  width: 130px;
`

export const EmptyHeading = styled.h1`
  color: #475569;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
`

export const EmptyText = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 400;
`

export const NotesItemsContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  margin-top: 30px;
  margin-left: 230px;
`
