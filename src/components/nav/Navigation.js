import React, { useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import SwitchButton from "../switch-button/SwitchButton";
function Navigation(props) {
  const [isToggled, setToggled] = useState(false);
  return (
    <div style={styles.container}>
      <div style={styles.nav_bar}>
        <h1>Chrome Ext - Options</h1>
        <nav>
          <div>
            <SwitchButton isToggled={isToggled} setToggled={() => setToggled(prev => !prev)} />
          </div>
        </nav>
      </div>
      {/* <li>
              <Link to="/options.html/popup">Popup</Link>
            </li>
            <li>
              <Link to="/options.html/foreground">Foreground</Link>
            </li>
        </nav>
      </div>
      <Switch>
        <Route exact path="/" component={Options} />
        <Route path="/options.html/popup" component={Popup} />
        <Route path="/options.html/foreground" component={Foreground} />
      </Switch> */}
    </div>
  );
}
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
};
export default Navigation;
