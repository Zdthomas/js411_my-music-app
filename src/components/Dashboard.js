import React, { useEffect, useState } from 'react';
// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
// import CardMedia from '@mui/material/CardMedia';
import Switch from '@mui/material/Switch';
// import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';









const Dashboard = () => {

    const [online, setOnline] = useState(false);

    const [volume, setVolume] = useState(20);

    const [quality, setQuality] = useState(2);

    const [notifications, setNotifications] = useState([]);

    const handleOnlineToggle = () => {

        setOnline(!online); 

      };

    const handleVolumeChange = (event, newValue) => {

        setVolume(newValue);
         
      };


    const handleQualityChange = (event) => {

        setQuality(event.target.value); 
        
      };



    useEffect(() => {

        setNotifications([]);

        if (!online) {

            setNotifications((prevNotifications) => [

              ...prevNotifications,

              "Your application is offline. You won't be able to share or stream music to other devices.",
            ]);

          }
          if (volume > 80) {

            setNotifications((prevNotifications) => [

              ...prevNotifications,

              "Listening to music at a high volume could cause long-term hearing loss.",

            ]);
          }
          if (quality === 1) {

            setNotifications((prevNotifications) => [

              ...prevNotifications,

              "Music quality is degraded. Increase quality if your connection allows it.",
              
            ]);
          }
        }, [online, volume, quality]);





    


      return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

            <div style = {{ fontSize: '2.2em', marginRight: '800px', fontWeight: 'bold', color: 'grey'  }}> Welcome User!</div>
            <br/>

      
      <div style={{  display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '16px' }}>
        <Card style={{ maxWidth: 345, marginRight: '16px' }}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Online Mode
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Is this application connected to the internet?
              </Typography>
            </CardContent>
          </CardActionArea>

          <Switch checked={online} onChange={handleOnlineToggle} />

        </Card>

        <Card style={{ maxWidth: 345, marginRight: '16px' }}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Master Volume
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Overrides all other sound settings in this application
              </Typography>

              <Slider
                value={volume}

                onChange={handleVolumeChange}

                min={0}

                max={100}

                step={10}

                aria-labelledby="continuous-slider"
              />

            </CardContent>
          </CardActionArea>
        </Card>

        <Card style={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Sound Quality
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Manually control the music quality in the event of poor connection
              </Typography>

              <Select
                value={quality}
                onChange={handleQualityChange}
                label="Sound Quality"
              >
                <MenuItem value={1}>Low</MenuItem>
                <MenuItem value={2}>Normal</MenuItem>
                <MenuItem value={3}>High</MenuItem>
              </Select>

            </CardContent>
          </CardActionArea>
        </Card>
      </div>

      
      <div style={{ maxWidth: 345, fontSize: '3.2em', marginRight: '800px', fontWeight: 'bold', color: 'black'   }}>
        <Typography gutterBottom variant="h5" component="div">
          System Notifications
        </Typography>

        {notifications.map((notification, index) => (
          <Typography key={index} variant="body2" color="text.secondary" style={{ marginBottom: '8px' }}>
            {notification}
          </Typography>
        ))}
      </div>
    </div>
  );
};







export default Dashboard;





