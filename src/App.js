import React, { Component } from 'react';
import './App.css'
import photo1  from './assets/photo1.jpg';
import photo2 from './assets/photo2.jpg';
import photo3 from './assets/photo3.jpg';
import photo4 from './assets/photo4.jpg';
import photo5 from './assets/photo5.jpg';
import photo6 from './assets/photo6.jpg';

class App extends Component {

   state = {
     index: 0,
     photos: [ photo1, photo2, photo3, photo4, photo5, photo6 ]
   }

   handleClickNext = () => {
     const {index, photos} = this.state;
     if (index < photos.length - 1) {
      this.setState({
      index: index + 1
    })
  }  else if (index === photos.length) {
    this.setState({
      index: photos.length - 1
    })
  }
   }


   handleClickPrevious = () => {
     const {index, photos} = this.state
    if(index <= photos.length - 1 && index > 0) {
      this.setState({
        index:index - 1
      })
    } if (index === 1) {
      this.setState({
        index: 0
      })
    }
  }

  render() {
    return (
      <div className="main">
        <h1>Banner React JS</h1>
        <section>
        <button onClick = {this.handleClickNext}>next</button>
        <button onClick = {this.handleClickPrevious}>Previous</button>
        <img className="photo__box" src={this.state.photos[this.state.index]} alt=""/>
        </section>
      </div>
    );
  }
}

export default App;

