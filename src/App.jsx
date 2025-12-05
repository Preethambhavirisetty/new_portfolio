import { useState } from "react";
import Terminal from "./Terminal";
import LoadingScreen from "./LoadingScreen";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="app">
      {isLoading ? (
        <LoadingScreen onComplete={handleLoadingComplete} />
      ) : (
        <Terminal />
      )}
    </div>
  );
}

export default App;