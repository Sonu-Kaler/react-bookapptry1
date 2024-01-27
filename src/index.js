import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";
// import {BrowserRouter} from 'react-router-dom';

const rt = createRoot(document.getElementById('root'));
rt.render(
<App />
);

