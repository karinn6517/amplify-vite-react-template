
import "./Kabaneri.css";
import Button from '@mui/material/Button';
import CharacterComponent from "./CharacterComponent";
import { Stack, Typography } from "@mui/material";

function Kabaneri() {

  function chanceEvent(isLow: boolean): void {
    console.log(isLow);
  }

  function czoneEvent(): void {

  }
  return (
    <main className="kabaneri-page">
      <h1>Kabaneriページ</h1>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Stack direction="row" spacing={2} alignItems="center">
          <Typography variant="h5">5</Typography>
          <Typography variant="h4">/</Typography>
          <Typography variant="h5">10</Typography>
        </Stack>
        <Stack direction="row" spacing={4}>
          <Button variant="contained" color="primary" onClick={() => alert("Button clicked!")}>
            Allstar
          </Button>
          <Button variant="contained" color="secondary" onClick={() => alert("Button clicked!")}>
            AT
          </Button>
        </Stack>
      </Stack>
      <CharacterComponent className={"mumei"} tortal={100} onChance={chanceEvent} onCZone={czoneEvent}></CharacterComponent>
      <CharacterComponent className={"ikoma"} tortal={100} onChance={chanceEvent} onCZone={czoneEvent}></CharacterComponent>
      <CharacterComponent className={"biba"} tortal={100} onChance={chanceEvent} onCZone={czoneEvent}></CharacterComponent>
    </main >
  );
}

export default Kabaneri;
