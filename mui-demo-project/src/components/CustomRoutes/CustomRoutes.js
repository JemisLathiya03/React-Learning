import React from "react";
import PageLayout from "../PageLayout/PageLayout";
import { Routes, Route } from "react-router-dom";
import Authentication from "../Authentication/Authentication";
import Home from "../Home/Home";
import Database from "../Database/Database";
import Storage from "../Storage/Storage";
import Functions from "../Functions/Functions";
import Hosting from "../Hosting/Hosting";
import MachineLearning from "../MachineLearning/MachineLearning";

const CustomRoutes = () => {
  return (

<Routes>
<Route path="/" element={<PageLayout />}>
    <Route index element={<Home />} /> 
        <Route exact path="authentication" element={<Authentication />} />
        <Route path="database" element={<Database />} />
        <Route path="storage" element={<Storage />} />
        <Route path="hosting" element={<Hosting />} />
        <Route path="functions" element={<Functions />} />
        <Route path="machine-learning" element={<MachineLearning />} />
   </Route>
   </Routes>
  );
};

export default CustomRoutes;
