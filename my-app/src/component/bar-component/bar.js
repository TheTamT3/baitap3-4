import React, { Component } from "react";
import Tagbar from "./tag-bar";

import "/home/thetamt3/Desktop/FE/baitap3-4/my-app/src/style.css/bar.css/bar.css";
class Bar extends Component {
  constructor(item) {
    super();
    this.itemleft = ["Status", "News", "Confirm", "Due Day"];
    this.itemright = ["Mytask", "Logout"];
  }
  render() {
    return (
      <div class="bar">
        <div class="bar-left">
          {this.itemleft.map((item) => (
            <Tagbar contentLeft={item} />
          ))}
        </div>
        <div class="bar-right">
          {this.itemright.map((item) => (
            <Tagbar contentLeft={item} />
          ))}
        </div>
      </div>
    );
  }
}
export default Bar;
