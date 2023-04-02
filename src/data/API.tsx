import charactersJSON from "./Characters.json";
import abilityTypesJSON from "./AbilityTypes.json";
import abilitiesJSON from "./Abilities.json";
import characterTypesJSON from "./CharacterTypes.json";
import bonusPointTypesJSON from "./BonuspointsTypes.json";
import {
  AbilityColor,
  AbilityType,
  BonusPointsType,
  Character,
  CharacterAbility,
  CharacterType,
} from "../types/CharacterTypes";

export function ReadCharacterData(): Character[] {
  const bonusPointTypes: BonusPointsType[] =
    bonusPointTypesJSON.bonusPointsTypes.map((bp) => {
      return {
        id: bp.id,
        name: bp.name,
        description: bp.description,
        pointValue: bp.pointValue,
      };
    });
  const abilityColors: AbilityColor[] = abilityTypesJSON.abilityColors.map(
    (ac) => {
      return { id: ac.id, name: ac.name, color: ac.color };
    }
  );
  const abilityTypes : AbilityType[] = abilityTypesJSON.abilityTypes.map(
    (at) => { return { id: at.id, name: at.name, icon: at.icon}}
  )

  const characterTypes: CharacterType[] = characterTypesJSON.characterTypes.map(
    (ct) => {
      return {
        id: ct.id,
        name: ct.name,
        description: ct.description,
      };
    }
  );

  const abilities: CharacterAbility[] = abilitiesJSON.abilities.map((a) => {
    return {
      id: a.id,
      name: a.name,
      abilityColor: abilityColors.find((ac) => ac.id === a.abilityColor) ?? {
        id: 0,
        name: "",
        color: "",
      },
      abilityType: abilityTypes.find((at) => at.id === a.abilityType) ?? {
        id: 0,
        name: "",
        icon: ""
      },
      description: a.description,
    };
  });

  const characters: Character[] = charactersJSON.characters.map((c) => {
    const characterAbilities = c.abilities.map((aid) => {
      return (
        abilities.find((a) => 
          a.id === aid
        ) ?? {
          id: 0,
          name: "",
          description: "",
          abilityColor: {
            id: 0,
            name: "",
            color: "",
          },
          abilityType: {
            id: 0,
            name: "",
            icon: "",
          },
        }
      );
    });

        const characterRevealPowers = c.revealPowers.map((aid) => {
      return (
        abilities.find((a) => 
          a.id === aid
        ) ?? {
          id: 0,
          name: "",
          description: "",
          abilityColor: {
            id: 0,
            name: "",
            color: "",
          },
          abilityType: {
            id: 0,
            name: "",
            icon: "",
          },
        }
      );
    });


const character : Character = {
    id: c.id,
    name: c.name,
    characterType: characterTypes.find((ct) => ct.id === c.characterType) ?? {
      id: 0,
      name: "",
      description: "",
    },
    influenceLimit: c.influenceLimit,
    abilities: characterAbilities,
    revealPowers: characterRevealPowers,
    gamePlayQuirks: c.gamePlayQuirks,
    iconUrl: c.iconUrl,
    agenda: {
      name: c.agenda.name,
      objectives: c.agenda.objectives,
      ScoringQuirks: c.agenda.ScoringQuirks,
    },
    bonusPoints: bonusPointTypes.find((bp) => 
      bp.id === c.bonusPoints
    ) ?? {
      id: 0,
      name: "",
      description: "",
      pointValue: 0,
    },
    status: {
      inPlay: false,
      exhausted: false,
      down: false,
      escaped: false,
      annihilated: false,
      revealed: false,
    },
  };

    return character
  });

  return characters;
}
