import { useEffect, useState } from "react";
import { ReadCharacterData } from "../data/API";
import { Character } from "../types/CharacterTypes";
import { CharacterAbilityView } from "./AbilityView";
import { CharacterAgendaView } from "./AgendaView";

let loading : boolean = true;
let characterListSize: number;
let characterList: Character[]

export const CharacterView = () => {
  
  const [characterView, setCharacterView] = useState(0);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [currentCharacter, setCharacter] = useState<Character>(characters[0]);
  const [characterIndex, setCharacterIndex] = useState(0);

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

console.log(direction)
console.log(characterIndex)
console.log(characterListSize)

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

if(loading) {

<div>Loading...</div>

} else {

  return (
    <div>
      
      {characterView == 0 ? (
        <CharacterAbilityView
          character={currentCharacter}
        ></CharacterAbilityView>
      ) : (
        <CharacterAgendaView character={currentCharacter}></CharacterAgendaView>
      )}
      <button onClick={() => changeCharacter(-1)}>Previous Character</button>
      <button onClick={() => changeCharacterView()}>Flip</button>
      <button onClick={() => changeCharacter(1)}>Next Character</button>
    </div>
  );
}

};
function componentDidMount() {
  throw new Error("Function not implemented.");
}
