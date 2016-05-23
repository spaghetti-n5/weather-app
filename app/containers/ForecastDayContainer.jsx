var React = require('react');
var PropTypes = React.PropTypes;
var ForecastDay = require('../components/ForecastDay');
var utils = require('../helpers/utils');


var ForecastDayContainer = React.createClass({
  propTypes: {
    day: PropTypes.object.isRequired,
    index: PropTypes.number,
  },
  contextTypes: {
    router: React.PropTypes.object.isRequired,
  },
  getInitialState() {
    return {
      containerClass: '',
      iconClass: '',
    };
  },
  componentWillMount() {
    var containerClass;
    if (this.props.index === 0) {
      containerClass = 'col-sm-2 col-xs-6 col-xs-offset-0 col-sm-offset-1 text-center';
    } else if (this.props.index > 0) {
      containerClass = 'col-sm-2 col-xs-6 text-center';
    } else { // no index
      containerClass = 'col-xs-12 text-center';
    }

    const dateString = this.props.index >= 0 ? 
                       `${utils.formatDateString(this.props.day.dt)}` :
                       `${this.props.day.temperature} \u{2109}`;
    this.setState({
      containerClass: containerClass,
      iconClass: utils.getWeatherIconClass(this.props.day.weatherCode),
      dateString: dateString,
    });
  },
  onClick: function(e) {
    this.context.router.push({
      pathname: '/detail/' + this.props.city,
      state: {
        day: this.props.day,
        city: this.props.city,
        index: this.props.index,
      },
    });
  },
  render() {
    return (
      <ForecastDay
        handleClick={this.onClick}
        containerClass={this.state.containerClass}
        iconClass={this.state.iconClass}
        dateString={this.state.dateString}
      />
    );
  },
});

module.exports = ForecastDayContainer;
