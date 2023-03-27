export interface Character {
    id: number,
    name: string,
    characterType: CharacterType,
    influenceLimit: number,
    abilities: CharacterAbility[],
    revealPowers: RevealPower[],
    gamePlayQuirks: string[],
    iconUrl: string,
    agenda: {
      name: string,
      objectives: Objective[],
      ScoringQuirks: string[]
    },
    bonusPoints: BonusPointsType
}

export interface RevealPower {
    name: string,
    description: string,
    powerType: AbilityType
}

export interface Objective {
description: string,
pointValue: number,
subObjective: SubObjective[]
}

export interface SubObjective {
    description: string,
    pointValue: number,
}

export interface CharacterAbility {
        id: number,
        name: string,
        type: AbilityType,
        description: string
      }

export interface CharacterType {
    id: number,
    name: string,
    description: string
}

export interface AbilityType {
    id: number,
    name: string,
    color: string
}

export interface BonusPointsType {
    id: number,
    name: string ,
    description: string,
    pointValue: number
}