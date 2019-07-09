import React, {Component} from 'react'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const images = [
  'https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2Ftest1.jpg?alt=media&token=8b20e1dc-6641-4a85-9a74-a5135bc0275e',
  'https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2Fview1_frontal.jpg?alt=media&token=dea45d71-dcd1-49bd-83d9-41dd2bce2378',
  'https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2Ftest3.jpg?alt=media&token=ffd7b1be-43a5-4cc0-bf74-baeeac1e535f',
  'https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2Ftest4.jpg?alt=media&token=ab7aa1e4-b43c-4bf9-bbbc-f7155e30cbad',
  'https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2Ftest5.jpg?alt=media&token=3b318c41-b2a1-44a8-a8d2-fccd84731041',
  'https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2Ftest6.jpg?alt=media&token=a7e46bbd-6917-4957-be30-0985173d062e',
];

class PriorImages extends Component{
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render(){
    const { photoIndex, isOpen } = this.state;
    var iheight = 64, iwidth = 78;
    return (
      <div className="PriorImages">
        <div className="title">Prior Images</div>
        <div className="ImageGroup">
          <ul>
            <li><img src = {images[0]} alt="Image_0" height = {iheight} width = {iwidth} onClick = {() => this.setState({isOpen: true, photoIndex: 0})}/></li>
            <li><img src = {images[1]} alt="Image_1" height = {iheight} width = {iwidth} onClick = {() => this.setState({isOpen: true, photoIndex: 1})}/></li>
            <li><img src = {images[2]} alt="Image_2" height = {iheight} width = {iwidth} onClick = {() => this.setState({isOpen: true, photoIndex: 2})}/></li>
            <li><img src = {images[3]} alt="Image_3" height = {iheight} width = {iwidth} onClick = {() => this.setState({isOpen: true, photoIndex: 3})}/></li>
            <li><img src = {images[4]} alt="Image_4" height = {iheight} width = {iwidth} onClick = {() => this.setState({isOpen: true, photoIndex: 4})}/></li>
            <li><img src = {images[5]} alt="Image_5" height = {iheight} width = {iwidth} onClick = {() => this.setState({isOpen: true, photoIndex: 5})}/></li>
          </ul>
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    );
  }
}

export default PriorImages;
