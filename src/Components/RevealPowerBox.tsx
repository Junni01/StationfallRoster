import { RevealPower } from "../types/CharacterTypes";

type RevealPowerProps = {
  revealPower: RevealPower;
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
