import { CharacterAbility } from "../types/CharacterTypes";

type RevealPowerProps = {
  revealPower: CharacterAbility;
};

export const CharacterRevealPowerBox = (props: RevealPowerProps) => {
  return (
    <div>
      <h3>{props.revealPower.name}</h3>
      <ul>
        <li>{props.revealPower.description}</li>
      </ul>
    </div>
  );
};
