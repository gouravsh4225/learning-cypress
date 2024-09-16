import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import { TaskPage } from "./pages/Task";
import { PageLayout } from "./pages/PageLayout";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path=""
        element={
          <PageLayout>
            <HomePage />
          </PageLayout>
        }
      />
      <Route
        path="/about"
        element={
          <PageLayout>
            <AboutPage />
          </PageLayout>
        }
      />
      <Route
        path="/task"
        element={
          <PageLayout>
            <TaskPage />
          </PageLayout>
        }
      />
    </Routes>
  );
};
