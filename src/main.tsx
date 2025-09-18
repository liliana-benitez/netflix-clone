import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"
import { BrowserRouter, Routes, Route } from "react-router"
import Detail from "./components/detail.tsx"
import WatchlistProvider from "./components/watchlistProvider.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <WatchlistProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/:type/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </WatchlistProvider>
  </StrictMode>
)
