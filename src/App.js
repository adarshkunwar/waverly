import Layout from "./Components/HOC/Navigation/Layout";

// ? I might not need router in this project
// eslint-disable-next-line
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Layout>Hello, World!</Layout>
    </div>
  );
}

export default App;
