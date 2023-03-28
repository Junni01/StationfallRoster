import { useState } from "react";
import { CharacterAbility } from "../types/CharacterTypes";

type AbilityProps = {
  ability: CharacterAbility;
};

export const CharacterAbilityBox = (props: AbilityProps) => {
  return (
    <div>
      <h3>{props.ability.name}</h3>
      <ul>
        <li>{props.ability.description}</li>
      </ul>
    </div>
  );
};
