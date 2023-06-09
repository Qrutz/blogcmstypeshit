import Image from 'next/image';
import { client } from '../sanity/lib/client';

export default async function Home() {
  const posts = await client.fetch(`*[_type == "post"]{
    title,
    "body": body[0].children[].text,
    
    
    
    
  
      
      
      
    
    author-> {
      name,
      "image": image.asset->url

      
    }
  
  }
  `);
  console.log(posts);

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='flex flex-col items-center justify-center'>
        {posts.map((post: any) => (
          <div className='flex flex-col items-center  p-4 bg-slate-200 '>
            <h2>Title: {post.title}</h2>
            <p>Body: {post.body}</p>
            <span className='flex gap-2 items-center '>
              <p>Author: {post.author.name}</p>
              <Image
                src={post.author.image}
                alt='Picture of the author'
                width={100}
                height={100}
                className='rounded-full mb-2'
              />
            </span>
          </div>
        ))}
      </div>
    </main>
  );
}
