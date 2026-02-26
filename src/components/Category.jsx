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
        { name: "Cartoon", code: 1 },           // Film & Animation
        { name: "TV Shows", code: 24 },         // Entertainment
        { name: "CID", code: 24 },              // Entertainment
        { name: "Web Series", code: 24 },       // Entertainment
        { name: "Movies", code: 1 },            // Film & Animation
        { name: "Live", code: 24 },             // Entertainment
        { name: "Kids", code: 1 },              // Film & Animation
        { name: "Vlogs", code: 22 },            // People & Blogs
        { name: "Tech Reviews", code: 28 },     // Science & Tech
        { name: "Motivation", code: 22 }        // People & Blogs
    ];

    return (
        <div className={`w-full  bg-white flex gap-3 list-none px-3 lg:px-0 py-3 top-15 sm:top-20 lg:${sidebar?'left-55':'left-40'} h-fit fixed overflow-auto scroll-none`}>

            <CategoryText categories={categories} setCategory={setCategory} sidebar={sidebar} />

        </div>
    )
}

export default Category
