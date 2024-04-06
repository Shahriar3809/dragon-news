import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSideNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(()=> {
        fetch('categories.json')
        .then(res=> res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div>
            <h2>All Categories: {categories.length}</h2>
            {
               categories.map(category => <Link 
                to={`/category/${category.id}`}
                className="block p-4 tex-xl font-semibold" 
               key={category.id}>{category.name}</Link>) 
            }
        </div>
    );
};

export default LeftSideNav;