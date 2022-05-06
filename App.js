import { Landing, Error, Register, ProtectedRoute } from "./pages";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {
  Tests,
  Tutorials,
  Profile,
  Stats,
  SharedLayout,
} from "./pages/dashboard";
import Java from "./pages/dashboard/tutorials/Java";
import Html from "./pages/dashboard/tutorials/Html";
import TutorialDisplay from "./components/TutorialDisplay";
import Test from "./pages/dashboard/tutorials/Test";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Profile />} />
          <Route path="tutorials" element={<Tutorials />} />
          <Route path="tutorials/:id" element={<TutorialDisplay />} />

          <Route path="tests" element={<Tests />}></Route>
          <Route path="tests/test1" element={<Test />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
