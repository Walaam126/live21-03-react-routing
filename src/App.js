import { AppWrapper } from "./components/styles";
import Home from "./components/Home";
import InstructorProfile from "./components/InstructorProfile";
import NotFound from "./components/NotFound";
import { useState } from "react";
import { Route, Switch } from "react-router";
const App = ({ instructors }) => {
  const [currentPage, setCurrentPage] = useState("/");
  const homemadeRouter = () => {
  };
  return (
    <AppWrapper>
    <Switch>     
   <Route path="/instructors/:instructorSlug" >
    <InstructorProfile
            instructors={instructors}
          />
    </Route>
      
    <Route path="/404" >
       <NotFound />
      </Route>

    <Route exact path="/">
     <Home instructors={instructors} />
   
    </Route>
      </Switch>
      </AppWrapper>
  )
}

export default App;
