import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import ViewToDo from "./ViewToDo";
import AddToDo from "./AddToDo";
import ToDoDetail from "./ToDoDetail";
import RegisterUser from "./RegisterUser";
import TestFetch from "./TestFetch";

export default function App() {
  return (
    <>
      <Header />
      <div className="content">
        <main>
          <Routes>
            <Route
              path="/"
              element={<h1>Welcome to Stay Organized Website</h1>}
            />
            <Route path="/viewtodo" element={<ViewToDo />} />
            <Route path="/addtodo" element={<AddToDo />} />
            <Route path="/tododetail" element={<ToDoDetail />} />
            <Route path="/registeruser" element={<RegisterUser />} />
          </Routes>
        </main>
      </div>
      <TestFetch />
      <Footer />
    </>
  );
}

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
