import React from "react";

export const Card= (props) => {

    return(
    <div className="card d-flex mx-auto" style={{"width": 20 + "rem"}}>
      <img src={props.imgSrc} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores exercitationem, doloribus laboriosam iste
        optio et cum eum dolor, obcaecati facilis tenetur? Quaerat, aperiam esse temporibus pariatur vel deleniti veritatis necessitatibus.</p>
        <div className="text-center">
          <a href="#" className="btn btn-primary">Find out more!</a>
        </div>
      </div>
    </div>
  
  );
}

export default Card;