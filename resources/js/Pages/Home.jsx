import React, { useState } from 'react'
import Layout from '../Layouts/Layout'
import { Link, usePage, Head } from '@inertiajs/react'
import { useRoute } from 'vendor/tightenco/ziggy';


const Home = ({ posts }) => {
  // console.log(posts);
  const route = useRoute();
  console.log(usePage());
  const {flash} = usePage().props;
  const {component} = usePage();
  const [flashMsg, setFlashMsg]  = useState(flash.message);
  const [flashSuc, setFlashSuc]  = useState(flash.success);

  setTimeout(()=>{
    setFlashMsg(null);
    setFlashSuc(null);
  },2000);

  return (
    <>
      <Head title={component} />
      <h1 className='title'>Home Page</h1>
      { flashMsg && <div className='absolute top-24 right-6 bg-rose-500 
      p-2 rounded-md shadow-lg text-sm text-white'>{flashMsg}</div>}
      { flashSuc && <div className='absolute top-24 right-6 bg-green-500 
      p-2 rounded-md shadow-lg text-sm text-white'>{flashSuc}</div>}
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