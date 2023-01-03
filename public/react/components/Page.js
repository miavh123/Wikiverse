import React, {useState} from 'react';
import apiURL from '../api';

export const Article = (props) =>{
   
  const date = props.article.createdAt.slice(0,10)
  return   <div>
   <h4> {props.article.author.name}</h4>

   <h4 className = 'content'>
    {props.article.content}</h4>
    <div className='tag'>
    <h6> {props.article.tags.map((tag) => tag.name + " ")}</h6>
    </div>
   <h4>{date}</h4>
   <button onClick = {()=> {props.setArticle(undefined)}}> Back to Wikki list  </button>
  </div>
}


export const Page = (props) => {
 
  const [article, setArticle] = useState(undefined);

  const handleClick = async () => {
   
    const response = await fetch(`${apiURL}/wiki/${props.page.slug}`);
    const data = await response.json();
    console.log(data);
    setArticle(data);
  }
  return <>
  <h3 className="headline" 
    onClick={ handleClick }>{props.page.title}</h3>
    <div className="article">
      
        <h4> {article ? `Title: ${article.title}`:""}</h4>
        <h4>{article ? `Author: ${article.author.name}`:""}</h4>
        <h4>{article ? `Content: ${article.content}`:""}</h4>
        {
          article ? <Article article = {article} setArticle={setArticle}/> :""
        }
    </div>
</>

    }
	