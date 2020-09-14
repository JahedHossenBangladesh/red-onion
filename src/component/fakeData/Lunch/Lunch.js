import React, { useEffect, useState } from 'react';
import Data from '../FakeData/fakeData'

const Lunch = () => {
    const [takedata,setTakeData] = useState(Data);
    const [fooditem,setFooditem] = useState([]);
    const [category,setCategory] = useState('lunch');
    console.log(Data);
    console.log(category);
 console.log(takedata);
useEffect( () => {
    const lunchData = takedata.filter(food => food.category === category   //'lunch'
     );
    setFooditem(lunchData);
      console.log(lunchData);

},[category]);

console.log(fooditem);




    return (
        <div>
            <h1>This is Lunch</h1>
      
        </div>
    );
};

export default Lunch;