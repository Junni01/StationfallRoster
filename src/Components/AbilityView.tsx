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
        <h3>Influence Limit: {props.character.influenceLimit}</h3>
        <h3>Character Type: {props.character.characterType.name}</h3>
        <h2>Abilities: </h2>
        <div>
            {props.character.abilities.map((a) => (
            <CharacterAbilityBox key={a.id} ability={a}></CharacterAbilityBox>
        ))}
        </div>
        <h2>Reveal Powers: </h2>
        <div>{props.character.revealPowers.map((p) => (<CharacterRevealPowerBox revealPower={p}></CharacterRevealPowerBox>))}</div>
        <h2>Gameplay quirks:</h2>
        <ul>
            {props.character.gamePlayQuirks.map((q) => (
                <li>
                    {q}
                </li>
            ))}
        </ul>


</div>
    )
}