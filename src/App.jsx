import './App.css'
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Practice1 from "./pages/Practice1";
import Practice2 from "./pages/Practice2";
import Catalog from "./pages/Catalog";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout title="Character Catalog" />}>
        <Route index element={<Practice1 />} />
        <Route path="practice2" element={<Practice2 />} />
        <Route path="catalog" element={<Catalog />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;