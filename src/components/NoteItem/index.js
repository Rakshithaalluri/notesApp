// Write your code here
import {
  NoteItemCard,
  NoteItemTitle,
  NoteItemDescription,
} from './styledComponents'

const NoteItem = props => {
  const {noteDetails} = props
  const {currentTitle, currentText} = noteDetails

  return (
    <NoteItemCard>
      <NoteItemTitle> {currentTitle} </NoteItemTitle>
      <NoteItemDescription> {currentText} </NoteItemDescription>
    </NoteItemCard>
  )
}

export default NoteItem
