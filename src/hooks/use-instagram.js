import { useStaticQuery, graphql } from "gatsby";


const useInstagram = () => {
  const data = useStaticQuery(graphql`
  {
    allInstaNode(limit: 12){
      nodes{
        id
        caption
        username
        localFile{
          childImageSharp{
            fluid(maxWidth:120 maxHeight:120){
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
  `); 

  return data.allInstaNode.nodes.map(({localFile, id, caption, username}) => ({
    ...localFile.childImageSharp,
    id,
    caption,
    username,
  }))
}

export default useInstagram;