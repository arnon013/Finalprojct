import React from 'react';
import Search from '../components/Header';
import Showdata from '../Propart/Showdata';
export default class Tracking extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            data: [],
            keyword: '',
            status: null
        }
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
        this.onSearchKeywordChange = this.onSearchKeywordChange.bind(this);
        
    }

    onSearchKeywordChange(e) {
        this.setState({keyword: e.target.value});
        console.log('key2='+e.target.value)
        
    }
    onSearchSubmit(e) {
        let keyword = this.state.keyword;
        this.onPageChange(
            "http://localhost/signalinfo/index.php/Tracking/search?name="+keyword
        );
        e.preventDefault();
    }
    onPageChange(url) {
        fetch(url)
        .then(res => res.json())
        .then(result => {
            this.setState({
                data: result.data,
                status: result.status
            });
            console.log("Status"+this.state.status);
        },
        (error) => {
            this.setState({
                isLoaded: true,
                error
            });
        }
        )
    }
    render(){
        return(
                <div>
                    <Header 
                    onSearchSubmit={this.onSearchSubmit}
                    onSearchKeywordChange={this.onSearchKeywordChange}/>
                    <br />
                    { 
                    this.state.data.length > 0 || this.state.status == false ?
                    <Search DataRecords={this.state.data} status={this.state.status}/>
                    :""
                    }           
                </div>
        )
    }
}