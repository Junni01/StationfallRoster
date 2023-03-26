import { useState } from 'react'

function Character() {

    const [characterView, setCharacterView] = useState();

    function changeCharacterView() {
    setCharacterView(characterView);
    }

    return <button onClick={changeCharacterView()}>

    </button>

    if(characterView === 1) {
        <p>Abilities</p>
    } if (characterView === 0) {

    }
}

interface Character {
    id: number,
    name: string,
    characterType: CharacterType,
    influenceLimit: number,
    abilities: CharacterAbility[],
    revealPowers: [
      {
        name: string,
        description: string,
        powerType: AbilityType
      }
    ],
    gamePlayQuirks: string,
    iconUrl: string,
    agenda: {
      name: string,
      objectives: [
        {
          description: string,
          pointValue: number,
          subObjectives: [
            {
              description: string,
              pointValue: number
            }
          ]
        }
      ],
      ScoringQuirks: string
    },
    bonusPoints: BonusPointsType
}

interface CharacterAbility {
        id: number,
        name: string,
        type: AbilityType,
        description: string
      }

interface CharacterType {
    id: number,
    name: string,
    description: string
}

interface AbilityType {
    id: number,
    name: string,
    color: string
}

interface BonusPointsType {
    id: number,
    name: string ,
    description: string,
    pointValue: number
}