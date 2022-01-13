import React from 'react';

const PersonCard = props => {
    return(
        <div>
            <h1>{props.person1.lastName}, {props.person1.firstName}</h1>
            <p>Age: {props.person1.age}</p>
            <p>Hair Color: {props.person1.hairColor}</p>

            <h1>{props.person2.lastName}, {props.person2.firstName}</h1>
            <p>Age: {props.person2.age}</p>
            <p>Hair Color: {props.person2.hairColor}</p>

            <h1>{props.person3.lastName}, {props.person3.firstName}</h1>
            <p>Age: {props.person3.age}</p>
            <p>Hair Color: {props.person3.hairColor}</p>

            <h1>{props.person4.lastName}, {props.person4.firstName}</h1>
            <p>Age: {props.person4.age}</p>
            <p>Hair Color: {props.person4.hairColor}</p>

        </div>
    );
}

export default PersonCard;