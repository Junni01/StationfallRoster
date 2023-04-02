import {
  BottomNavigation,
  BottomNavigationAction,
  Button,
  Grid,
  Paper,
} from "@mui/material";
import { useEffect, useState } from "react";
import { ReadCharacterData } from "../data/API";
import { Character } from "../types/CharacterTypes";
import { CharacterAbilityView } from "./AbilityView";
import { CharacterAgendaView } from "./AgendaView";

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
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {currentCharacter.name}
        </Grid>
        <Grid item xs={12}>
          <img
            src={"./src/assets/characterIcons/" + currentCharacter.iconUrl}
          />
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
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
          elevation={3}
        >
          <Button onClick={() => changeCharacter(-1)}>
            Previous
          </Button>

          <Button onClick={() => changeCharacterView()}>Flip</Button>

          <Button onClick={() => changeCharacter(1)}>Next</Button>
        </Paper>
      </Grid>
    );
  }
};
