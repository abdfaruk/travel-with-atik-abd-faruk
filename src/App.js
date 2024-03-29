import './App.css';
import Header from './Pages/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Mein from './Pages/Home/MeinSection/Mein';
import WorkWithMe from './Pages/Home/WorkWithMe/WorkWithMe';
import Trip from './Pages/Trip/Trip';
import Footer from './Pages/Footer/Footer';
import Services from './Pages/Services/Services';
import Booking from './Pages/Booking/Booking/Booking';
import AuthProvider from './context/AuthProvider';
import Login from './Pages/Login/Login/Login';
import PrivetRout from './Pages/Login/PrivetRout/PrivetRout';
import Blog from './Pages/Blog/Blog';
import BookingProcess from './Pages/Booking/BookingProcess/BookingProcess';
import MyOrders from './Pages/Booking/MyOrders/MyOrders';
import Contact from './Pages/Contact/Contact';
import Message from './Pages/Message/Message';
import ServicesFixed from './Pages/ServicesFixed/ServicesFixed';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
          <Home></Home>
          <Mein></Mein>
          <Services></Services>
          <Blog></Blog>
          <WorkWithMe></WorkWithMe>
          <Trip></Trip>
          </Route>
          <Route path="/home">
          <Home></Home>
          <Mein></Mein>
          <Services></Services>
          <Blog></Blog>
          <WorkWithMe></WorkWithMe>
          <Trip></Trip>
          </Route>
          <Route path="/login">
          <Login></Login>
          </Route>
          <Route path="/about">
          <Mein></Mein>
          <WorkWithMe></WorkWithMe>
          </Route>
          <Route path="/blog">
          <Blog></Blog>
          <Trip></Trip>
          </Route>
          <PrivetRout path="/myOrder">
            <MyOrders></MyOrders>
          </PrivetRout>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/message">
            <Message></Message>
          </Route>
          <PrivetRout path="/servicesFixed">
            <ServicesFixed></ServicesFixed>
          </PrivetRout>
          <Route path="/places">
          <Services></Services>
          </Route>
          <PrivetRout path="/booking/:serviceId">
            <Booking></Booking>
          </PrivetRout>
          <PrivetRout path="/booking_process">
            <BookingProcess></BookingProcess>
          </PrivetRout>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
