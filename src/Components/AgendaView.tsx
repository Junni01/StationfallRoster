import { useState } from "react";
import { Character } from "../types/CharacterTypes";

type CharacterProps = {
  character: Character;
};

export const CharacterAgendaView = (props: CharacterProps) => {
  return (
    <div>
      <h1>{props.character.agenda.name}</h1>
      <div>
        {props.character.agenda.objectives.map((o) => (
          <div>
            <h2>{o.description}</h2>
            <ul>
              {o.subObjectives.map((so) => (
                <li>{so.description}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <h2>Scoring quirks</h2>
      <ul>
        {props.character.agenda.ScoringQuirks.map((q) => (
          <li>{q}</li>
        ))}
      </ul>
      <h2>Bonus Character points</h2>
      {props.character.bonusPoints.name}: {props.character.bonusPoints.description}
    </div>
  );
};
