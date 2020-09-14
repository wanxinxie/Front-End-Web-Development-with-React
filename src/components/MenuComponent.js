import React from "react";
import { Card, CardImg, CardTitle, CardImgOverlay} from "reactstrap";

function RenderMenuItem({dish , onClick }){
  return(              <Card onClick={() => onClick(dish.id)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>);
}

const Menu = (props) => {  {/* the same as "function Menu(props){} ""*/}
const menu = props.dishes.map((dish) => {
    return (
      <div key={dish.id} className="col-12 col-md-5 m-1">
        <RenderMenuItem dish={dish} onClick={props.onClick} />
      </div>
    );
});
console.log('Menu Component render invoked');


  return(
      <div className="container">
          <div className="row">
              {menu}
          </div>
          </div>
      );
}



    export default Menu;

{/*

import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle,Breadcrumb,BreadcrumbItem } from 'reactstrap';


class Menu extends Component {
    constructor(props) {
        super(props);
    }


     render() {
         const menu = this.props.dishes.map((dish) => {
             return (
               <div key={dish.id} className="col-12 col-md-5 m-1">
                 <Card onClick={() => this.props.onClick(dish.id)}>
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
              {/*   {this.renderDish(this.state.selectedDish)} works the same as <DishdetailComponent dish= {this.state.selectedDish} />

             </div>
         );
     }
 }


export default Menu;*/}
