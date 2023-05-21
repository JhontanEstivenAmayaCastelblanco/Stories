import React from 'react';
import { useState, useEffect } from 'react';
export const Slider = () => {
  const [Comics, setComics] = useState([]);
  const getData = () => {
    fetch('lambda.json'
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then(function (response) {
        console.log(response)
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setComics(myJson.data.results);
      });
  }
  useEffect(() => {
    getData()
  }, [])
  var name ="";
  return (
    <div className="bg-light">
    <h2 style={{color:'black', marginLeft: 50, marginTop: 100, marginRight: 50,textAlign:'center'}}>Series</h2>
    <div className='row row-cols-1 row-cols-md-3 g-4' style = {{backgroundColor: 'white', marginLeft: 50, marginTop: 100, marginRight: 50}}>
      {Comics.map(per => (
        name = per.series.items[0]?.name || 'DESCONOCIDO',
        <div className="col" style = {{backgroundColor: 'white'}}>
          <div className="card border-light mb-3" style= {{width: 400 , alignContent: 'center'}} >
            {/* <img src={`${per.thumbnail.path}.${per.thumbnail.extension}`} class="card-img-top" /> */}
            <div className="card-body">
              <p className="card-text">
              </p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item" >{`${per.title}`}</li>
              <li class="list-group-item">{`${name}`}</li>
            </ul>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Slider;