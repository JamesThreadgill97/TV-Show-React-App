import "./App.css";
import * as Pages from "./pages";
import { Route, Routes } from "react-router-dom";
import * as Componenets from "./components";
import { ShowProvider } from "./contexts";

function App() {
  return (
    <ShowProvider>
      <Routes>
        <Route path="/" element={<Componenets.Header />}>
          <Route index element={<Pages.Homepage />} />
          <Route path="/shows">
            <Route index element={<Pages.Showspage />} />
            <Route path=":id" element={<Pages.Showpage />} />
          </Route>
          <Route path="/search" element={<Pages.Searchpage />} />
          <Route path="*" element={<Pages.NotFoundpage />} />
        </Route>
      </Routes>
    </ShowProvider>
  );
}

export default App;
