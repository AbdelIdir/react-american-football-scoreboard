import React from "react";

const Scorebuttons = props => {
  return (
    <section className="buttons">
      <div className="homeButtons">
        {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
        <button className="homeButtons__touchdown" onClick={props.scorehome}>
          Home Touchdown
        </button>
        <button
          className="homeButtons__fieldGoal"
          onClick={props.scorefieldhome}
        >
          Home Field Goal
        </button>
      </div>
      <div className="awayButtons">
        <button className="awayButtons__touchdown" onClick={props.scoreaway}>
          Away Touchdown
        </button>
        <button
          className="awayButtons__fieldGoal"
          onClick={props.scoreawayfield}
        >
          Away Field Goal
        </button>
       <button onClick= {props.resetTeamTiger} >Reset Team Tigers Score</button>
        
      </div>
    </section>
  );
};

export default Scorebuttons;
