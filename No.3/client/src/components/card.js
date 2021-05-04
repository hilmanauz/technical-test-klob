import React from 'react'
import {useHistory} from 'react-router-dom'

export default function Card({content}) {
  const history = useHistory()
  const goToDetail = () => {
    if(history.location.pathname === '/'){
      history.push(`/${content.title}`)
    } else {
      history.push(`/detail${history.location.pathname}/${content.id}`)
    }
  }

  return (
    <div className="card" onClick={goToDetail}>
      <img src={content.linkPicture} alt="CATEGORY" className="image-card"/>
      <h4 className="title-card">{content.title.toUpperCase()}</h4>
    </div>
  )
}
