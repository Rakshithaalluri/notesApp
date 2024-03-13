// Write your code here

import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import NoteItem from '../NoteItem'

import {
  NotesContainer,
  NotesDetailsContainer,
  NotesHeading,
  NotesAddingContainer,
  InputTitleElement,
  InputTextAreaElement,
  AddButton,
  ButtonContainer,
  EmptyImage,
  EmptyHeading,
  EmptyText,
  NotesItemsContainer,
} from './styledComponents'

const Notes = () => {
  const [currentTitle, setCurrentTitle] = useState('')
  const [currentText, setCurrentText] = useState('')

  const [notesList, setNotesList] = useState([])

  const onAddNote = event => {
    event.preventDefault()

    const newNote = {
      id: uuidv4(),
      currentTitle,
      currentText,
    }
    setNotesList(prevNotesList => [...prevNotesList, newNote])
    setCurrentTitle('')
    setCurrentText('')
  }

  const handleTitleChange = event => {
    setCurrentTitle(event.target.value)
  }

  const handleTextChange = event => {
    setCurrentText(event.target.value)
  }

  return (
    <NotesContainer>
      <NotesDetailsContainer>
        <NotesHeading> Notes </NotesHeading>
        <NotesAddingContainer onSubmit={onAddNote}>
          <InputTitleElement
            type="text"
            placeholder="Title"
            value={currentTitle}
            onChange={handleTitleChange}
          />
          <InputTextAreaElement
            type="text"
            placeholder="Take a Note..."
            value={currentText}
            onChange={handleTextChange}
          />
          <ButtonContainer>
            <AddButton type="submit"> Add </AddButton>
          </ButtonContainer>
        </NotesAddingContainer>
        {notesList.length === 0 ? (
          <>
            <EmptyImage
              src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
              alt="notes empty"
            />
            <EmptyHeading> No Notes Yet </EmptyHeading>
            <EmptyText> Notes you add will appear here </EmptyText>
          </>
        ) : (
          <NotesItemsContainer>
            {notesList.map(eachNote => (
              <NoteItem key={eachNote.id} noteDetails={eachNote} />
            ))}
          </NotesItemsContainer>
        )}
      </NotesDetailsContainer>
    </NotesContainer>
  )
}
export default Notes
