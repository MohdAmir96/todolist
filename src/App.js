import React from "react";
// import Testing from "./Testing";
import FormHandle from "./class-5-form-handling/FormHandle";
import Conditional from "./class-6-conditional-&-list-rendering/Conditional";
// import List from "./class-6-conditional-&-list-rendering/List";
import UseEffect from "./class-7-8-useEffect-promises/UseEffect";
import Promise from "./class-7-8-useEffect-promises/Promise";
import AmirContext from "./Context";
import Reducer from "./Reducer";
// import Feedback from "./Feedback/Feedback";
// import NavigationBar from "./projectBook/NavigationBar";
// import Carousel from "./projectBook/Carousel";
import Child from "./Class-useContext/Child";
// import ChildRef from "./Feedback/useRef/useRef";
import Usememo from "./useMemo/Usememo";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import {Browser}
function App() {
  const [appTheme, setAppTheme] = React.useState("light");
  return (
    <div>
      <AmirContext.Provider value={appTheme}>
        <FormHandle />
        {/* <Conditional /> */}
        {/* <List /> */}
        {/* <UseEffect /> */}
        {/* <Promise /> */}
        {/* <Child /> */}
        {/* <Reducer /> */}
        {/* <Feedback/> */}
        {/* <ChildRef /> */}
        {/* <NavigationBar /> */}
        {/* <Carousel /> */}
        {/* <Usememo /> */}
      </AmirContext.Provider>
    </div>
  );
}

export default App;
