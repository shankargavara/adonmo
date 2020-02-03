import React from "react";
import "./App.css";
class Bts extends React.Component {
  render() {
    return (
      <div className="app">
        <Bts
          likes="123"
          comments="45"
          shares="50"
          images="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/ala-vaikunthapuramulo-et00109721-15-08-2019-01-57-15.jpg"
        />
        <Bts
          likes="156"
          comments="445"
          shares="80"
          images="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/ala-vaikunthapuramulo-et00109721-15-08-2019-01-57-15.jpg"
        />
      </div>
    );
  }
}
export default Bts;
