import React, { Component } from 'react';
import '../styles/App.css';
import request from 'superagent';

export default class QuestionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title : "",
      question: "",
      tagsinput: "",
      username: "",
      language: "",
      tagerror: false,
      tags: []
    }
    this.submitquestion = this.submitquestion.bind(this);
  }
  submitquestion(event){
    event.preventDefault();
    if(event.target.title.value.length < 3){
      this.setState({tagerror: "You Need a longer Title"});
      return
    } else if(event.target.language.value.length < 2){
      this.setState({tagerror: "Is that really a language?"});
      return
    } else if(event.target.question.value.length < 10){
      this.setState({tagerror: "You should be more descriptive in your question"});
      return
    } else {
      var newquestiondata = {
        title: this.state.title,
        language: this.state.language,
        body: this.state.question,
      }
      console.log(newquestiondata);
      console.log(JSON.stringify(newquestiondata));
      console.log("Question Submisson fired");
      // var fetchConfig = { method: 'POST',
      //               headers: new Headers({'Content-Type': 'applicantion/json',
      //                 'Authorization': `Token token=${this.props.token}`}),
      //               mode: 'cors',
      //               body: JSON.stringify(newquestiondata),
      //               cache: 'default' };
      // fetch(`https://secure-beyond-80954.herokuapp.com/questions`, fetchConfig)
      // .then(function(res){
      request
        .post(`https://secure-beyond-80954.herokuapp.com/questions`)
        .send(JSON.stringify(newquestiondata))
        .set('Authorization', `Token token=${this.props.token}`)
        .set('Content-Type', 'application/json')
        .end((err,res)=>{
          if(err){
            console.error(err);
          } else {
            alert("Question posted!")
          }
        })
      //if response 401, say "not authed"
    }
  }
  handleTextChange = (event) => {
    event.preventDefault();
    this.setState({tagerror: false});
    if (this.state[event.target.id] !== undefined){
      if (event.target.id === "tagsinput"){
        if (/^[0-9a-zA-Z,-]*$/.test(event.target.value[event.target.value.length-1])) {
          this.setState({tagsinput: event.target.value});
        } else if (/^[ ]*$/.test(event.target.value[event.target.value.length-1])
          && event.target.value !== " "){
          var valuetocheck = event.target.value.toLowerCase();
          if (this.state.tags.indexOf(valuetocheck.slice(0, -1)) !== -1){
            this.setState({tagerror: "You already have that tag!"});
          } else {
            this.setState(prevState => ({
                tags: [...prevState.tags, this.state.tagsinput.toLowerCase()],
                tagsinput: ""
              })

            )
          }
        }
        return
      } else if (event.target.id !== "tagsinput"){
        this.setState({[event.target.id]: event.target.value});
      }
    }
  }
  removetag = (event) => {
    event.preventDefault();
    this.state.tags.splice(this.state.tags.indexOf(event.target.id), 1);
    this.forceUpdate();
  }
  render() {
    let tags = this.state.tags.map((x, i) => {
      return(
        <div key={x+i} className="ask-question-tag-input">
          <span className="question-tag-span">{x}</span>
          <span className="question-x-box" id={x} onClick={this.removetag}>X</span>
        </div>
      )
    })
    return (
      <div className="body-component">
        <div className="questionform-component" >
          <form className="question-form-container" onSubmit={this.submitquestion}>
            <h2>
              Ask a Question!
            </h2>
            <label htmlFor="title">
              Title:
            </label>
            <input onChange={this.handleTextChange}
              type="text" id="title"
              placeholder="Title"
              name="title"
              value={this.state.title} required/>
            <br/>
            <label htmlFor="language">
              Language:
            </label>
            <input
              onChange={this.handleTextChange}
              type="text" id="language"
              placeholder="Language"
              name="language"
              value={this.state.language} required/>
            <br/>
            <label htmlFor="question">
              Question:
            </label>
            <textarea onChange={this.handleTextChange}
              type="text" id="question"
              className="questionform-textarea"
              placeholder="Type your question here"
              name="question"
              value={this.state.question} required/>
            <br/>
            <label htmlFor="tags">
              Tags:
            </label>
            <input pattern="^[0-9a-zA-Z,-]*$"
              onChange={this.handleTextChange}
              type="text" id="tagsinput"
              placeholder="tags"
              name="tagsinput"
              value={this.state.tagsinput}/>
            <br/>
            <br/>
            {this.state.tagerror
              ? (<p className="errormessage">{this.state.tagerror}</p>)
              : ""}
            <br/>
            <div>
              {tags}
            </div>
            <button className="question-form-submit-button" type="submit">
              Submit question
            </button>
          </form>
        </div>
      </div>
    )
  }
}
