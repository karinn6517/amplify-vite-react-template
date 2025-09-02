
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import { Stack, Switch, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import React from "react";
import CharacterComponent from "./CharacterComponent";
import "./Kabaneri.css";

function Kabaneri() {

  const [allStar, setAllStarCount] = React.useState(0);
  const [atUp, setAtUpCount] = React.useState(0);
  const [chanceCount, setChanceCount] = React.useState(0);
  const [highChanceCount, setHighChanceCount] = React.useState(0);
  const [decriment, setDecriment] = React.useState(false);

  function onChanceEvent(glowStar: boolean) {
    if (decriment) {
      setChanceCount(Math.max(0, chanceCount - 1));
      if (glowStar) {
        setHighChanceCount(Math.max(0, highChanceCount - 1));
      }
    } else {

      setChanceCount(chanceCount + 1);
      if (glowStar) {
        setHighChanceCount(highChanceCount + 1);
      }
    }
  }

  return (
    <main className={`kabaneri-page ${decriment ? 'minus' : ''}`}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ margin: 0 }}>{decriment ? '減算モード' : 'Kabaneri ページ'}</h1>
        <Switch checked={decriment} onChange={e => setDecriment(e.target.checked)} />
      </div>
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
      <CharacterComponent className={"mumei"} allStar={allStar} atUp={atUp} decrement={decriment} onChance={onChanceEvent}></CharacterComponent>
      <CharacterComponent className={"ikoma"} allStar={allStar} atUp={atUp} decrement={decriment} onChance={onChanceEvent}></CharacterComponent>
      <CharacterComponent className={"biba"} allStar={allStar} atUp={atUp} decrement={decriment} onChance={onChanceEvent}></CharacterComponent>
    </main >
  );
}

export default Kabaneri;
