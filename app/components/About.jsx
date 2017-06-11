var React = require('react');

// var About = React.createClass({
//   render:function(){
//     return(
//       <h3>About component</h3>
//     );
//   }
// });

var About = (props) =>{
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This is a weather application built on React.</p>
      <p>
        Here are some of the tools i used:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a>
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a>
        </li>
      </ul>
    </div>
  )
};
module.exports = About;
