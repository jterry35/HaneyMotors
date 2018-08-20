import React from 'react';
import Gallery from 'react-grid-gallery';
import Available from '../cars/Available';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';

const details={
  width: '20%',
  height: '90%',
  position: 'absolute',
  left: '0px',
  textAlign: 'left',
}

const content ={
  width: '80%',
  height: '90%',
  left : '20%',
  position: 'absolute'
}

export default class GalleryComp extends React.Component {

  constructor(props)
  {
    super(props);

    this.state ={
      selected : null,
      showKillSub : false,
    }
  }
  getData()
  {
    if(this.state.selected === null)
      return this.getRoot();
    else
      return this.getSub();
  }

  getRoot()
  {
    var imgs = [];

    for (var i = 0; i < Available.length; i++) {
      imgs.push(
        {
          src: Available[i].MainImg,
          thumbnail: Available[i].MainImg,
          caption: Available[i].Title,
          thumbnailCaption: Available[i].Title,
        }
      )
    }
    return(
    <Gallery images={imgs} rowHeight={350} enableImageSelection={false} onClickThumbnail = {this.onImgSelected} />);
  }

  getKillSubButtonStyle() {
    return(
      {
    position: 'absolute',
    right: '25px',
    top: '-55px',
    zIndex: '40',
    visibility: this.state.showKillSub,
      });
  }

  getSub()
  {
    var imgs = [];
    const selectedIndex = this.state.selected;

    for (var i = 0; i < Available[selectedIndex].Imgs.length; i++) {
      imgs.push(
        {
          src: Available[selectedIndex].Imgs[i],
          thumbnail: Available[selectedIndex].Imgs[i],
          caption: '',
        }
      )
    }
    return(
    <div>
      <div style={details}>
        <span>
          <h4>
          {Available[selectedIndex].Title}
          </h4>
        </span>
        <span>
          {Available[selectedIndex].Desc}
          <br/>
          <br/>
        </span>
        <span>
          {Available[selectedIndex].Mileage + ' miles'}
          <br/>
        </span>
        <span>
          {'$' + Available[selectedIndex].Price}
          <br/>
        </span>
      </div>
        <div>
        <div style={content}>
          <Button variant="extendedFab" color="secondary" aria-label="Back" onClick={this.onKillSub} style={this.getKillSubButtonStyle()} >
            <CloseIcon />
              Back
          </Button>
        <Gallery images={imgs} enableImageSelection={false} lightboxWillOpen={this.lightboxWillOpen}
        lightboxWillClose={this.lightboxWillClose}/>
        </div>
      </div>
    </div>);
  }

  lightboxWillOpen=()=>{
    console.log("opening light box");
    this.setState({showKillSub: 'hidden'});
  }

  lightboxWillClose=()=>{
    console.log("closing light box");
    this.setState({showKillSub: 'visible'});
  }

  onKillSub=()=>
  {
    this.setState({selected: null})
  }
  
  onImgSelected = (index)=> {
    this.setState({selected : index} )
  }


  render() {
    return (
    <div>
      {this.getData()}
    </div>
    );
  }
}
