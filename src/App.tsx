import { Grid } from '@mui/material'
import './App.css'
import { CharacterView } from './Components/Character'

function App() {

  return (
    <Grid container maxWidth="sm">
      <CharacterView></CharacterView>
    </Grid>
  )
}

export default App
