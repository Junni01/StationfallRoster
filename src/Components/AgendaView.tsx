import { Grid, List, ListItem } from "@mui/material";
import { useState } from "react";
import { Character } from "../types/CharacterTypes";

type CharacterProps = {
  character: Character;
};

export const CharacterAgendaView = (props: CharacterProps) => {

const agenda = props.character.agenda;
const bonusPoints = props.character.bonusPoints;

  return (
    <>
      <Grid item xs={12}>{agenda.name}</Grid>
      
        {agenda.objectives.map((o) => (
          <Grid item xs={12}>
            {o.description}
            <List>
              {o.subObjectives.map((so) => (
                <ListItem>{so.description}</ListItem>
              ))}
            </List>
          </Grid>
        ))}
      
      {agenda.ScoringQuirks.length > 0 ? <Grid item xs={12}>Scoring quirks</Grid> : ""}
      <Grid item xs={12}>
      <List>
        {agenda.ScoringQuirks.map((q) => (
          <ListItem>{q}</ListItem>
          ))}
      </List>
          </Grid>

      <Grid item xs={12}>Bonus Character points</Grid>
      <Grid item xs={12}>{bonusPoints.name}: {bonusPoints.description}</Grid>
    </>
  );
};
