import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Card from '../components/card'
import axios from 'axios'

export default function GroupList() {
  const {title} = useParams()
  const [lists, setLists] = useState([])
  useEffect(() => {
    axios.get(`http://localhost:3000/contents?title=${title}`)
      .then(({data}) => {
        setLists(data[0].lists)
      })
      .catch(err => {
        console.log(err)
      })
      // eslint-disable-next-line
  }, []) 

  return (
    <div className="container-detail">
      {
        lists?.map((list, idx) => {
          return <Card key={idx} content={list}></Card>
        })
      }
    </div>
  )
}
