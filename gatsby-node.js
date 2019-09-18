exports.createPages = async ({actions, graphql, repoter}) => {
  const result = await graphql(`
  {
    allFile (filter: {sourceInstanceName: {eq: "posts"} extension: {eq: "mdx"}}){
      nodes {
        extension
        childMdx {
          frontmatter{
            title
            slug
            author
          }
        }
      }
    }
  }
   `)

  if(result.errors)
    repoter.panic(`failed to create posts ${result.errors}`)
  
  const posts = result.data.allFile.nodes;

  posts.forEach(({childMdx: { frontmatter }}) => {
    actions.createPage({
      path: frontmatter.slug,
      component: require.resolve('./src/template/post-template.js'),
      context: {
        slug: frontmatter.slug
      }
    })
  });

}