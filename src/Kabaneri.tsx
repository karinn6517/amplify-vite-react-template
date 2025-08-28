
import "./Kabaneri.css";
import Button from '@mui/material/Button';
import CharacterComponent from "./CharacterComponent";
import { Stack, Typography } from "@mui/material";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import React from "react";

function Kabaneri() {

  const [allStar, setAllStarCount] = React.useState(0);
  const [atUp, setAtUpCount] = React.useState(0);
  const [chanceCount, setChanceCount] = React.useState(0);
  const [highChanceCount, setHighChanceCount] = React.useState(0);

  function onChanceEvent(glowStar: boolean) {
    setChanceCount(chanceCount + 1);
    if (glowStar) {
      setHighChanceCount(highChanceCount + 1);
    }
  }

  return (
    <main className="kabaneri-page">
      <h1>Kabaneriページ</h1>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Stack direction="row" spacing={2} alignItems="center">
          <Typography variant="h5">{highChanceCount}</Typography>
          <Typography variant="h4">/</Typography>
          <Typography variant="h5">{chanceCount}</Typography>
        </Stack>
        <Stack direction="row" spacing={4}>
          <Button variant="contained" color="primary" onClick={() => setAllStarCount(allStar + 1)}>
            <AlternateEmailIcon />
          </Button>
          <Button variant="contained" color="success" onClick={() => setAtUpCount(atUp + 1)}>
            <AvTimerIcon />
          </Button>
        </Stack>
      </Stack>
      <CharacterComponent className={"mumei"} allStar={allStar} atUp={atUp} onChance={onChanceEvent}></CharacterComponent>
      <CharacterComponent className={"ikoma"} allStar={allStar} atUp={atUp} onChance={onChanceEvent}></CharacterComponent>
      <CharacterComponent className={"biba"} allStar={allStar} atUp={atUp} onChance={onChanceEvent}></CharacterComponent>
    </main >
  );
}

export default Kabaneri;
