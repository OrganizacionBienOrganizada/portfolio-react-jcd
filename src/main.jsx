import { createRoot } from "react-dom/client"
import { App } from "./App.jsx"
import { BrowserRouter } from "react-router-dom"

import "./index.css"
import "./components/Pages/SmallerPages.css"

createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
)