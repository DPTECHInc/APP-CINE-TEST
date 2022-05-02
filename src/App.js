import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Views/Home";
import Films from "./Views/Films";
import FilmsList from "./Views/Films/List";
import FilmDetail from "./Views/Films/Detail";
import { NavBar } from "./components/navbar";

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/films" element={<Films />} />
                    <Route path="/films/list" element={<FilmsList />} />
                    <Route path="/films/details/" element={<FilmDetail />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
