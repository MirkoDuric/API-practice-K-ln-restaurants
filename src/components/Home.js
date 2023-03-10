import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import LoadingIndicator from "./LoadingIndicator";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import useFetch from "./useFetch";
import moneySignGold from "./Dollar_Sign_(Gold).jpg";
import moneySignBlack from "./Dollar_Sign_(Black).jpg";

function Home() {
  const navigation = useNavigate();
  const url = "./Bootcamp_Crossover_2.json";
  const [restaurantType, setRestaurantType] = useState("");
  const [typesofFood, setTypesofFood] = useState([]);
  let { restaurants, isLoading, error, types } = useFetch(url);
  console.log(restaurants);
  const handleOnClick = (e) => {
    navigation(`/${e.target.id}`);
  };
  const handleChange = (e) => {
    setRestaurantType(e.target.value);
  };
  const handleTypes = (restaurants) => {
    restaurants.forEach((restaurant) => {
      restaurant.tags.map((tag) => {
        if (!types.includes(tag)) {
          types = [...types, tag];
        }
      });
    });
  };
  useEffect(() => {
    handleTypes(restaurants);
    setTypesofFood(types);
  }, [restaurants]);

  return (
    <>
      <div className="container">
        <img
          src="https://www.expatica.com/app/uploads/sites/6/2014/05/cologne.jpg"
          alt="Picture of Cologne"
          width="100%"
          height="200"
        />
        <div className="centered">
          <h1>Best Restaurants in Cologne</h1>
        </div>
      </div>
      <div className="filter-center">
        <div className="filter">
          <FormControl sx={{ m: 1, width: 100 + "%" }}>
            <InputLabel id="Type of Restaurant">Restaurant Type</InputLabel>
            <Select
              labelId="Type of Restaurant"
              id="Restaurant Type"
              value={restaurantType}
              label="Restaurant Type"
              onChange={handleChange}
              className="restaurant-type"
            >
              <MenuItem value="">Any</MenuItem>
              {typesofFood.length
                ? typesofFood.map((type) => {
                    return <MenuItem value={type}>{type}</MenuItem>;
                  })
                : null}
            </Select>
          </FormControl>
        </div>
      </div>
      <div className="restaurants">
        {isLoading ? (
          <LoadingIndicator />
        ) : restaurants.length ? (
          restaurantType ? (
            restaurants.map((restaurant) => {
              if (restaurant.tags.includes(restaurantType)) {
                return (
                  <div className="restaurantCard">
                    <Card
                      width="300"
                      height="300"
                      key={restaurant.name}
                      id={restaurant.name}
                    >
                      <CardActionArea
                        id={restaurant.name}
                        onClick={handleOnClick}
                      >
                        <CardMedia
                          component="img"
                          className="card"
                          image={restaurant.logo}
                          alt="Image of the Restaurant"
                          id={restaurant.name}
                        />
                        <CardContent id={restaurant.name}>
                          <Typography
                            id={restaurant.name}
                            gutterBottom
                            variant="h5"
                            component="div"
                          >
                            {restaurant.name}
                          </Typography>
                          <Typography
                            id={restaurant.name}
                            variant="body2"
                            color="text.secondary"
                          >
                            {restaurant.tags.map((tag) => (
                              <p>{tag} </p>
                            ))}
                            <br />
                            {restaurant.price === 1 ? (
                              <>
                                <img
                                  src={moneySignGold}
                                  alt="Gold Money Sign"
                                />
                                <img
                                  src={moneySignBlack}
                                  alt="Black Money Sign"
                                />
                                <img
                                  src={moneySignBlack}
                                  alt="Black Money Sign"
                                />
                                <img
                                  src={moneySignBlack}
                                  alt="Black Money Sign"
                                />
                                <img
                                  src={moneySignBlack}
                                  alt="Black Money Sign"
                                />
                              </>
                            ) : restaurant.price === 2 ? (
                              <>
                                <img
                                  src={moneySignGold}
                                  alt="Gold Money Sign"
                                />
                                <img
                                  src={moneySignGold}
                                  alt="Gold Money Sign"
                                />
                                <img
                                  src={moneySignBlack}
                                  alt="Black Money Sign"
                                />
                                <img
                                  src={moneySignBlack}
                                  alt="Black Money Sign"
                                />
                                <img
                                  src={moneySignBlack}
                                  alt="Black Money Sign"
                                />
                              </>
                            ) : restaurant.price === 3 ? (
                              <>
                                <img
                                  src={moneySignGold}
                                  alt="Gold Money Sign"
                                />
                                <img
                                  src={moneySignGold}
                                  alt="Gold Money Sign"
                                />
                                <img
                                  src={moneySignGold}
                                  alt="Gold Money Sign"
                                />
                                <img
                                  src={moneySignBlack}
                                  alt="Black Money Sign"
                                />
                                <img
                                  src={moneySignBlack}
                                  alt="Black Money Sign"
                                />
                              </>
                            ) : restaurant.price === 4 ? (
                              <>
                                <img
                                  src={moneySignGold}
                                  alt="Gold Money Sign"
                                />
                                <img
                                  src={moneySignGold}
                                  alt="Gold Money Sign"
                                />
                                <img
                                  src={moneySignGold}
                                  alt="Gold Money Sign"
                                />
                                <img
                                  src={moneySignGold}
                                  alt="Gold Money Sign"
                                />
                                <img
                                  src={moneySignBlack}
                                  alt="Black Money Sign"
                                />
                              </>
                            ) : restaurant.price === 5 ? (
                              <>
                                <img
                                  src={moneySignGold}
                                  alt="Gold Money Sign"
                                />
                                <img
                                  src={moneySignGold}
                                  alt="Gold Money Sign"
                                />
                                <img
                                  src={moneySignGold}
                                  alt="Gold Money Sign"
                                />
                                <img
                                  src={moneySignGold}
                                  alt="Gold Money Sign"
                                />
                                <img
                                  src={moneySignGold}
                                  alt="Gold Money Sign"
                                />
                              </>
                            ) : null}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </div>
                );
              }
            })
          ) : (
            restaurants.map((restaurant) => {
              return (
                <div className="restaurantCard">
                  <Card
                    width="300"
                    height="300"
                    key={restaurant.name}
                    id={restaurant.name}
                  >
                    <CardActionArea
                      id={restaurant.name}
                      onClick={handleOnClick}
                    >
                      <CardMedia
                        component="img"
                        className="card"
                        image={restaurant.logo}
                        alt="Image of the Restaurant"
                        id={restaurant.name}
                      />
                      <CardContent id={restaurant.name}>
                        <Typography
                          id={restaurant.name}
                          gutterBottom
                          variant="h5"
                          component="div"
                        >
                          {restaurant.name}
                        </Typography>
                        <Typography
                          id={restaurant.name}
                          variant="body2"
                          color="text.secondary"
                        >
                          {restaurant.tags.map((tag) => (
                            <p>{tag} </p>
                          ))}
                          <br />
                          {restaurant.price === 1 ? (
                            <>
                              <img src={moneySignGold} alt="Gold Money Sign" />
                              <img
                                src={moneySignBlack}
                                alt="Black Money Sign"
                              />
                              <img
                                src={moneySignBlack}
                                alt="Black Money Sign"
                              />
                              <img
                                src={moneySignBlack}
                                alt="Black Money Sign"
                              />
                              <img
                                src={moneySignBlack}
                                alt="Black Money Sign"
                              />
                            </>
                          ) : restaurant.price === 2 ? (
                            <>
                              <img src={moneySignGold} alt="Gold Money Sign" />
                              <img src={moneySignGold} alt="Gold Money Sign" />
                              <img
                                src={moneySignBlack}
                                alt="Black Money Sign"
                              />
                              <img
                                src={moneySignBlack}
                                alt="Black Money Sign"
                              />
                              <img
                                src={moneySignBlack}
                                alt="Black Money Sign"
                              />
                            </>
                          ) : restaurant.price === 3 ? (
                            <>
                              <img src={moneySignGold} alt="Gold Money Sign" />
                              <img src={moneySignGold} alt="Gold Money Sign" />
                              <img src={moneySignGold} alt="Gold Money Sign" />
                              <img
                                src={moneySignBlack}
                                alt="Black Money Sign"
                              />
                              <img
                                src={moneySignBlack}
                                alt="Black Money Sign"
                              />
                            </>
                          ) : restaurant.price === 4 ? (
                            <>
                              <img src={moneySignGold} alt="Gold Money Sign" />
                              <img src={moneySignGold} alt="Gold Money Sign" />
                              <img src={moneySignGold} alt="Gold Money Sign" />
                              <img src={moneySignGold} alt="Gold Money Sign" />
                              <img
                                src={moneySignBlack}
                                alt="Black Money Sign"
                              />
                            </>
                          ) : restaurant.price === 5 ? (
                            <>
                              <img src={moneySignGold} alt="Gold Money Sign" />
                              <img src={moneySignGold} alt="Gold Money Sign" />
                              <img src={moneySignGold} alt="Gold Money Sign" />
                              <img src={moneySignGold} alt="Gold Money Sign" />
                              <img src={moneySignGold} alt="Gold Money Sign" />
                            </>
                          ) : null}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </div>
              );
            })
          )
        ) : (
          <h1>An Error Has Occurred: {error}</h1>
        )}
      </div>
    </>
  );
}

export default Home;
