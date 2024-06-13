import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}) {
    const INIT_URL =
    "https://images.unsplash.com/photo-1632298683700-43ce0ebac870?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    const HOT_URL ="https://media.istockphoto.com/id/1019012576/photo/sunset-on-maldives.jpg?s=1024x1024&w=is&k=20&c=hJz7kvB3XdiPQlaRjhVzipZLLS6miHxsF3UKPu9SnNc= ";
    const COLD_URL ="https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ";
    const RAIN_URL =" https://images.unsplash.com/photo-1508697014387-db70aad34f4d?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return (
        <div className="InfoBox">
            <div className='cardContainer'>
     <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 
          ? RAIN_URL 
          : info.temp > 15 
          ? HOT_URL 
          : COLD_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{
          info.humidity > 80 
          ?  <ThunderstormIcon/>
          : info.temp > 15 
          ? <WbSunnyIcon/>
          : <AcUnitIcon/>
        }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
         <p>Temperature = {info.temp}&deg;C</p>
         <p>Humidity = {info.humidity}</p>
         <p>Min Temp = {info.tempMin}&deg;C</p>
         <p>Max Temp = {info.tempMax}&deg;C</p>
         <p>The weather can be described as {info.weather} and feels like  {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    )
}
