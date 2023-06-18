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
      <Typography  fontWeight={"bold"} textTransform={"capitalize"} gutterBottom>
        {props.ability.name} ({props.ability.abilityType.name})
      </Typography>

      <Typography  sx={{ textAlign: "left", pb: 2 }} >
        {props.ability.description}
      </Typography>
    </>
  );
};
