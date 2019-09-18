import React from 'react';
import Layout from '../components/layout';
import usePosts from '../hooks/use-posts';
import PostPreview from '../components/post-preview';
import Hero from '../components/hero';
import Insta from '../components/insta';

export default () => {
  const posts = usePosts();
  
  return (
    <>
      {console.log(posts)}
      <Hero/>
      <Layout>
        <h2>Read my blog</h2>
        {
          posts.map((post) => (
            <PostPreview post={post} key={post.slug}/>
          ))
        }
        <Insta/>
      </Layout>
    </>
  )
}
