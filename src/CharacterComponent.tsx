import { Button } from "@aws-amplify/ui-react";
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { Switch, Typography } from "@mui/material";
import React from "react";
import "./CharacterComponent.scss";

//上（kabaneri がわ）から設定する数値
export interface CharacterComponentProps {
  className: string;
  allStar: number;
  atUp: number;
  decrement: boolean;
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
              if (props.decrement) {  // 減算モード
                setTotal(Math.max(0, total - 1));
              } else {  // 加算モード
                setTotal(total + 1);
              }
              // chanceevent
              // 低確発光しないので false のまま
              props.onChance && props.onChance(false);
            }}></button>
          </div>
          <div className="box lamp">
            <button className="glow" onClick={() => {
              if (props.decrement) {  // 減算モード
                setTotal(Math.max(0, total - 15));
                // 低確発光フラグが立っていること前提なので true
                props.onChance && props.onChance(true);
                setStar(false);
              } else {  // 加算モード
                setTotal(total + 15);
                props.onChance && props.onChance(star == false);
                setStar(true);
              }
            }}></button>
          </div>
          <div className="box lamp">
            <button className="halo" onClick={() => {
              if (props.decrement) {  // 減算モード
                setTotal(Math.max(0, total - 15));
                // チャメだけ取り消したいので false でイベント発光
                props.onChance && props.onChance(false);
              } else {  // 加算モード
                setTotal(total + 15);
                props.onChance && props.onChance(star === false);
                setStar(true);
              }
            }}></button>
          </div>
        </div>
      </div>
      <div className="box">
        <Switch checked={star} onChange={e => setStar(e.target.checked)} />
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