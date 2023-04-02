import { useState } from "react";
import { Character } from "../types/CharacterTypes";
import { CharacterAbilityBox } from "./AbilityBox";
import { CharacterRevealPowerBox } from "./RevealPowerBox";

type CharacterProps = {
  character: Character;
};

export const CharacterAbilityView = (props: CharacterProps) => {
  const character = props.character;
  const iconUrl = "./src/assets/characterIcons/" + character.iconUrl;

  return (
    <div>
      <h1>{character.name}</h1>
      <img src={iconUrl} />
      <h3>Influence Limit: {character.influenceLimit}</h3>
      <h3>Character Type: {character.characterType.name}</h3>
      <h2>Abilities: </h2>
      <div>
        {character.abilities.map((a) => (
          <CharacterAbilityBox key={a.id} ability={a}></CharacterAbilityBox>
        ))}
      </div>
      <h2>Reveal Powers: </h2>
      <div>
        {character.revealPowers.map((p) => (
          <CharacterRevealPowerBox key={p.id} revealPower={p}></CharacterRevealPowerBox>
        ))}
      </div>
      {character.gamePlayQuirks.length > 0 ? <h2>Gameplay quirks:</h2> : ""}
      <ul>
        {props.character.gamePlayQuirks.map((q) => (
          <li key={q}>{q}</li>
        ))}
      </ul>
    </div>
  );
};
