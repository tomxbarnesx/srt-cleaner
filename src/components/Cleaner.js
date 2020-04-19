import React, { Component } from 'react';
import './Cleaner.css';

class Cleaner extends Component {
	constructor(){
		super()
		this.state = {
			body: '',
			resultTimeCodes: [],
			resultText: [],
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
	  // let firstClean = rawText.replace(/[\n0-9,:>-]/g, "")
	  // let secondClean = firstClean.replace(/  +/g, ' ');
	  let timeCodes = [], 
	  	finalText = [],
	  	timeCodeTest = RegExp(/[>]/g),
	  	scriptTest = RegExp(/[a-zA-Z]/g),
	  	splitText = rawText.split("\n");
	  	console.log(splitText)
	  for (let i=0; i < splitText.length; i++){
	  	if (timeCodeTest.test(splitText[i])){
	  		timeCodes.push(splitText[i])
	  	} else if (scriptTest.test(splitText[i])) {
	  		finalText.push(splitText[i])
	  	}
	  }
	  return [timeCodes,finalText]
	}

    handleSubmit = (e) => {
		e.preventDefault();
		let result = this.srtCleaner(this.state.body)
		this.setState({
			resultTimeCodes: result[0],
			resultText: result[1]
		})
	}

	render() {
		let scriptResult = this.state.resultText.map((tb) => {
			return (<p>{tb}</p>)
		});
		let timeCodes = this.state.resultTimeCodes.map((tc) => {
			return (<p>{tc}</p>)
		});

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
	            	<div className="flex flex-row space-around left-align">
	            		<div>{timeCodes}</div>
	            		<div>{scriptResult}</div>
	            	</div>
	            </div>
		    </div>
		);
	}
}

export default Cleaner;
