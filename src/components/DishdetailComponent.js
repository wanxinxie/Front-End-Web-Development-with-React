import React from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';


function RenderDish({dish}) {
        return(
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }

function RenderComments({comments}){
        if (comments != null) {
          let list = comments.map((comments)=>{

    return(                    <li key={comments.id} >
                        <div> </div>
                    </li>

                )
            })
            return(
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        <ul className="list-unstyled">
                            {list}
                        </ul>
                    </div>
            )
        }
        else{
            return(
                <div></div>
            )
        }
    }

    const Dishdetail = (props) => {
      if (props.dish != null) {
     return(
         <div className="container">
         <div className="row">
         <RenderDish dish={props.dish} />
<RenderComments comments={props.dish.comments} />
</div>
</div>
)
}else{
return(
    <div></div>
)
}

}
{/*
  function  RenderDish({dish}) {
        if (dish != null) {
            return(
              <div className="col-12 col-md-5 m-1">
                  <Card>
                      <CardImg width="100%" src={dish.image} alt={dish.name} />
                      <CardBody>
                          <CardTitle>{dish.name}</CardTitle>
                          <CardText>{dish.description}</CardText>
                      </CardBody>
                  </Card>
              </div>
          )
      }
      else{
        return(
                <div></div>
            )
        }
    }


    function RenderComments({comments}) {
      if (comments != null) {
        return (<div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            {comments.map(comment => (
              <ul key={comment.id} className="list-unstyled">
                <li className="mb-2">{comment.comment}</li>
                <li>
                  -- {comment.author}{" "}
                  {new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit"
                  }).format(new Date(Date.parse(comment.date)))}
                </li>
              </ul>
            ))}
          </div>
        );
      } else
      { console.log('fail');
        return <div />};
    }





 const Dishdetail = props => {
   const {dish} = props;
        console.log('render dish');

        return dish?(
            <div className="container">
                <div className="row">
                        <RenderDish dish = {props.dish} />
                        <RenderComments comments = {props.dish.comments} />
                </div>
            </div>
        ):(
            <div></div>
        )
        console.log('render comment');
    }

export default Dishdetail;







{/*
class DishetailComponent extends Component {
  renderComments(comments) {
    if (comments != null) {
      let options = { year: "numeric", month: "short", day: "numeric" };
      return comments.map(comment => (
        <ul key={comment.id} className="list-unstyled">
          <li className="mb-2">{comment.comment}</li>
          <li>
            -- {comment.author}{" "}
            {new Date(comment.date).toLocaleDateString("en-US", options)}
          </li>
        </ul>
      ));
    } else return <div />;
  }

  renderDish(dish) {

     if (dish != null)
       return <DishetailComponent dish={dish} />; // <Classname dishes={this.state.dishes} />
       else return <div />;

  }

  render() {
    const { dish } = this.props;
    return (
  <div className="row">
    <div className="col-12 col-md-5 m-1">
      <Card>
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    </div>
    <div className="col-12 col-md-5 m-1">
      <h4>Comments</h4>
      {this.renderComments(dish.comments)}
    </div>
  </div>
);
}
}
*/}
export default Dishdetail;
