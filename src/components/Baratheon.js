import React from 'react';
import axios from 'axios';

const URL = "http://www.anapioficeandfire.com/api/houses/17";

class Baratheon extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            info: [],
        }
    }
    async getBaratheon() {
        try {
            const res = await axios.get(URL);
            console.log(res.data);
            this.setState({
                info: res.data,
            })
        } catch {

        }
    }
    componentDidMount() {
        this.getBaratheon();
    }
    render() {
        return (
            <div>
            {
                this.state.info.map(house => {
                    console.log(house);
                    return (
                        <div className="house">
                            <h2>{house.seats[2]}</h2>
                            
                        </div>
                    )
                })
            }
            </div>
        )
    }
}
export default Baratheon;