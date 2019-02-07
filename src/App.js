import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

//Modal-specific
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

/**
 * Modal part
 */
function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}//END modal part

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  paper: { //modal part
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  }, //end modal part
});

class App extends Component {

  state = {
    value: 0,
    open: false, //modal part
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };
  /** Modal part  */
  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  /** END modal part */

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange} centered>
            <Tab label="Login" />
            <Tab label="Register" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer>
          <Button onClick={this.handleOpen}>Open Modal</Button>
          <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={this.state.open}
            onClose={this.handleClose}
          >
            <div style={getModalStyle()} className={classes.paper}>
              <Typography variant="h6" id="modal-title">
                Text in a modal
              </Typography>
              <Typography variant="subtitle1" id="simple-modal-description">
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </div>
          </Modal>
        </TabContainer>}
        {value === 1 && <TabContainer>Add Register form here</TabContainer>}
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
