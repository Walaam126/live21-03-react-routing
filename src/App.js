import { AppWrapper } from "./components/styles";
import Home from "./components/Home";
import InstructorProfile from "./components/InstructorProfile";
import NotFound from "./components/NotFound";
import { useState } from "react";
import { Route, Switch } from "react-router";
import { useParams, Redirect } from "react-router-dom";
const App = ({ instructors }) => {
  const [currentPage, setCurrentPage] = useState("/");
  const homemadeRouter = () => {
  };
 
  return (
    <AppWrapper>
      <Switch>  
      <Route path="/404" >
       <NotFound />
      </Route>  
   <Route path="/instructors/:instructorSlug" >
    <InstructorProfile
            instructors={instructors}
          />
    </Route>
    <Route exact path="/">
     <Home instructors={instructors} />
        </Route>
     <Redirect to="/404"/>
      </Switch>
      </AppWrapper>
  )
}

export default App;
