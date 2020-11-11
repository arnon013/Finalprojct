import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import "./App.css";
import PrivateRoute from "react-private-route";
import Header from "./components/HeaderComponent/Header";
import Booking from "./pages/Booking";
import TrackingF from "./pages/TrackingF";
import Book from "./components/BookComponent/Book";
import Login from "../src/components/Login";
import Cart from "../src/components/CartComponent/Cart";
import Pay from "./components/CartComponent/Pay";
import Register from "./pages/Register";
import Avatar from "./components/ProfileComponent/Avatar";
import Product from "./pages/Product";
import Alnum from "./pages/Alnum";
import Search from "./pages/Search";
import Purchase from "./pages/Purchase";
import Propart from "./Propart/Propart";
import Fix from "./components/FixComponent/Fix";
import Manager from "./Fix/Manager";
import Widen2 from "./Fix/Widen2";
import Check_parts from "./Fix/Check_parts";
import Out_parts from "./Fix/Out_parts";
import Widen from "./Fix/Widen";
import Widen1 from "./Fix/Widen1";
import Check from "./Fix/Check";
import Check1 from "./Fix/Check1";
import Updatefix from "./Fix/Updatefix";
import Edit from "./pages/Edit";
import Statusfix from "./pages/Statusfix";
import Websites from "./Manage/websites";
import Update from "./Manage/update";
import Create from "./Manage/create";
import Editstatus from "./pages/Editstatus";
import Updatebook from "./Fix/Updatebook";
import Editbook from "./Fix/Editbook";
import Part from "./Fix/Part";
import Basket from "./components/CartComponent/Basket";
import Filter from "./components/CartComponent/Filter";
import Main from "./components/MainComponent/Main";
import Showpart from "./components/PartComponent/Showpart";
import Hook from "./Fix/Hook";
import Basketpart from "./components/PartComponent/Basketpart";
import Partdetail from "./components/PartComponent/Partdetail";
import Admin from "./AdminCompomemt/Admin";
import Productpart from "./components/PartComponent/Productpart";
import testchange from "./components/ProfileComponent/testchange";
import Dashboard from "./AdminCompomemt/Dashboard";
import Status from "./AdminCompomemt/Status";
import Editfix from "./AdminCompomemt/Editfix";
import Headeradmin from "./components/HeaderComponent/Headeradmin";
import Bookdetail from "./pages/Bookdetail";
import MainRam from "./components/MainComponent/MainRam";
import MainHdd from "./components/MainComponent/MainHdd";
import MainSsd from "./components/MainComponent/MainSsd";
import MainMb from "./components/MainComponent/MainMb";
import MainM2 from "./components/MainComponent/MainM2";
import Choosetech from "./AdminCompomemt/Choosetech";
import Editchoose from "./AdminCompomemt/Editchoose";
import Mainview from "./Manage/mainview";
import Total from "./AdminCompomemt/Total";
import EditOrder from "./AdminCompomemt/EditOrder";
import Statusdetail from "./pages/Statusdetail";
import Tusdetail from "./AdminCompomemt/Tusdetail";
import Bookings from "./pages/Bookings";
import Bookmain from "./pages/Bookmain";
import BookWaitDetail from "./pages/BookWaitDetail";
import Test from "./pages/Test";
import Add from "./Products/Add";
import All from "./Products/All";
import EditProduct from "./Products/EditProduct";
import Detail from "./Manage/detail";
import ShowPro from "./Products/ShowPro";
import Fixinfo from "./AdminCompomemt/Fixinfo";
class App extends Component {
  render() {
    const id = localStorage.getItem("id");
    const status = localStorage.getItem("status");
    return status == 1 ? (
      <div>
        <Header />
        <main role="main">
          <Route exact path="/" component={Main} />
          <Route exact path="/ram" component={MainRam} />
          <Route exact path="/hdd" component={MainHdd} />
          <Route exact path="/ssd" component={MainSsd} />
          <Route exact path="/mb" component={MainMb} />
          <Route exact path="/m2" component={MainM2} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/testchange" component={testchange} />
          <Route exact path="/mainview" component={Mainview} />
          <Route component={Cart} path="/cart" exact />
          <Route exact path="/avatar" component={Avatar} />
          <Route exact path="/alnum" component={Alnum} />
          <Route exact path="/edit" component={Edit} />
          <Route exact path="/pay" component={Pay} />
          <Route exact path="/fix" component={Fix} />
          <Route exact path="/trackingF" component={TrackingF} />
          <Route exact path="/book" component={Book} />
          <Route exact path="/booking" component={Booking} />
          <Route exact path="/statusfix" component={Statusfix} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/editstatus/:id" component={Editstatus} />
          <Route exact path="/purchase" component={Purchase} />
          <Route exact path="/basket" component={Basket} />
          <Route exact path="/filter" component={Filter} />
          <Route exact path="/Bookdetail/:id" component={Bookdetail} />
          <Route exact path="/statusdetail/:id" component={Statusdetail} />
          <Route exact path="/tusdetail/:id" component={Tusdetail} />
          <Route exact path="/bookings" component={Bookings} />
          <Route exact path="/bookmain" component={Bookmain} />
          <Route exact path="/test" component={Test} />
        </main>
      </div>
    ) : status == 2 ? (
      <div>
        <Header />
        <main role="main">
          <Route exact path="/detail/:id" component={Detail} />
          <Route exact path="/all" component={All} />
          <Route exact path="/add" component={Add} />
          <Route exact path="/editpd/:id" component={EditProduct} />
          <Route exact path="/" component={Main} />
          <Route exact path="/ram" component={MainRam} />
          <Route exact path="/showpro" component={ShowPro} />
          <Route exact path="/hdd" component={MainHdd} />
          <Route exact path="/ssd" component={MainSsd} />
          <Route exact path="/mb" component={MainMb} />
          <Route exact path="/m2" component={MainM2} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/testchange" component={testchange} />
          <Route exact path="/mainview" component={Mainview} />
          <Route component={Admin} path="/Admin" exact />
          <Route exact path="/avatar" component={Avatar} />
          <Route exact path="/edit" component={Edit} />
          <Route exact path="/status" component={Status} />
          <Route exact path="/choosetech" component={Choosetech} />
          <Route exact path="/editfix/:id" component={Editfix} />
          <Route exact path="/editorder/:id" component={EditOrder} />
          <Route exact path="/editchoose/:id" component={Editchoose} />
          <Route path="/websites" component={Websites} />
          <Route path="/create" component={Create} />
          <Route path="/update/:id" component={Update} />
          <Route exact path="/fix" component={Fix} />
          <Route exact path="/trackingF" component={TrackingF} />
          <Route exact path="/book" component={Book} />
          <Route exact path="/booking" component={Booking} />
          <Route exact path="/statusfix" component={Statusfix} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/purchase" component={Purchase} />
          <Route exact path="/basket" component={Basket} />
          <Route exact path="/total" component={Total} />
          <Route exact path="/basketpart" component={Basketpart} />
          <Route exact path="/hook" component={Hook} />
          <Route exact path="/filter" component={Filter} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/partdetail" component={Partdetail} />
          <Route exact path="/showpart" component={Showpart} />
          <Route exact path="/productpart" component={Productpart} />
          <Route exact path="/Bookdetail/:id" component={Bookdetail} />
          <Route exact path="/Fixinfo/:id" component={Fixinfo} />
        </main>
      </div>
    ) : status == 3 ? (
      <div>
        <Header />
        <main role="main">
          <Route exact path="/part" component={Part} />
          <Route exact path="/manager" component={Manager} />
          <Route exact path="/widen2" component={Widen2} />
          <Route exact path="/check_parts" component={Check_parts} />
          <Route exact path="/out_parts" component={Out_parts} />
          <Route exact path="/widen" component={Widen} />
          <Route exact path="/widen1/:id" component={Widen1} />
          <Route exact path="/check" component={Check} />
          <Route exact path="/avatar" component={Avatar} />
          <Route exact path="/edit" component={Edit} />
          <Route exact path="/check1" component={Check1} />
          <Route exact path="/updatefix" component={Updatefix} />
          <Route exact path="/editstatus/:id" component={Editstatus} />
          <Route exact path="/updatebook" component={Updatebook} />
          <Route exact path="/editbook/:id" component={Editbook} />
        </main>
      </div>
    ) : (
      <div>
        <Header />
        <main role="main">
          <Route component={Cart} path="/cart" exact />
          <Route exact path="/" component={Main} />
          <Route exact path="/ram" component={MainRam} />
          <Route exact path="/hdd" component={MainHdd} />
          <Route exact path="/ssd" component={MainSsd} />
          <Route exact path="/mb" component={MainMb} />
          <Route exact path="/m2" component={MainM2} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/fix" component={Fix} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/basket" component={Basket} />
          <Route exact path="/filter" component={Filter} />
          <Route exact path="/Bookdetail/:id" component={Bookdetail} />
        </main>
      </div>
    );
  }
}

export default App;
