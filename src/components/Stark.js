import React from 'react';
import axios from 'axios';

class Stark extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      info: [],
    }
  }
  async getStark(){
    try {
      const res = await axios.get("http://www.anapioficeandfire.com/api/houses/362");
      
      console.log(res.length.data)
      console.log(res.data.born)
      this.setState({
        info: res.data,
      })
    } catch {

    }
  }
  
  componentDidMount() {
    this.getStark();
  
  }
  render() {
      return (
          <div>
              {
                  this.state.info.map(house => {
                      console.log(house);
                      return (
                          <div className="house">
                              <h2>{house.founder.name}</h2>
                          </div>
                      )
                  })
              }
          </div>
      )
  }
}
export default Stark;