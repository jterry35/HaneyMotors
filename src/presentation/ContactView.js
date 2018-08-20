import React, { Component } from 'react';

//https://www.embedgooglemap.net/
const iframe = '<div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=7145%20us%20hwy%2072%20athens%20al%2035611&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.pureblack.de">webagentur</a></div><style>.mapouter{text-align:right;height:500px;width:600px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style></div>'; 

class SimpleMap extends Component {

  createMarkup() { return {__html: iframe}; };

  render() {
    return (
      <div>
        <div dangerouslySetInnerHTML={ this.createMarkup() } />
      </div>
    );
  }
}

export default SimpleMap;