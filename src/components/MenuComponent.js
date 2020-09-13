import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import DishetailComponent from './DishdetailComponent';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedDish: null
        }
        console.log('Menu Component constructor invoked');
    }

    componentDidMount(){
      console.log('Menu Component componentDidMount invoked');
    }

    onDishSelect(dish) {
         this.setState({ selectedDish: dish});
     }

     renderDish(dish) {
  /*       if (dish != null)
             return(
                 <Card>
                     <CardImg top src={dish.image} alt={dish.name} />
                     <CardBody>
                       <CardTitle>{dish.name}</CardTitle>
                       <CardText>{dish.description}</CardText>
                     </CardBody>
                 </Card>
             );        */
        if (dish != null)
          return <DishetailComponent dish={dish} />; // <Classname dishes={this.state.dishes} />
          else return <div />;
        /*        return(
                 <div></div>
             );*/
     }

     render() {
         const menu = this.props.dishes.map((dish) => {
             return (
               <div  className="col-12 col-md-5 m-1">
                 <Card key={dish.id}
                   onClick={() => this.onDishSelect(dish)}>
                   <CardImg width="100%" src={dish.image} alt={dish.name} />
                   <CardImgOverlay>
                       <CardTitle>{dish.name}</CardTitle>
                   </CardImgOverlay>
                 </Card>
               </div>
             );
         });
         console.log('Menu Component render invoked');


         return (
             <div className="container">
                 <div className="row">
                     {menu}
                 </div>
                 {this.renderDish(this.state.selectedDish)}
             </div>
         );
     }
 }


export default Menu;
