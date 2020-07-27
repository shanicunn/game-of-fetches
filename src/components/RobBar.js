import React from 'react';
import axios from 'axios';

class RobBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            info : [],
        }
    }
    async getRobBar() {
        try {
            const res = await axios.get("http://www.anapioficeandfire.com/api/characters/901");
            this.setState({
                info: res.data,
            })
        } catch {

        }   
    }

        componentDidMount() {
            this.getRobBar();
        }
 
    render() {
        return (
            <div>
                {
                    this.state.info.map(person => {
                        console.log(person);
                        return (
                            <div className="person">
                                <h2>{person.aliases[2]}</h2>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default RobBar;