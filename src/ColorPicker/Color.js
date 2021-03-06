import React,{useState} from 'react'
import SingleColor from './SingleColor'
import "./Style.css";
import Values from 'values.js'

const Color = () => {
    const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [list, setList] = useState(new Values('#f15025').all(10))

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      let colors = new Values(color).all(10)
      setList(colors)
    } catch (error) {
      setError(true)
      console.log(error)
    }
  }

    return (
        <div>
            <section className='container'>
        <h3> generator of color</h3>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder='#f13456'
            className={`${error ? 'error' : null}`}
          />
          <button className='btn' type='submit'>
            submit color
          </button>
        </form>
      </section>
      <section className='colors'>
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          )
        })}
      </section>
        </div>
    )
}

export default Color
