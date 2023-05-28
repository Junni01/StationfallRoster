import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Button,
  Drawer,
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
import { createTheme, ThemeProvider } from "@mui/material/styles";

let loading: boolean = true;
let characterListSize: number;
let characterList: Character[];

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
      <Grid item xs={12} sx={{mb:2}}>

        <Typography variant="h4" sx={{textAlign: 'center'}}>
          {currentCharacter.name.toUpperCase()}
        </Typography>
      </Grid>

        <Grid item xs={6}>
          <Paper sx={{ml:1, mr: 1}}>

          <Typography sx={{textAlign: 'center'}}>
            Influence Limit: <b>{currentCharacter.influenceLimit}</b>
          </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper sx={{ml:1, mr: 1}}>

          <Typography sx={{textAlign: 'center'}}>
            Type: <b>{currentCharacter.characterType.name}</b>
          </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} display={'flex'} justifyContent={'center'} sx={{p: 2}}>
          {characterView === 0 ? (
            <img
              height={"150px"}
              width={"150px"}
              src={"./src/assets/characterIcons/" + currentCharacter.iconUrl}
            />
          ) : (
            <img
              height={"400px"}
              width={"auto"}
              src={"./src/assets/characterPictures/" + currentCharacter.iconUrl}
            />
          )}
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
      </>
    );
  }
};
