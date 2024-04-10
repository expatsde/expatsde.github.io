// App.jsx
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "./Routes"; // Import your routes from the appropriate file
import Layout from "./layout/MainLayout";

function App() {
  useEffect(() => {
    document.title = "ExpatsDE";
    window.scrollTo(0, 0);
  }, []);

  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <Layout>
                <route.component />
              </Layout>
            }
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
