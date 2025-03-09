import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import data from './data';

 //generamos el HTML de una persona
 const Person = (props) => {
    return (
        <article id={props.id} className="person">
        <img src={props.image} alt=""/>
        <div>
          <h4>{props.name}</h4>
          <p>{props.age} años</p>
        </div>
      </article>
    )
  }

  //generamos el componente de la lista de personas
  const Everyone = () => {
    const people = []
    for (const person of data) {
        people.push(Person(person))
    } 

    return (
        <main>
            <section className="container">
            <h3>Hoy hay {data.length} cumpleaños</h3>
                {people}
            </section>
        </main>
    )
  }

  //renderizamos el componente 'main' en el DOM
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Everyone />);
