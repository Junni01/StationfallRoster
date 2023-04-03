import { Grid, List, ListItem } from "@mui/material";
import { useState } from "react";
import { Character } from "../types/CharacterTypes";
import { CharacterAbilityBox } from "./AbilityBox";
import { CharacterRevealPowerBox } from "./RevealPowerBox";

type CharacterProps = {
  character: Character;
};

export const CharacterAbilityView = (props: CharacterProps) => {
  const character = props.character;

  return (
    <>
      <Grid item xs={12}>
        Abilities:
      </Grid>
      {character.abilities.map((a) => (
        <Grid item xs={12}><CharacterAbilityBox key={a.id} ability={a}></CharacterAbilityBox></Grid>
      ))}
      <Grid item xs={12}>
        Reveal Powers:
      </Grid>
      {character.revealPowers.map((p) => (
        <Grid item xs={12}><CharacterAbilityBox key={p.id} ability={p}></CharacterAbilityBox></Grid>
      ))}
      {character.gamePlayQuirks.length > 0 ? (
        <Grid item xs={12}>
          Gameplay quirks:
        </Grid>
      ) : (
        ""
      )}

      <List>
        {props.character.gamePlayQuirks.map((q) => (
          <ListItem key={q}>{q}</ListItem>
        ))}
      </List>
    </>
  );
};
