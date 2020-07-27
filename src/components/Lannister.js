import React from 'react';
import axios from 'axios';

class Lannister extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            info : [],
        }
    }
    async getLannister() {
        try {
            const res = await axios.get("http://www.anapioficeandfire.com/api/houses/229");
            this.setState({
                info: res.data,
            })
        } catch {

        }   
    }

        componentDidMount() {
            this.getLannister();
        }
 
    render() {
        return (
            <div>
                {
                    this.state.info.map(house => {
                        console.log(house);
                        return (
                            <div className="house">
                                <h2>{house.coatOfArms}</h2>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Lannister;