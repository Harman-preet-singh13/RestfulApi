import UsingAxios from "./components/UsingAxios";

import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  };

  return (
    <div className={` ${darkMode && 'dark'}`}>
      
      <UsingAxios darkMode={darkMode} />
    </div>
  );
}

export default App;
