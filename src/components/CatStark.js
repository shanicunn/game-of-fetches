import React from 'react';
import axios from 'axios';

class CatStark extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      info: [],
    }
  }
  async getCatStark(){
    try {
      const res = await axios.get("http://www.anapioficeandfire.com/api/characters/232");
      
      console.log(res.length.data)
      console.log(res.data)
      this.setState({
        info: res.data,
      })
    } catch {

    }
  }
  
  componentDidMount() {
    this.getCatStark();
  
  }
  render() {
      return (
          <div>
              {
                  this.state.info.map(character => {
                      console.log(character);
                      return (
                          <div className="character">
                              <h2>{character.povBooks}</h2>
                          </div>
                      )
                  })
              }
          </div>
      )
  }
}
export default CatStark;