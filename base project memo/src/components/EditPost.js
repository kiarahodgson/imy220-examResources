import React from "react";

export class EditPost extends React.Component {
  constructor(props){
    super(props);
    this.titleRef = React.createRef(),
    this.descRef = React.createRef()
    this.onFinishEdit = this.onFinishEdit.bind(this)
  }

  onFinishEdit(e){
    e.preventDefault();
    const post = {
      title: this.titleRef.current.value,
      description: this.descRef.current.value
    }
    this.props.updatePost(post);
  }

  render() {
    return(
      <form>
        <label htmlFor="title">Post Title</label><br/>
        <input type="text" name="title" ref={this.titleRef} defaultValue={this.props.title}/><br/>
        <label htmlFor="desc">Post Description</label><br/>
        <input type="text" name="desc" ref={this.descRef} defaultValue={this.props.description}/><br/>
        <button onClick={this.onFinishEdit}>Save</button>
      </form>
    )
  }

}