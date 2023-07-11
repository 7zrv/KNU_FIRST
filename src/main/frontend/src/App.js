import React, { Component, useEffect, useState } from "react";
import Header from "./components/header";
import VersionList from "./versionList";
function App() {
  return (
    <div className="container">
      <Header />
      <VersionList />
    </div>
  );
}

export default App;
