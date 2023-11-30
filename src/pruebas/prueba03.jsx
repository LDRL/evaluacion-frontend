import React, { Component } from "react";
import { render } from "react-dom";


class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    let promesa = fetch("https://jsonplaceholder.typicode.com/posts");

    promesa
      .then(response => response.json())
      .then(data => {
        this.setState({
          articles: data
        });
      });
  }

  render() {
    return (
      
        <div>
          {this.state.articles.map(article => {
            return (
              <div className='mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl' key={article.id}>
                <h2 className='font-black text-3xl text-center'>{article.title}</h2>
                <p className='text-xl mt-5 mb-10 text-center'>{article.body}</p>
              </div>
            );
          })}
        </div>
    );
  }
}

export default function BlogApp() {
  return (
    <div>
      <h1>Prueba 03</h1>
      <p>
        1. Revise y entienda que hace el siguiente componente
      </p>
      <p>
        2. Usando cualquier técnica de maquetación web, mejore
        la presentación de los datos al usuario
      </p>
      <p>
        3. Resuelva el Warning: Each child in a list should have a unique "key" prop.
      </p>
      <hr />
      <Blog />
    </div>
  );
}
