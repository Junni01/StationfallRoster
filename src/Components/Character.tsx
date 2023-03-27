import { useState } from "react";
import { Character } from "../types/CharacterTypes";
import { CharacterAbilityView } from "./AbilityView";

export const CharacterView = () => {
  const testCharacter: Character = {
    id: 1,
    name: "Astrochimp",
    characterType: {
      name: "Human",
      description:
        "Cannot be Downed or Robbed with bludgeon when has a helmet. Downed by Hazards.",
      id: 1,
    },
    influenceLimit: 5,
    abilities: [
      {
        id: 1,
        name: "Tunnel Rat",
        type: {
          id: 5,
          name: "Mobility",
          color: "Yellow",
        },
        description: "May Step through Vents.",
      },
      {
        id: 2,
        name: "Loyal",
        type: {
          id: 2,
          name: "Conspiracy",
          color: "Purple",
        },
        description:
          "To Influence return all cubes on this card and place at least 1 more cube than was previously here.",
      },
    ],
    revealPowers: [
      {
        name: "Acrobatics",
        description:
          "Gains ZeroBorn: May Free Step or Airlock into a zero Gravity Section instead of Free Pickup or Drop",
        powerType: {
          id: 5,
          name: "Mobility",
          color: "Yellow",
        },
      },
    ],
    gamePlayQuirks: ["Game play quirks for you my man"],
    iconUrl: "/img/characterIcons/AstroChimp.png",
    agenda: {
      name: "Shiny Things",
      objectives: [
        {
          description: "3 points if Astrochimp Escapes",
          pointValue: 3,
          subObjective: [
            {
              description: "+2 points if in Possession of Briefcase",
              pointValue: 2,
            },
            {
              description: "+2 point if in Possession of Artifact",
              pointValue: 2,
            },
            {
              description: "+2 points if in Possession of a Gun",
              pointValue: 2,
            },
          ],
        },
      ],
      ScoringQuirks: ["Scoring quirks for you."],
    },
    bonusPoints: {
      id: 1,
      name: "Friend",
      description: "2 points if {Character} is your BC and Escapes",
      pointValue: 2,
    },
  };

  const characterList: Character[] = [];
  const characterListSize = characterList.length;

  characterList.push(testCharacter);

  const [characterView, setCharacterView] = useState(0);
  const [currentCharacter, setCharacter] = useState(characterList[0]);
  const [characterIndex, setCharacterIndex] = useState(0);

  function changeCharacterView() {
    setCharacterView(characterView);
  }

  function changeCharacter(direction: number) {
    if (direction === 1 && characterIndex === characterListSize - 1) {
      setCharacter(characterList[0]);
      setCharacterIndex(0);
      return;
    }

    if (direction === -1 && characterIndex === 0) {
      setCharacter(characterList[characterListSize - 1]);
      setCharacterIndex(characterListSize - 1);
      return;
    }

    const next = characterIndex + direction;

    setCharacterIndex(next);
    setCharacter(characterList[next]);
  }

  return (
    <div>
      <CharacterAbilityView character={currentCharacter}></CharacterAbilityView>
      <button onClick={() => changeCharacterView()}>Flip</button>
      <button onClick={() => changeCharacter(1)}>Next Character</button>
      <button onClick={() => changeCharacter(-1)}>Previous Character</button>
    </div>
  );
};
