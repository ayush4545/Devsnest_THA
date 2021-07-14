import React from 'react'

function Templates({templates,setMemes}) {
    return (
        <div className="templates">
            {templates.map((template)=>(
            <div key={template.id} className="templateDiv" onClick={()=> setMemes(template)}>
               <div className="image" style={{backgroundImage:`url(${template.url})`}}> </div>
            </div>
          ))}
            
        </div>
    )
}

export default Templates
