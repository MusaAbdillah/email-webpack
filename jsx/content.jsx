const React = require('react')
const ReactDOM = require('react-dom')

class Content extends React.Component {
	constructor(props){
		super(props)
		this.submit = this.submit.bind(this)
		this.prompt = "Please insert email & comment below!"
	}

	submit(event){
		let emailAddress = this.refs.emailAddress
		let comments = this.refs.comments
		console.log(ReactDOM.findDOMNode(emailAddress).value)
		console.log(ReactDOM.findDOMNode(comments).value)
	}

	render(){
		return(
			<div className="well">
				<p>{this.prompt}</p>
				<div className="form-group">
					Your Email: <input ref="emailAddress" className="form-control" type="text" placeholder="musaabdillahm9@gmail.com"/>
				</div>
				<div className="form-group">
					Your Comments: <textarea ref="comments" className="form-control"  placeholder="I like your website!"/>
				</div>
				<div className="form-group">
					<a className="btn btn-primary" value="Submit" onClick={this.submit}>Submit</a>
				</div>
			</div>
		)

	}
}

module.exports = Content