import { Grid, List, ListItem } from "@mui/material";
import { CharacterAbility } from "../types/CharacterTypes";

type RevealPowerProps = {
  revealPower: CharacterAbility;
};

export const CharacterRevealPowerBox = (props: RevealPowerProps) => {
  return (
    <>
      <Grid item xs={12}>
        {props.revealPower.name}
      </Grid>
      <Grid item xs={12}>
        <List>
          <ListItem>{props.revealPower.description}</ListItem>
        </List>
      </Grid>
    </>
  );
};
