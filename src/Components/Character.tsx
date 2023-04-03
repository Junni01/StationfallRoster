import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Button,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { ReadCharacterData } from "../data/API";
import { Character } from "../types/CharacterTypes";
import { CharacterAbilityView } from "./AbilityView";
import { CharacterAgendaView } from "./AgendaView";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import FlipCameraAndroidOutlinedIcon from "@mui/icons-material/FlipCameraAndroidOutlined";
import { createTheme, ThemeProvider } from '@mui/material/styles';

let loading: boolean = true;
let characterListSize: number;
let characterList: Character[];


const theme = createTheme();

theme.typography.h3 = {
  fontSize: '1.8rem',
  '@media (min-width:300px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
};

export const CharacterView = () => {
  const [characterView, setCharacterView] = useState(0);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [currentCharacter, setCharacter] = useState<Character>(characters[0]);
  const [characterIndex, setCharacterIndex] = useState(0);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    characterList = ReadCharacterData();
    setCharacters(characterList);
    setCharacter(characterList[0]);
    characterListSize = characterList.length;
    console.log(characterList);
    loading = false;
  }, []);

  function changeCharacterView() {
    if (characterView == 0) {
      setCharacterView(1);
    } else {
      setCharacterView(0);
    }
  }

  function changeCharacter(direction: number) {
    console.log(direction);
    console.log(characterIndex);
    console.log(characterListSize);

    if (direction === 1 && characterIndex === characterListSize - 1) {
      setCharacter(characters[0] ?? characterList[0]);
      setCharacterIndex(0);
      console.log("Character changed, character is now " + characters[0].name);
      return;
    }

    if (direction === -1 && characterIndex === 0) {
      setCharacter(characters[characterListSize - 1]);
      setCharacterIndex(characterListSize - 1);
      console.log(
        "Character changed, character is now " +
          characters[characterListSize - 1].name
      );
      return;
    }

    const next = characterIndex + direction;

    setCharacterIndex(next);
    setCharacter(characterList[next]);
    console.log("Character changed, character is now " + characters[next].name);
  }

  if (loading) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <Grid item xs={12}>
          <ThemeProvider theme={theme}>
          <Typography variant="h3">{currentCharacter.name.toUpperCase()}</Typography>
          </ThemeProvider>
        </Grid>
        <Grid item xs={4}>
          <Grid item xs={12}>
            <Typography>
              IF: {currentCharacter.influenceLimit}
              </Typography> 
          </Grid>
          <Grid item xs={12}>
            <Typography>
            Type: {currentCharacter.characterType.name}
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={4}>
   
          <img
          height={"50px"}
          width={"50px"} 
            src={"./src/assets/characterIcons/" + currentCharacter.iconUrl}
          />

        </Grid>
        <Grid item xs={4}>
          <Button>In Play</Button>
        </Grid>

        {characterView == 0 ? (
          <CharacterAbilityView
            character={currentCharacter}
          ></CharacterAbilityView>
        ) : (
          <CharacterAgendaView
            character={currentCharacter}
          ></CharacterAgendaView>
        )}

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            bgcolor: "background.paper",
          }}
        >
          <Box>
            <IconButton
              sx={{ fontSize: "20px" }}
              onClick={() => changeCharacter(-1)}
            >
              <ArrowBackOutlinedIcon></ArrowBackOutlinedIcon>
            </IconButton>
          </Box>

          <Box>
            <IconButton
              sx={{ fontSize: "20px" }}
              onClick={() => changeCharacterView()}
            >
              <FlipCameraAndroidOutlinedIcon></FlipCameraAndroidOutlinedIcon>
            </IconButton>
          </Box>

          <Box>
            <IconButton
              sx={{ fontSize: "20px" }}
              onClick={() => changeCharacter(1)}
            >
              <ArrowForwardOutlinedIcon></ArrowForwardOutlinedIcon>
            </IconButton>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bgcolor: "background.paper",
          }}
        >
          <Box>
            <Button sx={{ fontSize: "10px" }}>In play only</Button>
          </Box>
        </Box>
      </>
    );
  }
};
