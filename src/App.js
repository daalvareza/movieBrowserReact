import { useState } from "react";
import { MyRoutes } from "./Router/MyRoutes";

function App() {
  return (
      <div className="layout">
        <MyRoutes/>
        <footer className="footer">
            &copy; Github: .com
        </footer>
    </div>
  );
}

export default App;
