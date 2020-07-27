import React from 'react';
import './App.css';
// import axios from 'axios';
import Margaery from './components/Margaery';
import Baratheon from './components/Baratheon';
import RobBar from './components/RobBar';
import CatStark from './components/CatStark';
import Lannister from './components/Lannister';
import Stark from './components/Stark';
import Targaryen from './components/Targaryen';

// const HOUSE_URL = " http://www.anapioficeandfire.com/api/houses/";

function App() {
// class App extends React.Component {
  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     info: [],
  //   }
  // }
  // async getMargaery(){
  //   try {
  //     const res1 = await axios.get("http://anapioficeandfire.com/api/characters/16");
      
  //     console.log(res1.length.data)
  //     console.log(res1.data.born)
  //     this.setState({
  //       info: res1.data,
  //     })
  //   } catch {

  //   }
  // }
  // async getTargaryen(){
  //   try {
  //     const res2 = await axios.get("http://www.anapioficeandfire.com/api/houses/378");
  //     console.log(res2.data)
  //     console.log(res2.data.born)
  //     this.setState({
  //       info: res2.data,
  //     })
  //   } catch {

  //   }
  // }
  // componentDidMount() {
  //   this.getMargaery();
  //   this.getTargaryen();
  // }
  // render() {
    return (
    <div className="App">
      <h2>Where was Margaery Tyrell born?</h2>
      <Margaery />
      {/* {
        this.state.info.map(margaery => {
          console.log(margaery);
          return (
            <div className="margaery">
              <h3>{margaery.born}</h3>
            </div>
          )
        }) 
      } */}
      <h2>What region is House Targaryen in?</h2>
      <Targaryen />
      <h2>What is the coat of arms of House Lannister?</h2>
      <Lannister />
      <h2>What is the second seat of House Baratheon?</h2>
      <Baratheon />
      <h2>What is Robert Baratheon's second alias?</h2>
      <RobBar />
      <h2>What's the name of the founder of House Stark?</h2>
      <Stark />
      {/* (You have to chain fetch requests!) */}
      <h2>What are the titles of Catelyn Stark's three POV books?</h2>
      {/* (Look into Promise.all to request these simultaniously) */}
      <CatStark />
    </div>


  );
  }
  
// }

export default App;
