import React, {Component} from 'react'
import {storage} from '../firebase';
class ImageUpload extends Component {
  constructor(props){
    super(props);
    this.state = {
        image: null,
        url: '',
        progress: 0
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }
  handleChange = e => {
    if(e.target.files[0]){
      const image = e.target.files[0];
      this.setState(() => ({image}));
    }
  }
  handleUpload = () => {
    const {image} = this.state;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on('state_changed',
    (snapshot) => {
      //progress function
      const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes)*100);
      this.setState({progress});
    },
    (error) => {
      //error function
      console.log(error);

    },
    () => {
      //complete function
      storage.ref('images').child(image.name).getDownloadURL().then(url => {
        console.log(url);
        this.setState({url});
      })
    });
  }
  render(){
    return (
      <div className="ImageUpload">
        <progress value={this.state.progress} max="100"/>
        <br/>
        <input className="chooseFile" type="file" onChange={this.handleChange}/>
        <button className="upload" onClick={this.handleUpload}>Upload</button>
        <br/>
        <img src={this.state.url || 'https://via.placeholder.com/320x390'} alt="Uploaded Images" height="390" width="320"/>
      </div>
    );
  }
}

export default ImageUpload;
