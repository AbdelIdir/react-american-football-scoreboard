//TODO: STEP 1 - Import the useState hook.

import { useState } from "react";
import React from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import Scorebuttons from "./buttons";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [LionTeamScore, setLionTeamScore] = useState(0);
  const [TigerTeamScore, setTigerTeamScore] = useState(0);


  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{LionTeamScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{TigerTeamScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <Scorebuttons
        scorehome={e => setLionTeamScore(LionTeamScore + 7)}
        scorefieldhome={e => setLionTeamScore(LionTeamScore + 3)}
        scoreaway={e => setTigerTeamScore(TigerTeamScore + 7)}
        scoreawayfield={e => setTigerTeamScore(TigerTeamScore + 3)}
        resetTeamLion = {e =>
          setLionTeamScore(0) 
          }
          resetTeamTiger = {e => setTigerTeamScore(0)}
      />
    </div>
  );
}

export default App;
