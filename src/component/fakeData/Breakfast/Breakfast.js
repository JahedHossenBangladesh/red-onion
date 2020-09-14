import React, { useEffect, useState } from 'react';
import FoodItem from '../../FoodItem/FoodItem';
import Data from '../FakeData/fakeData';


const Breakfast = () => {
    const [takedata,setTakeData] = useState(Data);
    const [fooditem,setFooditem] = useState([]);
    const [category,setCategory] = useState('Breakfast');
   useEffect( () => {
    const lunchData = takedata.filter(food => food.category === category   //'lunch'
     );
    setFooditem(lunchData);


},[category,takedata]);

console.log(fooditem,"food");

    return (
        <div className="row" >
        {
            fooditem.map(dinner => <FoodItem data={dinner}></FoodItem>)
        }
      
        </div>
    );
};

export default Breakfast;