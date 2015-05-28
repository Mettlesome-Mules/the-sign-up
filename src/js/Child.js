var Child = React.createClass({
  render: function(){
    return (
      <div>
        // this.props is a built in
        // this.props has properties as set by the Parent.js
        and this is the <b>{this.props.name}</b>.
      </div>
    )
  }
});