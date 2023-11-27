import SideBar from "../components/Sidebar/SideBar";
import { BrowserRouter as Route } from "react-router-dom";
import Main from "./ModelPages/Main";
import Users from "./ModelPages/Users";
import Course from "./ModelPages/Course";
function HomePage() {
  return (
    <SideBar>
      <Route path="/" component={Main} />
      <Route path="/users" component={Users} />
      <Route path="/course" component={Course} />
      <Route path="*" component={<> Not found</>} />
    </SideBar>
  );
}

export default HomePage;
