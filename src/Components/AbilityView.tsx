import { Card, Grid, List, ListItem, Stack, Typography } from "@mui/material";
import { Character } from "../types/CharacterTypes";
import { CharacterAbilityBox } from "./AbilityBox";

type CharacterProps = {
  character: Character;
};

export const CharacterAbilityView = (props: CharacterProps) => {
  const character = props.character;

  return (
    <Stack spacing={2}>
      <Card sx={{ p: 2, borderRadius: 5 }}>
        <Typography variant="h5" fontWeight={"bold"} textAlign={'center'}>
          ABILITIES
        </Typography>

        {character.abilities.map((a) => (         
            <CharacterAbilityBox key={a.id} ability={a}></CharacterAbilityBox>
        ))}
      </Card>
      <Card sx={{ p: 2, borderRadius: 5 }}>
        <Typography variant="h5" fontWeight={"bold"} textAlign={'center'}>
          REVEAL POWERS
        </Typography>

        {character.revealPowers.map((p) => (
            <CharacterAbilityBox key={p.id} ability={p}></CharacterAbilityBox>
        ))}
      </Card>

      {character.gamePlayQuirks.length > 0 ? (
        <Card sx={{ p: 2, borderRadius: 5 }}>
          <Typography variant="h5" fontWeight={"bold"} textAlign={'center'}>
            GAMEPLAY QUIRKS
          </Typography>
          <List>
            {props.character.gamePlayQuirks.map((q) => (
              <ListItem key={q}>- {q}</ListItem>
            ))}
          </List>
        </Card>
      ) : (
        ""
      )}
    </Stack>
  );
};
