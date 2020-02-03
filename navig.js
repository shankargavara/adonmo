import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
class App extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <h1>click buttons to transfrom</h1>
        </Grid>
      </div>
    );
  }
}

export default App;
