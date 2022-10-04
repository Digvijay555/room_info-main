import { TextField} from "@mui/material";
import { useEffect, useState } from "react";
const SwitchDetail = (props) => {
  const { switchIdx, roomIdx, data, setData } = props;
  const [fans, setFans] = useState();
  const [light, setLight] = useState();
  const [heavy, setHeavy] = useState();

  useEffect(()=>{

    let appliances = {
      fans: fans,
      lightLoad: light,
      heavyLoad: heavy,
    };

    let newData = data;
    newData[roomIdx].switchboards[switchIdx].appliances = appliances
    setData([...newData])

  },[fans,light,heavy,switchIdx, roomIdx, data, setData])
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "1rem",
      }}
    >
      <TextField
        id="outlined-required"
        label={`Switch ${switchIdx + 1}`}
        disabled
        sx={{
          mb: 2,
            backgroundColor:"white",
            botderRadius:"15px",
        }}
      />
      <TextField
        id="outlined-required"
        label="Enter Number of fans"
        type={Number}
        onChange={(e) => {
          setFans(e.target.value);
        }}
        sx={{
          mb: 2,
            backgroundColor:"white",
            botderRadius:"15px",
        }}
      />
      <TextField
        id="outlined-required"
        label="Enter Light Load"
        type={Number}
        //   disabled={isSubmit}
        //   defaultValue={0}
        onChange={(e) => {
          setLight(e.target.value);
        }}
        sx={{
          mb: 2,
            backgroundColor:"white",
            botderRadius:"15px",
        }}
      />
      <TextField
        id="outlined-required"
        label="Enter Heavy Load"
        type={Number}
        //   disabled={isSubmit}
        //   defaultValue={0}
        onChange={(e) => {
          setHeavy(e.target.value);
        }}
        sx={{
          mb: 2,
            backgroundColor:"white",
            botderRadius:"15px",
        }}
      />
      
    </div>
  );
};

export default SwitchDetail;
