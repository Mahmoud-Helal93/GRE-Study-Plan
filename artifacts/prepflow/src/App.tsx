import { Switch, Route } from "wouter";
import Home from "./pages/Home";
import StudyPlan from "./components/StudyPlan";

export default function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/plan" component={StudyPlan} />
      <Route>
        <Home />
      </Route>
    </Switch>
  );
}
