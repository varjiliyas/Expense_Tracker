import React, { useRef } from "react";
import { Grid } from "@material-ui/core";
import Details from "./components/Details/Details";
import Main from "./components/Main/Main";
// import { SpeechState, useSpeechContext } from "@speechly/react-client";
import makeStyles from "./styles";
import {
  PushToTalkButton,
  PushToTalkButtonContainer,
} from "@speechly/react-ui";

const App = () => {
  const classes = makeStyles();
  const main = useRef(null);

  return (
    <div>
      <Grid
        className={classes.grid}
        container
        spacing={0}
        alignItems="center"
        justifyContent="center"
        style={{ height: "100vh" }}
      >
        <Grid item xs={12} sm={4} className={classes.mobile}>
          <Details title="Income" />
        </Grid>
        <Grid ref={main} item xs={12} sm={3} className={classes.main}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.desktop}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.last}>
          <Details title="Expense" />
        </Grid>
        <PushToTalkButtonContainer>
          <PushToTalkButton placement="bottom" />
        </PushToTalkButtonContainer>
      </Grid>
    </div>
  );
};

export default App;
