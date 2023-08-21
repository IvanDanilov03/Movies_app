import { Route, Routes } from "react-router-dom";

import AllFilms from "./pages/AllFilms";
import FavoriteFilms from "./pages/FavouriteFilms";
import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <Layout>
      <Routes >
        <Route path="/" element={<AllFilms />}/>
        <Route path="/favorites" element={<FavoriteFilms/>}/>
      </Routes >
    </Layout>
  );
};
console.log(parent.document.getElementById("body-widget"));
export default App;
