import React, { Component } from "react";
import { connect } from "react-redux";
import { Paper, Grid, Typography, TextField, Button } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";

import {
  add_reminder,
  deletereminder,
  clearrlinder,
  editereminder,
} from "../action/actionliste.js";
import { makeStyles, withStyles } from "@material-ui/styles";
const useStyle = (theme) => ({
  title: {
    width: "70%",
    margin: "20px auto",
    padding: " 10px",
    // border: "3px solid #F72585",
    textAlign: "center",
    backgroundColor: "rgb(255, 255, 255, 0.7)",
    borderBottomRightRadius: "20%",
    borderTopLeftRadius: "20%",
  },
  gridfather: {
    width: "85%",
    margin: "0 auto",
    padding: "50px",
    backgroundColor: "rgb(0, 0, 0 , 0.5)",
  },
  sharedstl: {},
  form1title: {
    textAlign: "center",
    padding: "10px",
    marginBottom: "10px",
    color: "#F72585",
  },
});

class Home extends Component {
  state = {
    id: 0,
    text: "",
    date: "",
    ischanging: false,
  };

  handlechange(id) {
    this.setState({ ischanging: !this.state.ischanging });
    let selected = this.props.listedata.filter((item) => item.id === id)[0];
    // console.log("selected on " , selected);
    this.setState({
      id,
      text: selected.text,
      date: selected.date,
    });
  }

  subchange() {
    this.props.editereminder(this.state.id, this.state.date, this.state.text);

    this.setState({
      ischanging: false,
    });
  }

  render() {
    const { classes } = this.props;
    const todoremind = this.props.listedata.map((item) => {
      return (
        <div key={item.id}>
          <h3>{item.text}</h3>
          <p>{item.date}</p>
          <div
            onClick={() => {
              this.props.deletereminder(item.id);
            }}
          >
            {" "}
            Delete
          </div>
          <div
            onClick={() => {
              this.handlechange(item.id);
            }}
          >
            {" "}
            Edite
          </div>

          <hr />
        </div>
      );
    });
    const colums = [
      { field: "id", headerName: "id", type: "number", width: 90 },
      { field: "text", headerName: "Whats to do", width: 150 },
      { field: "date", headerName: "date", type: "date", width: 150 },
    ];

    return (
      <>
        <Paper className={classes.title} elevation={0}>
          <Typography variant="h4" color="primary">
            Welcom to our Reminder APP
          </Typography>
        </Paper>

        <Grid
          container
          md={12}
          xl={12}
          className={classes.gridfather}
          spacing={5}
        >
          <Grid item sm={12} xs={12} md={5} className={classes.sharedstl}>
            {" "}
            <Typography variant="h4" className={classes.form1title}>
              ADD NEW REMINDERS
            </Typography>
            <Paper
              style={{
                padding: "10px",
                backgroundColor: "rgb(255, 255, 255 )",
              }}
            >
              <div style={{ margin: "20px auto" }}>
                <TextField
                  InputLabelProps={{
                    shrink: true,
                  }}
                  label="Whene ?  : "
                  defaultValue="2017-05-24"
                  type="date"
                  name="when"
                  style={{ width: "100%" }}
                  onChange={(e) => {
                    console.log(e.target.value);
                    this.setState({ date: e.target.value });
                  }}
                />
              </div>
              <div style={{ margin: "20px auto" }}>
                <TextField
                  id="filled-basic"
                  label="Whats ? : "
                  variant="filled"
                  style={{ width: "100%" }}
                  name="date"
                  onChange={(e) => {
                    this.setState({ text: e.target.value });
                    console.log(this.state.date);
                  }}
                />
              </div>

              <Paper
                elevation={0}
                style={{
                  margin: "20px auto",
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                <Button
                  variant="contained"
                  type="submit"
                  color="primary"
                  style={{
                    width: "40%",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                  onClick={() => {
                    this.props.add_reminder(this.state.text, this.state.date);
                    console.log(this.state);
                  }}
                >
                  ADD
                </Button>
                <Button
                  style={{
                    width: "40%",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                  variant="contained"
                  color="secondary"
                  onClick={() => {
                    this.props.clearrlinder();
                  }}
                >
                  DELETE ALL
                </Button>
              </Paper>
            </Paper>
          </Grid>

          <Grid item sm={12} xs={12} md={7} className={classes.sharedstl}>
            <DataGrid
              rows={this.props.listedata}
              columns={colums}
              pageSize={4}
              checkboxSelection
              disableSelectionOnClick
              style={{ backgroundColor: "white", height: "400px" }}
            />
          </Grid>
        </Grid>
      </>
    );
  }
}
function mapStatetoProps(state) {
  return { listedata: state };
}

export default connect(mapStatetoProps, {
  add_reminder,
  deletereminder,
  clearrlinder,
  editereminder,
})(withStyles(useStyle)(Home));
