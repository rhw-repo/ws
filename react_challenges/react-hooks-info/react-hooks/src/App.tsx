import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  //Navigate,
} from "react-router-dom";
import HookUseState from "./pages/HookUseState";
import Home from "./pages/Home";
import HookUseCallback from "./pages/HookUseCallback";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Main routes for your application pages */}
        <Route path="/" element={<Home />} />
        <Route path="/use-effect" element={<HookUseState />} />
        <Route path="/use-callback" element={<HookUseCallback />} />
        {/*  <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/profile" element={<ProfilePage />} /> */}

        {/* Optional redirect for legacy path */}
        {/*  <Route path="/home" element={<Navigate to="/" replace />} /> */}

        {/* Fallback for unmatched routes */}
        {/*  <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
