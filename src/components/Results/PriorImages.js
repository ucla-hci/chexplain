import React, {Component} from 'react'
import Dialog from '../Dialog';
import ReactImageMagnify from 'react-image-magnify';

const images = [
  'https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2Ftest1.jpg?alt=media&token=8b20e1dc-6641-4a85-9a74-a5135bc0275e',
  'https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2Fview1_frontal.jpg?alt=media&token=dea45d71-dcd1-49bd-83d9-41dd2bce2378',
  'https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2Ftest3.jpg?alt=media&token=ffd7b1be-43a5-4cc0-bf74-baeeac1e535f',
  'https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2Ftest4.jpg?alt=media&token=ab7aa1e4-b43c-4bf9-bbbc-f7155e30cbad',
  'https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2Ftest5.jpg?alt=media&token=3b318c41-b2a1-44a8-a8d2-fccd84731041',
  'https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2Ftest6.jpg?alt=media&token=a7e46bbd-6917-4957-be30-0985173d062e',
];
const dates = [
  'Prior Image: 2018/5/10',
  'Prior Image: 2017/7/4',
  'Prior Image: 2016/10/5',
  'Prior Image: 2015/4/3',
  'Prior Image: 2014/3/2',
  'Prior Image: 2013/11/14'];
class PriorImages extends Component{
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isOpen: false,
      dateIndex: 0,
    };
  }

  render(){
    const { photoIndex,dateIndex,isOpen } = this.state;
    var iheight = 108, iwidth = 132;
    return (
      <div>
      <div className="PriorImages">
        <div className="title"></div>
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
      </div>
       <Dialog isOpen={this.state.isOpen} big = {true} onClose={(e) => this.setState({isOpen:false})}>
      <div className="blah">

            <ReactImageMagnify {...{
                smallImage: {
                    alt: 'PriorImage',
                    isFluidWidth: false,
                    width: 500*0.8,
                    height: 550*0.8,
                    src: require('../../images/testimage.png'),
                },
                largeImage: {
                    src: require('../../images/testimage.png'),
                    width: 500*2,
                    height: 550*2
                },
                enlargedImageContainerDimensions: {
                    width: '30%',
                    height: '30%'
                },
                isHintEnabled: true
            }} />
      </div>

      <div className="divider2"/><div className="divider2"/><div className="divider2"/><div className="divider"/>


      <div className="blah2">
            <ReactImageMagnify {...{
                smallImage: {
                    alt: 'PriorImage',
                    isFluidWidth: false,
                    width: iwidth*3.5,
                    height: iheight*3.5,
                    src: images[this.state.photoIndex],
                },
                largeImage: {
                    src: images[this.state.photoIndex],
                    width: iwidth*6,
                    height: iheight*6
                },
                enlargedImageContainerDimensions: {
                    width: '30%',
                    height: '40%'
                },
            }} />
      </div>
      <div className="ImageDescriptionRight">Right: {dates[this.state.dateIndex]}</div>
      <div className="ImageDescriptionLeft">Left: Input image 2019/7/16</div>
      <div className="prevNext">
      <button onClick={() => this.setState({
        photoIndex: (this.state.photoIndex + images.length - 1) % images.length,
        dateIndex: (this.state.dateIndex -1),
      })}>Previous</button>
      <button onClick={() => this.setState({
        photoIndex: (this.state.photoIndex + 1) % images.length,
        dateIndex:  (this.state.dateIndex + 1),
      })}>Next</button>
      </div>
      </Dialog>
      </div>
    );
  }
}

export default PriorImages;

// import React, {Component} from 'react'
// import Dialog from '../Dialog';
// import ReactImageMagnify from 'react-image-magnify';
//
// const images = [
//   'https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2Ftest1.jpg?alt=media&token=8b20e1dc-6641-4a85-9a74-a5135bc0275e',
//   'https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2Fview1_frontal.jpg?alt=media&token=dea45d71-dcd1-49bd-83d9-41dd2bce2378',
//   'https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2Ftest3.jpg?alt=media&token=ffd7b1be-43a5-4cc0-bf74-baeeac1e535f',
//   'https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2Ftest4.jpg?alt=media&token=ab7aa1e4-b43c-4bf9-bbbc-f7155e30cbad',
//   'https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2Ftest5.jpg?alt=media&token=3b318c41-b2a1-44a8-a8d2-fccd84731041',
//   'https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2Ftest6.jpg?alt=media&token=a7e46bbd-6917-4957-be30-0985173d062e',
// ];
//
// class PriorImages extends Component{
//   constructor(props) {
//     super(props);
//     this.state = {
//       photoIndex: 0,
//       isOpen: false,
//     };
//   }
//
//   render(){
//     const { photoIndex, isOpen } = this.state;
//     var iheight = 108, iwidth = 132;
//     return (
//       <div>
//       <div className="PriorImages">
//         <div className="title"></div>
//         <div className="ImageGroup">
//           <ul>
//             <li><img src = {images[0]} alt="Image_0" height = {iheight} width = {iwidth} onClick = {() => this.setState({isOpen: true, photoIndex: 0})}/></li>
//             <li><img src = {images[1]} alt="Image_1" height = {iheight} width = {iwidth} onClick = {() => this.setState({isOpen: true, photoIndex: 1})}/></li>
//             <li><img src = {images[2]} alt="Image_2" height = {iheight} width = {iwidth} onClick = {() => this.setState({isOpen: true, photoIndex: 2})}/></li>
//             <li><img src = {images[3]} alt="Image_3" height = {iheight} width = {iwidth} onClick = {() => this.setState({isOpen: true, photoIndex: 3})}/></li>
//             <li><img src = {images[4]} alt="Image_4" height = {iheight} width = {iwidth} onClick = {() => this.setState({isOpen: true, photoIndex: 4})}/></li>
//             <li><img src = {images[5]} alt="Image_5" height = {iheight} width = {iwidth} onClick = {() => this.setState({isOpen: true, photoIndex: 5})}/></li>
//           </ul>
//         </div>
//       </div>
//        <Dialog isOpen={this.state.isOpen} big = {true} onClose={(e) => this.setState({isOpen:false})}>
//       <div className="blah">
//             <ReactImageMagnify {...{
//                 smallImage: {
//                     alt: 'PriorImage',
//                     isFluidWidth: false,
//                     width: 500*0.8,
//                     height: 550*0.8,
//                     src: require('../../images/testimage.png'),
//                 },
//                 largeImage: {
//                     src: require('../../images/testimage.png'),
//                     width: 500*2,
//                     height: 550*2
//                 },
//                 enlargedImageContainerDimensions: {
//                     width: '30%',
//                     height: '30%'
//                 },
//                 isHintEnabled: true
//             }} />
//       </div>
//       <div className="divider2"/><div className="divider2"/><div className="divider2"/><div className="divider"/>
//       <div className="blah2">
//             <ReactImageMagnify {...{
//                 smallImage: {
//                     alt: 'PriorImage',
//                     isFluidWidth: false,
//                     width: iwidth*3.5,
//                     height: iheight*3.5,
//                     src: images[this.state.photoIndex],
//                 },
//                 largeImage: {
//                     src: images[this.state.photoIndex],
//                     width: iwidth*6,
//                     height: iheight*6
//                 },
//                 enlargedImageContainerDimensions: {
//                     width: '30%',
//                     height: '40%'
//                 },
//                 isHintEnabled: true
//             }} />
//       </div>
//       <div className="prevNext">
//       <button onClick={() => this.setState({
//         photoIndex: (this.state.photoIndex + images.length - 1) % images.length
//       })}>Previous</button>
//       <button onClick={() => this.setState({
//         photoIndex: (this.state.photoIndex + 1) % images.length
//       })}>Next</button>
//       </div>
//       </Dialog>
//       </div>
//     );
//   }
// }
//
// export default PriorImages;
