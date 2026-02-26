import React from 'react'
import './../App.css'
import CategoryText from './CategoryText'

const Category = ({setCategory,sidebar}) => {

    const categories = [
        { name: "Music", code: 10 },
        { name: "Gaming", code: 20 },
        { name: "Sports", code: 17 },
        { name: "News", code: 25 },
        { name: "Entertainment", code: 24 },
        { name: "Education", code: 27 },
        { name: "Science & Technology", code: 28 },
        { name: "Film & Animation", code: 1 },
        { name: "Autos & Vehicles", code: 2 },
        { name: "Comedy", code: 23 },
        { name: "Cartoon", code: 1 },         
        { name: "TV Shows", code: 24 },       
        { name: "CID", code: 24 },              
        { name: "Web Series", code: 24 },      
        { name: "Movies", code: 1 },            
        { name: "Live", code: 24 },           
        { name: "Kids", code: 1 },            
        { name: "Vlogs", code: 22 },         
        { name: "Tech Reviews", code: 28 },  
        { name: "Motivation", code: 22 }        
    ];

    return (
        <div className={`w-full bg-white flex juc gap-3 list-none px-3 lg:px-0 py-3 top-15 sm:top-20 ${sidebar?'lg:left-55':'lg:left-40'} h-fit fixed overflow-auto scroll-none`}>

            <CategoryText categories={categories} setCategory={setCategory} sidebar={sidebar} />

        </div>
    )
}

export default Category
