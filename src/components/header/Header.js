import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import logo from '../../assets/images/logo.png'

const headerButtonStyle={
    fontWeight: 'bolder',
    fontSize: 'large',
    height: '30px',
    lineHeight: '40px',
}

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    input: {
      display: 'none',
    },
  });

function ButtonAppBar(props) {
  return (
    <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="HeaderButtons">
            <Button style={headerButtonStyle} href="/" color="inherit">VEHICLES</Button>
            <Button style={headerButtonStyle} href="/contact" color="inherit">CONTACT</Button>
        </div>
        <div className="ContactNumber">
        1+256-603-1818
        </div>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
