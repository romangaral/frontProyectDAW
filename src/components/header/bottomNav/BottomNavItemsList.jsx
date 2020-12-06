import React from 'react';
import { Link } from 'react-router-dom';

function BottomNavItemsList({ category }) {

    return (
        <Link className="nav-link" to={`/category/${category.id}`} >{category.name.toUpperCase()}</Link>
    );
}
export default BottomNavItemsList;