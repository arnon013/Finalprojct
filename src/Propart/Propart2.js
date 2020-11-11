import React from 'react';
import Showdataedit from '../Propart/Showdataedit';
class Propart2 extends React.Component {
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
        let url = "https://www.api.senpru.com/signalinfo/index.php/propart/fetchtech";

        fetch(url)
            .then(res => res.json())
            .then(result => {
                this.setState({
                    data: result[0].member,

                });

console.log(this.state.data)
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
<Showdataedit DataRecords={this.state.data} />
            </div>
          
         

        )



    }
}

export default Propart2;