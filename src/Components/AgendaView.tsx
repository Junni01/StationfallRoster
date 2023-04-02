import { useState } from "react";
import { Character } from "../types/CharacterTypes";

type CharacterProps = {
  character: Character;
};

export const CharacterAgendaView = (props: CharacterProps) => {

const agenda = props.character.agenda;
const bonusPoints = props.character.bonusPoints;

  return (
    <div>
      <h1>{props.character.name}</h1>
      <h1>{agenda.name}</h1>
      <div>
        {agenda.objectives.map((o) => (
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
      {agenda.ScoringQuirks.length > 0 ? <h2>Scoring quirks</h2> : ""}
      <ul>
        {agenda.ScoringQuirks.map((q) => (
          <li>{q}</li>
        ))}
      </ul>

      <h2>Bonus Character points</h2>
      {bonusPoints.name}: {bonusPoints.description}
    </div>
  );
};
