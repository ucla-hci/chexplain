import React, {Component} from 'react'
import {storage} from '../../firebase';
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
        <br/>
        <input className="chooseFile" type="file" onChange={this.handleChange}/>
        <button className="upload" onClick={this.handleUpload}>Upload</button>
        <br/>
      </div>
    );
  }
}

export default ImageUpload;
