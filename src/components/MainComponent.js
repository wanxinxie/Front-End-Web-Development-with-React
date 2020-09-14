// container component; similar to App.js
import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }

  onDishSelect(dishId) {
       this.setState({ selectedDish: dishId});
   }


      
render() {
  return (
    <div className="App">
    <Navbar dark color="primary">
       <div className="container">
         <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
       </div>
     </Navbar>
        <Header />
      <Menu dishes={this.state.dishes}
      onClick={(dishId) => this.onDishSelect(dishId)} />
      <Dishdetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} /> {/* filter will supply an array, pick the first one [0] */}
<Footer />
    </div>
  );
}
}

export default Main;
