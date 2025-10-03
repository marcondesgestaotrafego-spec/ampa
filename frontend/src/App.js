import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ConstructionPage from "./components/ConstructionPage";
import { Toaster } from "sonner";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ConstructionPage />} />
        </Routes>
      </BrowserRouter>
      <Toaster 
        position="top-right" 
        richColors 
        theme="light"
        toastOptions={{
          style: {
            background: 'white',
            border: '1px solid #d1fae5',
            color: '#064e3b'
          },
        }}
      />
    </div>
  );
}

export default App;