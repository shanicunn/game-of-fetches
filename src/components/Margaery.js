import React from 'react';
import axios from 'axios';

const URL = "http://www.anapioficeandfire.com/api/characters/16";

class Margaery extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            info: [],
        }
    }
    async getMargaery() {
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
        this.getMargaery();
    }
    render() {
        return (
            <div>
            {
                this.state.info.map(character => {
                    console.log(character);
                    return (
                        <div className="character">
                            <h2>{character.born}</h2>
                        </div>
                    )
                })
            }
            </div>
        )
    }
}
export default Margaery;