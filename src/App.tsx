import React, {Suspense, useState, useEffect} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import PrivateRoute from "./components/auth/private";
import AppLoading from "./components/landing-spinner";
import Layout from "./components/lay-out";
import Dashboard from "./containers/login/dashboard";

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
       <Suspense fallback={<AppLoading />}>
        <Login />
       </Suspense>
      }
     />

     <Route
      path="/dashboard"
      element={
       <PrivateRoute>
        <Dashboard />
       </PrivateRoute>
      }
     />
     <Route
      path="/assets"
      element={
       <PrivateRoute>
        <Layout title="Asset Management">
         <>assets</>
        </Layout>
       </PrivateRoute>
      }
     />
     <Route
      path="/mdr"
      element={
       <PrivateRoute>
        <Layout title="MDR">
         <>mdr</>
        </Layout>
       </PrivateRoute>
      }
     />
     <Route
      path="/end-point"
      element={
       <PrivateRoute>
        <Layout title="End Point">
         <>endpoint</>
        </Layout>
       </PrivateRoute>
      }
     />
     <Route
      path="/ndr"
      element={
       <PrivateRoute>
        <Layout title="NDR">
         <>ndr</>
        </Layout>
       </PrivateRoute>
      }
     />
     <Route
      path="/risk-management"
      element={
       <PrivateRoute>
        <Layout title="Risk Management">
         <>Risk Management</>
        </Layout>
       </PrivateRoute>
      }
     />
     <Route
      path="/account-management"
      element={
       <PrivateRoute>
        <Layout title="Account Management">
         <>Account Management</>
        </Layout>
       </PrivateRoute>
      }
     />
     <Route
      path="/help"
      element={
       <PrivateRoute>
        <Layout title="Help">
         <>Help</>
        </Layout>
       </PrivateRoute>
      }
     />
     <Route path="*" element={<Navigate to="/" />} />
    </Routes>
   )}
  </>
 );
}

export default App;
