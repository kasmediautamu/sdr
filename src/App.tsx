import React, {Suspense, useState, useEffect} from "react";

import {Route, Routes} from "react-router-dom";
import AppLoading from "./components/landing-spinner";
import LoadingSuspense from "./components/loading-suspense";

const Login = React.lazy(() => import("./containers/login"));

function App() {
 const [isLoading, setIsLoading] = useState(true);
 useEffect(() => {
  setTimeout(() => {
   setIsLoading(false);
  }, 1500);
 }, []);
 return (
  <>
   {isLoading ? (
    <AppLoading />
   ) : (
    <Routes>
     <Route
      path="/"
      element={
       <Suspense fallback={<LoadingSuspense />}>
        <Login />
       </Suspense>
      }
     />
    </Routes>
   )}
  </>
 );
}

export default App;
