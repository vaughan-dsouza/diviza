import React from 'react'
import Layout from '../Layouts/Layout'
import { Link } from '@inertiajs/react'
import { useRoute } from '../../../vendor/tightenco/ziggy';


const Home = ({ posts }) => {
  // console.log(posts);
  const route = useRoute()
  return (
    <>
      <h1 className='title'>Home Page</h1>
      {/* <Link preserveScroll href='/' className='block title mt-[1000px]'>
        {new Date().toLocaleTimeString()}
      </Link> */}
      <div>
        {posts.data.map(post => (
          <div key={post.id} className='p-4 border-b'>
            <div className='text-sm text-stale-600'> 
              <span>Posted on: </span>
              <span>{new Date(post.created_at).toLocaleTimeString()}</span>
            </div>
            <p className='font-medium'>
              {post.body}
            </p>

            {/* <Link href={`/posts/${post.id}`} className='text-link'>Read more...</Link> */}
            <Link href={route('posts.show', post)}
             className='text-link'>Read more...</Link>

          </div>
        ))}
      </div>

      <div className="px-4 py-12 flex justify-center items-center">
      {posts.links.map(link => (
          link.url ?
          (<Link 
            href={link.url}
            key={link.label}
            dangerouslySetInnerHTML={{ __html: link.label}}
            className={`p-1 mx-1 ${ link.active ? "text-blue-500 font-bold" : ""}`}
          />
          ): (
          <span
            key={link.label}
            dangerouslySetInnerHTML={{ __html: link.label}}
            className="p-1 mx-1 text-gray-200"
            ></span>)
        ))}
      </div>
    </>
  )
}

// Home.layout = page => <Layout children={page} />
export default Home;