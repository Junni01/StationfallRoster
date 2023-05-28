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
      <Typography fontWeight={"bold"} textTransform={"capitalize"}>
        {props.ability.name}
      </Typography>

      <Typography sx={{ textAlign: "left" }}>
        {props.ability.description}
      </Typography>
    </>
  );
};
