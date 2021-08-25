import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';



const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
    constructor(props) {
        super(props);
        this.props = props;

    }
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
        if (this.props.data.length < 1) {
            return null;
        }
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyD_luYXzeQsC7Dq94aelLYHaEVyXHI9GVQ" }}
          center={{lat:this.props.data[0].coord.lat,lng:this.props.data[0].coord.lon}}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"

            //do sometzhing here
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;