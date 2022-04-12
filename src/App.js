import "./App.css";
import TextField from "@material-ui/core/TextField";
import car from "./car.png";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useState} from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";





function App() {
  const [cars, setCars] = useState([]);
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [horsePower, setHorsePower] = useState("");
  const [isValid, setIsValid]=useState(false)

  const useStyles = makeStyles((theme) => ({
    textField: {
      margin: "10px 0",
      width: "30%",
      height: "50px",
    },
    app: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
    button: {
      margin: "10px 0",
    },
    heading: {
      textShadow: "1px 1px #ff0000" 
    },
    table:{
      width:"600px"
    }
  }));
  const classes = useStyles();

  const addCarsHandler = () => {
   const oldCars=[...cars];
  const newCar={
    brand,
    model,
    year,
    horsePower,
    id:Math.floor(Math.random()*1000),
  };
  const newCars=oldCars.concat(newCar)
  if(brand==="" || model==="" || year==="" || horsePower=== ""){
    
  alert("This field can not be blank!")
  setIsValid(true)
  }else{
    const newCars=oldCars.concat(newCar)
  }
  
  setCars(newCars);
  setBrand("")
  setModel("")
  setYear("")
  setHorsePower("")

  console.log(newCars);

  };

const id=Math.floor(Math.random()*1000) 

const deleteCarHandler=(id)=>{
  const oldCars=[...cars];
  const newCars=oldCars.filter((car)=>car.id!==id)
  setCars(newCars)
  console.log(newCars);
}




  return (
    <div className={classes.app}>
      <img src={car} style={{ width: "300px" }} alt="" />
      <h1 className={classes.heading}>React JS Car Registration</h1>
      <TextField
        id="outlined-basic"
        label="Brand"
        variant="outlined"
        className={classes.textField}
        onChange={(e) => setBrand(e.target.value)}
        value={brand}
        error={isValid}
      />
      <TextField
        id="outlined-basic"
        label="Model"
        variant="outlined"
        className={classes.textField}
        onChange={(e) => setModel(e.target.value)}
        value={model}
        error={isValid}
      />
      <TextField
        id="outlined-basic"
        label="Year"
        variant="outlined"
        className={classes.textField}
        onChange={(e) => setYear(e.target.value)}
        value={year}
        error={isValid}
      />
      <TextField
        id="outlined-basic"
        label="HorsePower"
        variant="outlined"
        className={classes.textField}
        onChange={(e) => setHorsePower(e.target.value)}
        value={horsePower}
        error={isValid}
      />
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        onClick={addCarsHandler}
      >
     Register Car
      </Button>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Brand</TableCell>
            <TableCell align="center">Model</TableCell>
            <TableCell align="center">Year</TableCell>
            <TableCell align="center">HorsePower</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            cars.map((car,index)=>(
            <TableRow key={index} onClick={()=>deleteCarHandler(car.id)}>
              <TableCell align="center">{car.brand}</TableCell>
              <TableCell align="center">{car.model}</TableCell>
              <TableCell align="center">{car.year}</TableCell>
              <TableCell align="center">{car.horsePower}</TableCell>
            </TableRow>
            )
              
            )
          }
        </TableBody>
      </Table>
    </div>
  );
}

export default App;
