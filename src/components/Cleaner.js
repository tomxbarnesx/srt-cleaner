import React, { Component } from 'react';
import './Cleaner.css';

class Cleaner extends Component {
	constructor(){
		super()
		this.state = {
			body: '',
			result: '',
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.srtCleaner = this.srtCleaner.bind(this)
	}


    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    srtCleaner = (rawText) => {
	  let firstClean = rawText.replace(/[\n0-9,:>-]/g, "")
	  let secondClean = firstClean.replace(/  +/g, ' ');
	  return secondClean
	}

    handleSubmit = (e) => {
		e.preventDefault();
		let result = this.srtCleaner(this.state.body)
		this.setState({
			result: result
		})
	}

	render() {
	  	return (
		    <div className="cleaner-master m-0">
		    	<form onSubmit={ this.handleSubmit } className="flex flex-col flex-center">
	                <h2>Paste Here:</h2>
	                <textarea rows="10" name="body" value={this.state.body} onChange={this.handleChange}>
	                </textarea>
	                <input className="submit-button m-0" type="submit" value="Submit" />
	            </form>
	            <div>
	            	<h2>Result:</h2>
	            	<p className="left-align">{this.state.result}</p>
	            </div>
		    </div>
		);
	}
}

export default Cleaner;
