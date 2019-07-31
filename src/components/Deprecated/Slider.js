import React, { Component } from "react";
import { Slider, Rail, Handles, Tracks, Ticks } from "react-compound-slider";
import { SliderRail, Handle, Track, Tick } from "./slider_components"; // example render components - source below

const sliderStyle = {
  position: "relative",
  width: "5%"
};

const domain = [0,1];
const defaultValues = [0];

class SlideBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentValue: 0,
      columns: [true, true, true]
    }
    this.onChange = this.onChange.bind(this);
  }
  onChange(){
    let copy = this.state.columns;
    copy[2]=!copy[2];
    this.setState({
      currentValue: (this.state.currentValue + 1) % 2,
      columns: copy
    });
    console.log(this.state.currentValue);
    this.props.callbackFromParent(this.state.columns);
  }
  render() {
    return (
      <div>
      <div className="slideBar">
        <h1>Urgency Slider</h1>
        <div className="divider"/><div className="divider"/><div className="divider"/>
        <Slider
          mode={1}
          step={1}
          domain={domain}
          rootStyle={sliderStyle}
          onUpdate={this.onUpdate}
          onChange={this.onChange}
          values={defaultValues}
        >
          <Rail>
            {({ getRailProps }) => <SliderRail getRailProps={getRailProps} />}
          </Rail>
          <Handles>
            {({ handles, getHandleProps }) => (
              <div>
                {handles.map(handle => (
                  <Handle
                    key={handle.id}
                    handle={handle}
                    domain={domain}
                    getHandleProps={getHandleProps}
                  />
                ))}
              </div>
            )}
          </Handles>
          <Tracks left={false} right={false}>
            {({ tracks, getTrackProps }) => (
              <div className="slider-tracks">
                {tracks.map(({ id, source, target }) => (
                  <Track
                    key={id}
                    source={source}
                    target={target}
                    getTrackProps={getTrackProps}
                  />
                ))}
              </div>
            )}
          </Tracks>
          <Ticks count={1}>
            {({ ticks }) => (
              <div className="slider-ticks">
                {ticks.map(tick => (
                  <Tick key={tick.id} tick={tick} count={ticks.length} />
                ))}
              </div>
            )}
          </Ticks>
        </Slider>
      </div>
      </div>
    );
  }
}

export default SlideBar
