import React, { Component } from "react";
import FruitCard from "./components/FruitCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import fruits from "./fruits.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    fruits
  };

  removeFruit = id => {
    // Filter this.state.fruits for fruits with an id not equal to the id being removed
    const fruits = this.state.fruits.filter(fruit => fruit.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ fruits });
  };

  // Map over this.state.fruits and render a FruitCard component for each fruit object
  render() {
    return (
      <Wrapper>
        <Title>Fruits List</Title>
        {this.state.fruits.map(fruit => (
          <FruitCard
            removeFruit={this.removeFruit}
            id={fruit.id}
            key={fruit.id}
            name={fruit.name}
            image={fruit.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;