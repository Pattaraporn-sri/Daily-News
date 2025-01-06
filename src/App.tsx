import "./App.css";
import { RouterProvider } from "react-router-dom";
import mainRoute from "./Routes/MainRouter";

function App() {
  return (
    <>
      <RouterProvider router={mainRoute} />
    </>
  );
}

export default App;
