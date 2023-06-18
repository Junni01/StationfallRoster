import { Grid } from '@mui/material'
import './App.css'
import { CharacterView } from './Components/Character'

function App() {

  return (
    <Grid container maxWidth="sm" paddingBottom={7} justifyContent={'center'}>
      <CharacterView></CharacterView>
    </Grid>
  )
}

export default App
