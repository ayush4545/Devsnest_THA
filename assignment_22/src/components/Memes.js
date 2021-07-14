import React, { useState } from 'react'
import "./css/Meme.css"
function Memes({memes,setMemes}) {
   
    const [imgSrc,setImgSrc]=useState(memes.url)
    const [form,setForm]=useState({
       template_id:memes.id,
       username:"ayushmishra6",
       password:"ayush4545",
       boxes:[]

    })
    const arr=[...Array(memes.box_count)]

    const generateMeme=()=>{
        let url=`https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`

        form.boxes.map((box,index)=>{
          url+=`&boxes[${index}][text]=${box.text}`;
        })

      const getData = async ()=>{
          const response=await fetch(url)
          const data= await response.json()
          console.log(data.data.url)
          setImgSrc(data.data.url)
      }
        getData()
    }
    return (
        <div className="memesDiv">
             <img src={imgSrc} alt={memes.name} />

             <div>
                {arr.map((_,index)=>{
                   return <input type="text" key={index}  placeholder={`meme Caption ${index+1}`} 
                       onChange={(e)=>{
                          const newBoxes=form.boxes;
                          newBoxes[index]={text:e.target.value}
                          setForm({...form,boxes:newBoxes})
                       }}
                   />
                })}
                
             </div>  
             <div className="btns">
                 <button onClick={generateMeme}>Create Meme</button>
                 <button onClick={()=>setMemes(null)}>Choose Template</button>
             </div>
        </div>
    )
}

export default Memes
