import { useState } from "react";
import { ReadCharacterData } from "../data/API";
import { Character } from "../types/CharacterTypes";
import { CharacterAbilityView } from "./AbilityView";
import { CharacterAgendaView } from "./AgendaView";

export const CharacterView = () => {
  

  const characterList: Character[] = ReadCharacterData();
  const characterListSize = characterList.length;
  const [characterView, setCharacterView] = useState(0);
  const [characters, setCharacters] = useState(characterList);
  const [currentCharacter, setCharacter] = useState(characters[0]);
  const [characterIndex, setCharacterIndex] = useState(0);

  function changeCharacterView() {
    if(characterView == 0) {
      setCharacterView(1)
    } else {
      setCharacterView(0)
    };
  }

  function changeCharacter(direction: number) {
    if (direction === 1 && characterIndex === characterListSize - 1) {
      setCharacter(characters[0]);
      setCharacterIndex(0);
      console.log("Character changed, character is now " + characters[0].name)
      return;
    }

    if (direction === -1 && characterIndex === 0) {
      setCharacter(characters[characterListSize - 1]);
      setCharacterIndex(characterListSize - 1);
      console.log("Character changed, character is now " + characters[characterListSize - 1].name)
      return;
    }

    const next = characterIndex + direction;

    setCharacterIndex(next);
    setCharacter(characterList[next]);
    console.log("Character changed, character is now " + characters[next].name)
  }



  return (
    <div>
      {characterView == 0 ? <CharacterAbilityView character={currentCharacter}></CharacterAbilityView> : <CharacterAgendaView character={currentCharacter}></CharacterAgendaView>}
      <button onClick={() => changeCharacter(-1)}>Previous Character</button>
      <button onClick={() => changeCharacterView()}>Flip</button>
      <button onClick={() => changeCharacter(1)}>Next Character</button>
    </div>
  );
};
