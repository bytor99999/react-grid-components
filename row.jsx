var React = require('react');

module.exports = React.createClass ({
  displayName: 'Row',
  render: function () {

    var styles = {
      row: {
        marginLeft: '-15px',
        marginRight: '-15px',
        boxSizing: 'border-box',
      },
      before: {
        content: ' ',
        display: 'table',
      },
      after: {
        content: ' ',
        display: 'table',
        clear: 'both',
      }
    };

    if (this.props.margin){
      styles.row.marginLeft = this.props.margin + 'px';
      styles.row.marginRight = this.props.margin + 'px';
    }

    if (this.props.style){
      for (var key in this.props.style) { styles.row[key] = this.props.style[key]; }
    }

    return (
      <div>
        <div style={styles.before}></div>
        <div style={styles.row}>
          {this.props.children}
        </div>
        <div style={styles.after}></div>
      </div>
    );
  }
});
