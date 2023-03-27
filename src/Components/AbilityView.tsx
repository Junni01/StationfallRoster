import { useState } from 'react'
import { Character } from '../types/CharacterTypes'
import { CharacterAbilityBox } from './AbilityBox'
import { CharacterRevealPowerBox } from './RevealPowerBox'

type CharacterProps = {
    character: Character
}


export const CharacterAbilityView = (props: CharacterProps) => {
    return (
<div>
        <h1>{props.character.name}</h1>
        <h2>Influence Limit: {props.character.influenceLimit}</h2>
        <h2>Character Type: {props.character.characterType.name}</h2>
        <h1>Abilities</h1>
        <div>{props.character.abilities.map((a) => (
            <CharacterAbilityBox ability={a}></CharacterAbilityBox>
        ))}
        </div>
        <h1>Reveal Powers</h1>
        <div>{props.character.revealPowers.map((p) => (<CharacterRevealPowerBox revealPower={p}></CharacterRevealPowerBox>))}</div>
</div>
    )
}