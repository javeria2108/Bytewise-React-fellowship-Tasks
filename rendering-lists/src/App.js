import logo from './logo.svg';
import './App.css';

function App() {
  const cars=[{
    id: 0,
    brand:'Mercedes',
    name:'Mercedes Benz',
    price:13600000,
    },{
    id:1,
    brand:'Ferrari',
    name: 'Ferrari F8 Tributo',
    price:45080000,
    },{
     id:2,
     brand:'lamborghini',
     name:'lamborghini aventador',
     price:72671100, 
    },{
      id:3,
      brand:'suzuki',
      name: 'Suzuki swift',
      price: 4725000,
    },{
      id:4,
      brand:'Mercedes',
      name:'Mercedes Benz A class',
      price: 65000000,
    }
  ]
 const favCar=cars.filter(car=> car.brand==='Mercedes');
const Mercedes=favCar.map(car=> <li>
<p><b>{car.name}:</b>
      {' '+ car.price + ' Rs/-' }  </p>
</li>
)


  return (
    <div>
     <h1>Car Prices</h1>
     {Mercedes}
    </div>
 
     
  );
}

export default App;
