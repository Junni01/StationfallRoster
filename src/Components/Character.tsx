import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Button,
  Container,
  Dialog,
  Grid,
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
import AddBoxIcon from '@mui/icons-material/AddBox';

let loading: boolean = true;
let characterListSize: number;
let activeCharacterListSize: number;
let characterList: Character[];

export const CharacterView = () => {
  const [characterView, setCharacterView] = useState(0);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [activeCharacters, setActiveCharacters] = useState<Character[]>([]);
  const [currentCharacter, setCurrentCharacter] = useState<Character>(
    activeCharacters[0]
  );
  const [activeCharacterListSize, setActiveCharacterListSize] =
    useState<number>(0);
  const [characterIndex, setCharacterIndex] = useState(0);
  const [selected, setSelected] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    characterList = ReadCharacterData();
    setCharacters([...characterList]);
    setActiveCharacters([...characterList]);
    setCurrentCharacter(characterList[0]);
    characterListSize = characterList.length;
    setActiveCharacterListSize(characterList.length);
    console.log(characterList);
    loading = false;
  }, []);

  const openDialog = () => {
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
  };

  const modifyCharacterList = (charId: number) => {
    const checkedCharacterIndex = characters.findIndex((c) => c.id === charId);
    const checkedCharacter = characters[checkedCharacterIndex];
    const activeList = [...activeCharacters];
    if (checkedCharacter.active) {
      if (activeCharacterListSize === 1) {
        return;
      }
      characters[checkedCharacterIndex].active = false;
      const removeCharIndex = activeList.findIndex((c) => c.id === charId);
      activeList.splice(removeCharIndex, 1);
    } else {
      characters[checkedCharacterIndex].active = true;
      activeList.push(checkedCharacter);
    }
    activeList.sort((a, b) => a.id - b.id);
    const newLength = activeList.length;
    setActiveCharacterListSize(newLength);
    setActiveCharacters([...activeList]);
    setCharacterIndex(0);
    setCurrentCharacter(activeList[0]);
  };

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

    if (direction === 1 && characterIndex === activeCharacterListSize - 1) {
      setCurrentCharacter(activeCharacters[0]);
      setCharacterIndex(0);
      console.log(
        "Character changed, character is now " + activeCharacters[0].name
      );
      return;
    }

    if (direction === -1 && characterIndex === 0) {
      setCurrentCharacter(activeCharacters[activeCharacterListSize - 1]);
      setCharacterIndex(activeCharacterListSize - 1);
      console.log(
        "Character changed, character is now " +
          activeCharacters[characterListSize - 1].name
      );
      return;
    }
    const next = characterIndex + direction;
    setCharacterIndex(next);
    setCurrentCharacter(activeCharacters[next]);
    console.log(
      "Character changed, character is now " + activeCharacters[next].name
    );
  }

  if (loading) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
      <Grid item xs={12} justifyContent='left' display={'flex'}>
        <Button variant='contained' size='small' onClick={openDialog} sx={{mb:2}}>[]</ Button>
      </Grid>
        <Grid item xs={12} sx={{ mb: 2, justifyContent: "center" }}>
          <Typography variant="h4" sx={{ textAlign: "center" }}>
            {currentCharacter.name.toUpperCase()}
          </Typography>
        </Grid>

        <Grid item xs={6}>
          <Paper sx={{ ml: 1, mr: 1 }}>
            <Typography sx={{ textAlign: "center" }}>
              Influence Limit: <b>{currentCharacter.influenceLimit}</b>
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper sx={{ ml: 1, mr: 1 }}>
            <Typography sx={{ textAlign: "center" }}>
              Type: <b>{currentCharacter.characterType.name}</b>
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}
          justifyContent={"center"}
          sx={{ p: 2, height: '400px' }}
          display={'flex'}
        >
          {characterView === 1 ? (
            <img
            style={{objectFit: 'contain'}}
            width={'100%'}
            height={'auto'}
            src={"/kompromatIcons/" + currentCharacter.iconUrl}
            />
          ) : (
            <img
              src={"/characterPicturesBig/" + currentCharacter.iconUrl}
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
        <Paper
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0, pb: 3 }}
          elevation={3}
        >
          <BottomNavigation 
            onChange={(event, newValue) => {
              if (newValue === 0) {
                changeCharacterView();
              } else {
                changeCharacter(newValue);
              }
            }}
          >
            <BottomNavigationAction
              value={-1}
              icon={<ArrowBackOutlinedIcon fontSize='large' />}
            />
            <BottomNavigationAction
              value={0}
              icon={<FlipCameraAndroidOutlinedIcon fontSize='large' />}
            />
            <BottomNavigationAction
              value={1}
              icon={<ArrowForwardOutlinedIcon fontSize='large' />}
            />
          </BottomNavigation>
        </Paper>

        <Dialog fullScreen open={dialogOpen}>
          <Grid container justifyContent={"center"} sx={{mt: 2}}>
            {characterList.map((c, index) => {
              return (
                <Grid item xs={6} display="flex" justifyContent={"center"}>
                  <Button
                    variant={c.active ? "contained" : "outlined"}
                    sx={{ minWidth: 150, mb: 2 }}
                    onClick={() => {
                      modifyCharacterList(c.id);
                    }}
                    color="primary"
                  >
                    {c.name}
                  </Button>
                </Grid>
              );
            })}

            <Button variant="contained" color='secondary' onClick={closeDialog} sx={{ml: 1, mr: 1, mb:2}} fullWidth>
              Close
            </Button>
          </Grid>
        </Dialog>

        {/*         <Box
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
        </Box> */}
      </>
    );
  }
};
