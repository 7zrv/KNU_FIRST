import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/header";
import VersionList from "./VersionList";
function App() {
  return (
    <>
      <Header />
      <VersionList />
    </>
  );
}

export default App;
