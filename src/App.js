import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
//import Footer from "./components/Footer";
//import Header from "./components/Header";
import ViewToDo from "./components/ViewToDo";
import AddToDo from "./components/AddToDo";
import ToDoDetail from "./components/ToDoDetail";
import RegisterUser from "./components/RegisterUser";
//import TestFetch from "./services/TestFetch";
import HomePage from "./components/HomePage";
import EditTasks from "./components/EditTasks";

export default function App() {
  return (
    <>
      {/* <Header /> */}
      <div className="content">
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/viewtodo" element={<ViewToDo />} />
            <Route path="/addtodo" element={<AddToDo />} />
            <Route path="/tododetail" element={<ToDoDetail />} />
            <Route path="/registeruser" element={<RegisterUser />} />
            <Route path="/edittasks" element={<EditTasks />} />
          </Routes>
        </main>
      </div>
      {/* <TestFetch /> */}
      {/* <Footer /> */}
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
