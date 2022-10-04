import { TextField, Box, Button } from "@mui/material";
import { useState } from "react";
import SwitchBoard from "./switchBoard";
import { useSelector, useDispatch } from 'react-redux'
import { saveData } from "../redex/action";

const Main = () => {
  const [roomNumber, setRoomNumber] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [data, setData] = useState();
  const [isSubmit, setIsSubmit] = useState(false);
  let dispatch = useDispatch();

  let dataState = useSelector((state) => {
    return state.sar;
  })

  return (
    <div>
      <Box
        sx={{
          padding: "2rem",
          width: "50%",
          marginLeft: "25%",
          marginTop: "2%",
          borderRadius: "12px",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
        }}
      >
        <TextField
          sx={{
            backgroundColor: "white",
            botderRadius: "15px",
            m: "1rem"
          }}
          id="outlined-required"
          label="Enter Room Number"
          type={Number}
          disabled={isSubmit}
          onChange={(e) => {
            setRoomNumber(e.target.value);
          }}
        />
        <TextField
          sx={{
            backgroundColor: "white",
            botderRadius: "15px",
            m: "1rem",
            color: "black"
          }}
          id="outlined-required"
          label="Enter Mobile Number"
          type={Number}
          disabled={isSubmit}
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
        //   defaultValue={0}
        />

        <Button
          sx={{
            marginTop: "25px",
          }}
          variant="contained"
          onClick={() => {

            let newArray = [];
            newArray[roomNumber - 1] = 2;
            newArray.fill(2);

            console.log("newArray sd", newArray)  
            let newData = newArray.map((ele, idx) => {
              return {
                roomNumber: idx + 1,
                switchboards: [],
              };
            });
            console.log("new data",newData)
            setData(newData);
            setIsSubmit(true);
          }}
        >
          Enter
        </Button>
      </Box>
      {isSubmit ? (
        <>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",

            }}
          >
            {data.map((idx) => {
              return <SwitchBoard idx={idx} data={data} setData={setData} />;
            })}
          </Box>
          <Button
            variant="contained"
            onClick={() => {

              dispatch(saveData({ userNumber: phoneNumber, data }));
              console.log("Final Data", dataState);

            }}
          >
            Submit
          </Button>
        </>
      ) : null
        // <Button
        //   variant="contained"
        //   onClick={() => {

        //     let newArray = [];
        //     newArray[roomNumber - 1] = 2;
        //     newArray.fill(2);
        //     let newData = newArray.map((ele, idx) => {
        //       return {
        //         roomNumber: idx + 1,
        //         switchboards: [],
        //       };
        //     });
        //     setData(newData);
        //     setIsSubmit(true);
        //   }}
        // >
        //   Enter
        // </Button>
      }
    </div>
  );
};

export default Main;
