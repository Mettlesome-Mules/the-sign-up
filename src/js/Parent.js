var Parent = React.createClass({
  render: function(){
    return (
      <div>
        <div> This is the parent. </div>
        // Here we call Child.js the Child class
        <Child name="child"/>
          //****************************//
	      // <div>
	      //   // this.props is a built in
	      //   // this.props has properties as set by the Parent.js
	      //   and this is the <b>{this.props.name}</b>.
	      // </div>
	      //***************************//
      </div>
    )
  }
});