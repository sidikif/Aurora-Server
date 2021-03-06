var React = require('react');
var TemperatureUI=require("./temperature_ui");
const TemperatureCard = React.createClass({
  getDefaultProps:function() {
    return {
      state:{
        temp:"-",
        humidity:"-",
      }
    };
  },
  getInitialState:function(){
    return {
      open:false
    }
  },
  handleClick:function(){
    this.setState({
      open:!this.state.open,
    })
  },
  render:function() {
    var descr="Humidity: "+this.props.state.humidity+"%"
    return (
      <TemperatureUI
      title={this.props.name}
      background={this.props.image}
      temperature={this.props.state.temp}
      data={this.props.state.last_day}
      open={this.state.open}
      onClick={this.handleClick}
      description={descr}
    />
  )},
});

module.exports=TemperatureCard;
