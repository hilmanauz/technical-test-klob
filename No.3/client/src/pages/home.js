import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Card from '../components/card' 

export default function Home() {
  const [contents, setContents] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/contents')
      .then(({data}) => {
        setContents(data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  return (
    <div className="container">
      {
        contents?.map((content, idx) => {
          return <Card key={idx} content={content}></Card>
        })
      }
    </div>
  )
}
