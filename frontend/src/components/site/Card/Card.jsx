import "./Card.scss"
import { Link } from 'react-router-dom'
import MainContext from "../../../context/context"
import { React, useContext, useState } from 'react'


const Card = () => {
  const { data, addToBasket } = useContext(MainContext);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState(null);
  return (
    <div className='cards_main'>
      <div className='cards_title'>
        <h3>
          New realeased Products for Women
        </h3>
        <p>Who are in extremely love with eco friendly system.</p>
      </div>
      <div className='container'>
        <input type='text' placeholder='search_data' value={search} onChange={(e) => setSearch(e.target.value)} />
        <button onClick={() => setSortBy({ field: "title", asc: true })}>A-Z</button>
        <button onClick={() => setSortBy({ field: "title", asc: false })}>Z-A</button>
        <button onClick={() => setSortBy({ field: "price", asc: true })}>Azalan</button>
        <button onClick={() => setSortBy({ field: "price", asc: false })}>Artan</button>
        <button onClick={() => setSortBy(null)}>default</button>
        <div className="row cards">
          {data
            .filter(x => x.title.toLowerCase().includes(search.toLocaleLowerCase()))
            .sort((a, b) => {
              if (!sortBy) {
                return 0;
              }
              else if (sortBy.asc) {
                return (a[sortBy.field] > b[sortBy.field]) ? 1 : ((b[sortBy.field] > a[sortBy.field]) ? -1 : 0)
              }
              else if (sortBy.asc == false) {
                return (a[sortBy.field] < b[sortBy.field]) ? 1 : ((b[sortBy.field] < a[sortBy.field]) ? -1 : 0)
              }

            })
            .map((item, index) => (
              <div div className="col-3 card" key={index}>
                <img src={item.image} alt="" />
                <h4>{item.title}</h4>
                <h3>${item.price}</h3>
                <div className='buttons'>
                  <button onClick={() => {
                    addToBasket(item._id);
                  }}>Add to Basket</button>
                  <Link to={`/detail/${item._id}`}>Go Details</Link>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Card



