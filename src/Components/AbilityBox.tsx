import { useState } from "react";
import { CharacterAbility } from "../types/CharacterTypes";

type AbilityProps = {
  ability: CharacterAbility;
};

export const CharacterAbilityBox = (props: AbilityProps) => {
  return (
    <div>
      <h1>{props.ability.name}</h1>
      <ul>
        <li>{props.ability.description}</li>
      </ul>
    </div>
  );
};
