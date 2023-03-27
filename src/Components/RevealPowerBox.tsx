import { RevealPower } from "../types/CharacterTypes";

type RevealPowerProps = {
  revealPower: RevealPower;
};

export const CharacterRevealPowerBox = (props: RevealPowerProps) => {
  return (
    <div>
      <h1>{props.revealPower.name}</h1>
      <ul>
        <li>{props.revealPower.description}</li>
      </ul>
    </div>
  );
};
