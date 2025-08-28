import { Button } from "@aws-amplify/ui-react";
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { Typography } from "@mui/material";
import React from "react";
import "./CharacterComponent.scss";

//上（kabaneri がわ）から設定する数値
export interface CharacterComponentProps {
  className: string;
  allStar: number;
  atUp: number;
  onChance?: (glowStar: boolean) => void;
}

const CharacterComponent: React.FC<CharacterComponentProps> = (props) => {
  const [total, setTotal] = React.useState(0);
  const [star, setStar] = React.useState(false);

  // atUp にはいったらやるところ
  React.useEffect(() => {
    setTotal(0);
    setStar(false);
  }, [props.atUp]);

  // allStar にはいったらやるところ
  const isFirstAllStar = React.useRef(true);
  React.useEffect(() => {
    if (isFirstAllStar.current) {
      isFirstAllStar.current = false;
      return;
    }
    setTotal(total + 45);
    setStar(true);
  }, [props.allStar]);

  return (
    <div className={`${props.className} character-component`}>
      <div>
        <Typography variant="h5" align="right"><span>{total}</span> pt</Typography>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
          <div className="box lamp">
            <button onClick={() => {
              setTotal(total + 1);
              // chanceevent
              // 低確発光しないので false のまま
              props.onChance && props.onChance(false);
            }}></button>
          </div>
          <div className="box lamp">
            <button className="glow" onClick={() => {
              setTotal(total + 15);
              // chanceevent
              // false から true に変わるとき低確発光扱い
              props.onChance && props.onChance(star === false);
              setStar(true);
            }}></button>
          </div>
          <div className="box lamp">
            <button className="halo" onClick={() => {
              setTotal(total + 15);
              // chanceevent
              // false から true に変わるとき低確発光扱い
              props.onChance && props.onChance(star === false);
              setStar(true);
            }}></button>
          </div>
        </div>
      </div>
      <div className="box">
        <Button onClick={
          () => {
            // 無星に戻す
            setStar(false)
          }
        }><StarBorderIcon color="action" /></Button>
        <Button onClick={
          () => {
            // cz に入ったのでカウンタも星もリセット
            setTotal(0);
            setStar(false);
          }
        }><WhatshotIcon color="success" /></Button>
        <Button onClick={
          () => {
            // マニュアルでの15pt追加
            setTotal(total + 15);
          }
        }><ControlPointIcon color="secondary" /></Button>
      </div>
    </div >
  );
};

export default CharacterComponent;