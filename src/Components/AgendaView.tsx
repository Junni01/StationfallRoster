import {
  Box,
  Card,
  Divider,
  Grid,
  List,
  ListItem,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Character } from "../types/CharacterTypes";

type CharacterProps = {
  character: Character;
};

export const CharacterAgendaView = (props: CharacterProps) => {
  const agenda = props.character.agenda;
  const bonusPoints = props.character.bonusPoints;
  const descriptionString = props.character.bonusPoints.description.replace(
    "{Character}",
    props.character.name
  );

  return (
    <Stack spacing={2} sx={{width: 'inherit'}}>
      <Card
        sx={{
          p: 2,
          borderRadius: 5,
          width: 'auto'
        }}
      >
        <Typography
          variant="h5"
          fontWeight={"bold"}
          textAlign={"center"}
          gutterBottom
        >
          AGENDA
        </Typography>
        <Typography
          variant="h6"
          textTransform={"capitalize"}
          fontWeight={"bold"}
          textAlign={"center"}
          gutterBottom
        >
          {agenda.name}
        </Typography>

        {agenda.objectives.map((o) => (
          <Paper
            sx={{
              border: "2px",
              borderStyle: "solid",
              p: 1,
              mb: 2
            }}
          >
            <Typography fontWeight={"bold"}>{o.description}</Typography>
            <List>
              {o.subObjectives.map((so) => (
                <ListItem sx={{mt:1}}>{so.description}</ListItem>
              ))}
            </List>
          </Paper>
        ))}
      </Card>

      {agenda.ScoringQuirks.length > 0 ? (
        <Paper
          sx={{
            p: 2,
            borderRadius: 5,
          }}
        >
          <Typography
            variant="h5"
            fontWeight={"bold"}
            textAlign={"center"}
            gutterBottom
          >
            Scoring quirks
          </Typography>

          <List>
            {agenda.ScoringQuirks.map((q) => (
              <ListItem>
                <Typography>- {q}</Typography>
              </ListItem>
            ))}
          </List>
        </Paper>
      ) : (
        ""
      )}
      <Paper
        sx={{
          p: 2,
          borderRadius: 5,
        }}
      >
        <Typography
          variant="h5"
          fontWeight={"bold"}
          textAlign={"center"}
          gutterBottom
        >
          Bonus Character points
        </Typography>
        <b>{bonusPoints.name}:</b> {descriptionString}
      </Paper>
    </Stack>
  );
};
