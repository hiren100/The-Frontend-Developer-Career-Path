import React from 'react';
import logo from './assets/react.svg';
import Die from './Die'
import './App.css';
import Child from "./Child"
import {HigherOrder} from "./HigherOrder"
import Image from "./assets/images/large01.jpg"
import PlaceholderImage from "./assets/images/small01.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';


const styles = {
  fontSize : "20px"
}

function App() {

  let [count,setCount] = React.useState(0)

  function add(){
    setCount(count + 1)
  }
  function minus(){
    setCount(count - 1)
  }

  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    passwordConfirm: "",
    joinedNewsletter: true
  })  
  
  
  function handleChange(event) {
    const {name, value, type, checked} = event.target
    setFormData(prevFormData => ({
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
    }))
    }


    function handleSubmit(event) {
        event.preventDefault()

        if(formData.password === formData.passwordConfirm){
          document.querySelector('.msg').innerHTML = "Successfully signed up"
        }else{
          document.querySelector('.msg').innerHTML = "passwords to not match"
          return
        }

        if(formData.joinedNewsletter){
          console.log('Thanks for signing up for our newsletter!') 
        }
    }

    const [windowWidth, setwindowWidth] = React.useState(window.innerWidth)
    const [windowHeight, setwindowHeight] = React.useState(window.innerHeight)
    const [colorValue1, setColorValue1] = React.useState(20)
    const [colorValue2, setColorValue2] = React.useState(20)
    const [colorValue3, setColorValue3] = React.useState(20)
    
    React.useEffect(() => {
        window.addEventListener("resize", function() {
            setwindowWidth(window.innerWidth)
            setwindowHeight(window.innerHeight)
            let randomNo1 = Math.floor(Math.random() * 1000)
            let randomNo2 = Math.floor(Math.random() * 100)
            let randomNo3 = Math.floor(Math.random() * 100)

            setColorValue1(randomNo1)
            setColorValue2(randomNo2)
            setColorValue3(randomNo3)
        })
    }, [])


    const [dice, setDice] = React.useState(allNewDice())
    
    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push({
              value : Math.ceil(Math.random() * 6),

            })                                                                                                  
        }
        return newDice
    }
    
    const diceElements = dice.map(die => <Die value={die.value} />)
    
    function rollDice(){

      setDice(allNewDice())
    }

    let html= [1,2]
    const a = <LazyLoadImage src={Image}
      width={600} height={400}
      alt="Image Alt"
      effect="blur"
    />
    const lazyLoadImg = html.map(x => {
      return <p key={x}>{a}</p>
    })


    

  return (
    <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
            <input 
                type="email" 
                placeholder="Email address"
                className="form--input"
                name="email"
                onChange={handleChange}
                value={formData.email}
            />
            <input 
                type="password" 
                placeholder="Password"
                className="form--input"
                name="password"
                onChange={handleChange}
                value={formData.password}
            />
            <input 
                type="password" 
                placeholder="Confirm password"
                className="form--input"
                name="passwordConfirm"
                onChange={handleChange}
                value={formData.passwordConfirm}
            />
            
            <div className="form--marketing">
                <input
                    id="okayToEmail"
                    type="checkbox"
                    name="joinedNewsletter"
                    onChange={handleChange}
                    checked={formData.joinedNewsletter}
                />
                <label htmlFor="okayToEmail">I want to join the newsletter</label>
            </div>
            <button 
                className="form--submit"
            >
                Sign up
            </button>
            <div className="msg"></div>
        </form>
        <Child>Children Component example</Child>
        <ul className='ul' style={styles}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        {lazyLoadImg}


      <h1 style={{fontSize: "clamp(1.7rem, 3vw , 2.5rem)"}}>Windows width : {windowWidth}</h1>
      <h1 style={{fontSize: "clamp(1.7rem, 3vw , 2.5rem)"}}>Windows height : {windowHeight}</h1>

      <div style={{width: "400px", height:"400px", backgroundColor: `hsla(${colorValue1}, ${colorValue2}%, ${colorValue3}%, 1)`}}></div>
      <div className='dice-wrapper'>{diceElements}</div>
      <button onClick={rollDice}>Roll Dice</button>
      <button onClick={add}>+</button>{count}
      <button onClick={minus}>_</button>
    </div>

  );
}
const superApp = HigherOrder(App)
export default superApp;
