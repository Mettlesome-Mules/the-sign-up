var App = React.createClass({
	  render: function() {
	    return (
	      <div>
	      	{this.props.renderview}
	      </div>
	    );
	  }
	});

var PageRender = function(page){
	page = page || <LoginPage />
	React.render(page, document.getElementById('app'))
}