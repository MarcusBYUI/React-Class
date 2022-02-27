import { Route, Routes } from "react-router-dom";

import NewMeetupsPage from "./pages/NewMeetups";
import FavouriteMeetupsPage from "./pages/FavouriteMeetups";
import AllMeetupsPage from "./pages/AllMeetups";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
      <div>
          <MainNavigation/>
    <Routes>
      <Route path="/" exact element={<AllMeetupsPage/>}/>
      <Route path="/new-meetup" element={<NewMeetupsPage/>}/>
      <Route path="/favourites" element={<FavouriteMeetupsPage/>}/>
    </Routes>
    </div>
  );
}

export default App;
