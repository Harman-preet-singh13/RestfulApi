import { useEffect, useState } from "react";
import axios from "axios";


const clinet = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts"
});


export default function UsingAxios() {
    const [posts, setPosts] = useState([]);
      
    const [body, setBody] = useState('');
    const [title, setTitle] = useState('');
  
    useEffect(() => {
      const fetchPost = async () => {
        let res = await clinet.get(`?_limit=10`);
        console.log(res.data);
        setPosts(res.data)
      };
      fetchPost()
    }, []);
  
    const addPosts = async (title, body) => {
      let res = await clinet.post('', {
        title: title,
        body: body,
      });
      setPosts((posts)=> [res.data, ...posts])
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      addPosts(title, body)
    }
  
    const deletePost = async (id) => {
      await clinet.delete(`${id}`);
      setPosts(posts.filter((post)=> {
        return post.id !== id;
      }))
    }
  
    return (
      <div className=" container mx-auto mb-10">
  
        <div className=" my-5">
          <div>
            <h1 className=" my-3 text-2xl font-semibold">
              Create a new post
            </h1>
          </div>
          <form
            className="  bg-white shadow-md rounded"
            onSubmit={handleSubmit}>
            <input
              text="text"
              className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="title"
              required
            />
            <textarea
              text="text"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="body"
  
              required
            />
            <div className=" my-4 flex text-center justify-center">
              <button
                className=" my-1 px-2 py-1 font-semibold text-white bg-green-500 rounded-2xl hover:bg-green-700"
                type="submit"
              >
                Add Post
              </button>
            </div>
  
          </form>
        </div>
  
        <div className=" my-10">
          <h1 className=" font-semibold text-4xl text-center text-red-500">
            Posts
          </h1>
        </div>
        {posts.map((post) => {
          return (
            <div
              className=" border px-5 py-5 drop-shadow-lg"
              key={post.id}
            >
              <div className=" flex gap-2">
                <h1 className=" font-semibold text-xl">
                    {post.id}.
                </h1>
                <h1 className=" font-semibold text-xl">
                  {post.title}
                </h1>
              </div>
  
              <p className=" text-slate-600">
                {post.body}
              </p>
              <button
                className="mt-1 px-2 py-1 font-semibold text-white bg-red-500 rounded-2xl hover:bg-red-700 "
                onClick={() => deletePost(post.id)}
              >
                Delete
              </button>
            </div>
          )
        })}
      </div>
    );
  
}
