import { Radio, Typography } from "@mui/material";
import "./CharacterComponent.scss";
import React from "react";
import { Button } from "@aws-amplify/ui-react";

export enum CharacterState {
  None,
  Glow,
  Halo,
}

export interface CharacterComponentProps {
  className: string;
  tortal?: number;
  chance?: number;
  state?: CharacterState;
  czUp?: boolean;
  onChance: (isLow: boolean) => void;
  onCZone: () => void;
}


const CharacterComponent: React.FC<CharacterComponentProps> = (props) => {
  const [total, setTotal] = React.useState(0);
  const [chance, setChance] = React.useState(0);
  const [state, setState] = React.useState(CharacterState.None);
  const [czUp, setCzUp] = React.useState(false);

  // badge ようにいれとく
  const [invisible, setInvisible] = React.useState(false);

  React.useEffect(() => {
    setTotal(props.tortal ?? 0);
  }, [props.tortal]);

  React.useEffect(() => {
    setChance(props.chance ?? 0);
  }, [props.chance]);

  React.useEffect(() => {
    setState(props.state ?? CharacterState.None);
  }, [props.state]);

  React.useEffect(() => {
    setCzUp(props.czUp ?? false);
  }, [props.czUp]);


  return (
    <div className={`${props.className} character-component`}>
      <div className="box lamp">
        <button></button>
        <Radio
          checked={state === CharacterState.None}
          value={CharacterState.None}
          name={`level-${props.className}`}
          onChange={() => setState(CharacterState.None)}
        />
      </div>
      <div className="box lamp">
        <button className="glow"></button>
        <Radio
          checked={state === CharacterState.Glow}
          value={CharacterState.Glow}
          name={`level-${props.className}`}
          onChange={() => setState(CharacterState.Glow)}
        />
      </div>
      <div className="box lamp">
        <button className="halo"></button>
        <Radio
          checked={state === CharacterState.Halo}
          value={CharacterState.Halo}
          name={`level-${props.className}`}
          onChange={() => setState(CharacterState.Halo)}
        />
      </div>
      <div className="box">
        <Typography variant="h5" align="right">123pt</Typography>
        <Button>CZ</Button>
        <Button>double</Button>
      </div>
    </div>
  );
};

export default CharacterComponent;