import { useStaticQuery, graphql } from "gatsby";


const usePosts = () => {
  const data = useStaticQuery(graphql`
  {
    allMdx (filter: {frontmatter: {category: {eq: "post"}}}) {
      nodes {
        excerpt
        frontmatter {
          title
          slug
          author
          image {
            sharp:childImageSharp {
              fluid (
                maxWidth: 100
                maxHeight: 100
                duotone: {
                  shadow: "#663399",
                  highlight: "#ddbbff"
                }
              ){
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
  `)

  return data.allMdx.nodes.map( ({ frontmatter, excerpt }) => ({
    title: frontmatter.title,
    author: frontmatter.author,
    slug: frontmatter.slug,
    image: frontmatter.image,
    excerpt
  }))
  
}

export default usePosts;