import { Grid } from "@mui/material";
import { useState } from "react";
import { CharacterAbility } from "../types/CharacterTypes";

type AbilityProps = {
  ability: CharacterAbility;
};

export const CharacterAbilityBox = (props: AbilityProps) => {
  return (
    <>
      <Grid item xs={12}>{props.ability.name}</Grid>
      <Grid item xs={12}>
        {props.ability.description}
      </Grid>
    </>
  );
};
