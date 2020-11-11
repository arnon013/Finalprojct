import React from 'react';
import Showdata from './Showdata';

class Propart extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        this.fetchData();
    }
    fetchData() {
        let url = "https://www.api.senpru.com/signalinfo/index.php/propart/fetchall";

        fetch(url)
            .then(res => res.json())
            .then(result => {
                this.setState({
                    data: result,

                });


            },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )

    }
    render() {
        return (
            <div>
<Showdata DataRecords={this.state.data} />
            </div>
          
         

        )



    }
}

export default Propart;