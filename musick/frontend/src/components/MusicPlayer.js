import React, { Component } from "react";
import { TextField, Card, Typography, IconButton, LinearProgress, Grid } from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import SkipNextIcon from "@material-ui/icons/SkipNext";


export default class RoomJoinPage extends Component {
    constructor(props) {
        super(props);
        this.pauseSong = this.pauseSong.bind(this);
        this.playSong = this.playSong.bind(this);
    }

    pauseSong() {
        const requestOptions = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
        };
        fetch("/spotify/pause-song", requestOptions)
        .then((response)=>console.log(response));
    }
    
    playSong() {
        const requestOptions = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
        };
        fetch("/spotify/play-song", requestOptions)
        .then((response)=>console.log(response));
    }

    render() {
        const songProgress = (this.props.progress/this.props.duration) *100
        return <Card>
            <Grid container alignItems="center" spacing={1}>
                <Grid item xs={4} align="center">
                    <img src={this.props.image_url} height="100%" width="100%" />   
                </Grid>
                <Grid item xs={8} align="center">
                    <Typography component="h5" variant="h5">
                        {this.props.title}
                    </Typography>
                    <Typography color="textSecondary" variant="subtitle1">
                        {this.props.artist}
                    </Typography>
                    <div>
                        <IconButton onClick={()=>{this.props.is_playing ? this.pauseSong() : this.playSong()}}>
                            {this.props.is_playing ? <PauseIcon/> : <PlayArrowIcon />}
                        </IconButton>
                        <IconButton>
                            <SkipNextIcon />
                        </IconButton>
                    </div>
                </Grid>
            </Grid>
            <LinearProgress variant="determinate" value={songProgress} />
        </Card>;
    }
}