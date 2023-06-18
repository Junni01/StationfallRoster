export interface Character {
    id: number,
    name: string,
    characterType: CharacterType,
    influenceLimit: number,
    abilities: CharacterAbility[],
    revealPowers: CharacterAbility[],
    gamePlayQuirks: string[],
    iconUrl: string,
    agenda: {
      name: string,
      objectives: Objective[],
      ScoringQuirks: string[]
    },
    bonusPoints: BonusPointsType
    status: CharacterStatus
    active: boolean
}

export interface Objective {
description: string,
pointValue: number,
subObjectives: SubObjective[]
}

export interface SubObjective {
    description: string,
    pointValue: number,
}

export interface CharacterAbility {
        id: number,
        name: string,
        abilityColor: AbilityColor,
        abilityType: AbilityType
        description: string
      }

export interface CharacterType {
    id: number,
    name: string,
    description: string
}

export interface AbilityColor {
    id: number,
    name: string,
    color: string
}


export interface AbilityType {
    id: number,
    name: string,
    icon: string
}

export interface BonusPointsType {
    id: number,
    name: string ,
    description: string,
    pointValue: number
}

export interface CharacterStatus {
    inPlay: boolean,
    exhausted: boolean,
    down: boolean,
    escaped: boolean,
    annihilated: boolean,
    revealed: boolean
}