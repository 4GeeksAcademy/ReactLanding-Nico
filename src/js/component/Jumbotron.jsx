import React from "react";

export const Jumbotron = () => {
    return(
        <div className="container-fluid py-5">
             <div className="p-5 mb-4 bg-light rounded-3">
                <h1 className="display-3 fw-bold">A Warm Welcome!</h1>
                <p className="col fs-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, quibusdam sed molestias autem necessitatibus voluptatibus animi explicabo quae asperiores at laudantium sequi, 
                pariatur assumenda ad impedit voluptates corrupti itaque odio!</p>
                <button className="btn btn-primary btn-lg" type="button">Call to Action!</button>
            </div>
        </div>
    );
}

export default Jumbotron;