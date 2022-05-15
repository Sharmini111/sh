import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css"


import Man from './man'
import Reviews from './pages/Reviews'

import CustomerList from './pages/CustomerList'
import Register from './pages/Register'
import PostRequirement from './pages/PostRequirement'
import AskQuestion from './pages/AskQuestion'
import AddSubscribe from './pages/AddSubscribe'
import GetPostRequirements from './pages/GetPostRequirements'

import SendPromo from './pages/SendPromo'




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        
          <Route path="/man" element={<Man />} />
          <Route path="/customerList" element={<CustomerList />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register" element={<Register />} />
          <Route path="/postRequirement" element={<PostRequirement />} />
          <Route path="/askQuestion" element={<AskQuestion />} />
          <Route path="/addSubscribe" element={<AddSubscribe />} />
          <Route path="/sendPromo" element={<SendPromo />} />
          <Route path="/reviews" element={<Reviews />} />

          <Route path="/getPostRequirements" element={<GetPostRequirements />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
