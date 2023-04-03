import { Grid, Typography } from "@mui/material";
import { textAlign } from "@mui/system";
import { useState } from "react";
import { CharacterAbility } from "../types/CharacterTypes";

type AbilityProps = {
  ability: CharacterAbility;
};

export const CharacterAbilityBox = (props: AbilityProps) => {
  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h4">{props.ability.name}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography sx={{ textAlign: "left" }}>
          {props.ability.description}
        </Typography>
      </Grid>
    </>
  );
};
