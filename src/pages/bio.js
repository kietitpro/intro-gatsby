import React from "react"

// Adding the "Link" component from the "gatsby" library will allow you to link internal pages 
// uses react - router underneath

import { Link } from "gatsby"
// Adding the "Layout" component will allow you to keep consistent layouts throughout your app
// To make adjustments to the "layout" component, go to the layout.js file


import Layout from "../components/layout"
import SEO from "../components/seo"

// Adding a component inside the 'pages' directory will automatically create that page for you with the path "/bio"
const Bio = () => {
    return (
        <Layout>
            <SEO title="Bio" />
            <img src="https://source.unsplash.com/random/400x200" alt=""/>
            <h1>Hi, My name is Kiet.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aut necessitatibus dolor odit fuga corporis, a vitae unde itaque illo eaque, ipsum tenetur, amet nemo incidunt. Doloribus praesentium consequatur molestias possimus fugit vitae quis porro aliquam! Quas dolorum facilis quos est natus expedita labore beatae recusandae aut dolorem error, laudantium nulla, quidem nemo fuga eveniet unde rerum suscipit atque eius obcaecati odit consectetur. Possimus illo laboriosam quidem alias ullam temporibus exercitationem, incidunt delectus ducimus eum officiis veniam, vel, pariatur molestias beatae quisquam vitae aspernatur eligendi dicta? Quia odio expedita cum sunt in quasi debitis, officia a adipisci sit amet optio!</p>
            <Link to="/">&larr; Back to Home</Link>
        </Layout>
    )
}

export default Bio