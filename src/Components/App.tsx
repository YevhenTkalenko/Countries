import { Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import Main from "./Main/Main";
import HomePage from "./Pages/HomePage";
import NotFoundPage from "./Pages/NotFoundPage";

import { useFetch } from "./Api/useFetch";
import DetailsPage from "./Pages/DetailsPage";

interface Props {}
const App = (props: Props) => {
  const { allCountries, isLoading, isError } = useFetch();

  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                allCountries={allCountries}
                isLoading={isLoading}
                isError={isError}
              />
            }
          />
          <Route path="/details/:name" element={<DetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Main>
    </>
  );
};
export default App;
