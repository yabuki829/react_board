import './App.css';
import { useSelector,useDispatch } from "react-redux";
import {addPost,deletePost} from "./features/Posts"
import { useState } from 'react';


function App() {
  const [name,setName] = useState("")
  const [content,setContent] = useState("")

  const postList = useSelector((state) => state.posts.value);
  const dispatch = useDispatch()
  const handlePost = () => {
    dispatch(addPost({
      id:postList.length ,
      name:name,
      content:content,
    }))
    setName("")
    setContent("")
  };

  console.log(postList)
  return (
    <div className="App">
      <div>
        <h1>掲示板</h1>
      </div>
        <div className='addPost'>
          <input type="text" placeholder="名前" onChange={(e) => setName(e.target.value) }value={name} />
          <input type="text" placeholder="投稿内容" onChange={(e) => setContent(e.target.value) }value={content} />
          <button onClick={ () => handlePost()}>投稿</button>
          <hr/>
        </div>
        <div className='displayPosts'>
          { postList.map((post) => (
            <div key={post.id} className="post">
              <h1 className='postName'>{post.name}</h1>
              <h1 className='postContent'>{post.content}</h1>
              <button onClick={ () =>dispatch(deletePost({id:post.id}))}>削除</button>
            </div>
          )) }
        </div>
    </div>
  );
}

export default App;
