import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

export default function GroupDetail() {
  const params = useParams()
  const [detail, setDetail] = useState([])
  useEffect(() => {
    axios.get(`http://localhost:3000/contents?title=${params.title}`)
      .then(({data}) => {
        const filter = data[0].lists.filter( list => list.id === Number(params.id) )
        setDetail(filter[0])
      })
      .catch(err => {
        console.log(err)
      })
      // eslint-disable-next-line
  }, [])

  if (detail.length !== 0) {
    return (
      <div id="container-detail">
          <img src={detail.linkPicture} alt="TITLE" className="image-card-detail"/>
          <h2 className="title-card">{detail.title}</h2>
          <p className="description-card">{detail.description}</p>
      </div>
    )
  } else {
    return (
      <div id="container-detail">
        <img src="https://i.giphy.com/media/3oEjI6SIIHBdRxXI40/source.gif" alt="loading"/>
      </div>
    )
  }
}
