import React, { useEffect, useState } from "react";
import "./Covid.css";

const Covid = () => {
  const [data, setData] = useState([]);

  const getCovidData = async () => {
    try {
      const res = await fetch("https://data.covid19india.org/data.json");
      const actualData = await res.json();
      console.log(actualData.statewise[0]);
      setData(actualData.statewise[0]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      <h3 className="text-center">🔴 LIVE COVID-19 CORONAVIRUS TRACKER</h3>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="card1">
              <p className="card__name">
                <span>OUR</span>COUNTRY
              </p>
              <p className="card__small">INDIA</p>
            </div>
          </div>
          <div className="col-4">
            <div className="card2">
              <p className="card__name">
                <span>TOTAL</span>RECOVERED
              </p>
              <p className="card__small">{data.recovered}</p>
            </div>
          </div>
          <div className="col-4">
            <div className="card3">
              <p className="card__name">
                <span>TOTAL</span>CONFIRMED
              </p>
              <p className="card__small">{data.confirmed}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <div className="card4">
              <p className="card__name">
                <span>TOTAL</span>DEATH
              </p>
              <p className="card__small">{data.deaths}</p>
            </div>
          </div>
          <div className="col-4">
            <div className="card5">
              <p className="card__name">
                <span>TOTAL</span>ACTIVE
              </p>
              <p className="card__small">{data.active}</p>
            </div>
          </div>
          <div className="col-4">
            <div className="card6">
              <p className="card__name">
                <span>LAST</span>UPDATED
              </p>
              <p className="card__small">{data.lastupdatedtime}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Covid;
