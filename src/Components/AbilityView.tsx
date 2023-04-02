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
      <Grid item xs={6}>
        Influence Limit: {character.influenceLimit}
      </Grid>
      <Grid item xs={6}>
        Character Type: {character.characterType.name}
      </Grid>
      <Grid item xs={12}>
        Abilities:
      </Grid>
      {character.abilities.map((a) => (
        <CharacterAbilityBox key={a.id} ability={a}></CharacterAbilityBox>
      ))}
      <Grid item xs={12}>
        Reveal Powers:
      </Grid>
      {character.revealPowers.map((p) => (
        <CharacterRevealPowerBox
          key={p.id}
          revealPower={p}
        ></CharacterRevealPowerBox>
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
