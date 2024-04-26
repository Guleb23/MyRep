import React, { useState } from "react";
import './fav.css'

export default function Favorites() {
  const [visible, setVisible] = useState()
  const [recommendation, setRecomendetion] = useState(' ');
  const [genre, setGenre] = useState('Rock');
  const [mood, setMood] = useState('Happy');
  const [timeOfDay, setTimeOfDay] = useState('Morning');
  const [activity, setActivity] = useState('Work');
  const [loading, setLoading] = useState(false);
  const fetchRecomend = () =>{
    setLoading(true);
    fetch(`http://localhost:8080/api/suggestions?inputs=${(JSON.stringify({genre, mood, timeOfDay, activity}))}`).then((res)=> res.json()).then((data)=>{
      setRecomendetion(data.aiResponse);
      console.log(recommendation);
      setLoading(false);
    }).catch((error)=>{
      console.error("Error fetch", error);
      setLoading(false);
    })

    let className = 'rec'
    if (recommendation) className += ' visible'
    return <div  className={className}></div>
    
  }

  return <div className="screen-container">
    <div className="widgets-body">
      <div className="flex-container">
        <div className="song-title"> Рекомендации</div>
        <div className="recom">
          <div className="card">
            <label className="label" > Занятие: </label>
            <select 
            id="activity"
            value={activity}
            onChange={(e)=>setActivity(e.target.value)}
            className="sel">
              <option value="Working out">Воркаут</option>
              <option value="Studing">Учеба</option>
              <option value="Driving">Езда</option>
              <option value="Relaxing">Отдых</option>
              <option value="Cooking">Готовка</option>
              <option value="Working">Работа</option>
              <option value="Reading">Чтение</option>
            </select>
          </div>
          <div className="card">
            <label  className="label" > Жанр: </label>
            <select 
            
            id="genre"
            value={genre}
            onChange={(e)=>setGenre(e.target.value)}
            className="sel">
            <option value="Pop">Поп</option>
            <option value="Rock">Рок</option>
            <option value="Jazz">Джаз</option>
            <option value="Classical">Классическая</option>
            <option value="Hip hop">Хип-хоп</option>
            <option value="Rap">Реп</option>
          </select>
          </div>

          <div className="card">
            <label className="label" > Настроение: </label>
            <select 
          id="mood"
          value={mood}
          onChange={(e)=>setMood(e.target.value)}
          className="sel">
            <option value="Happy">Веселая</option>
            <option value="Sad">Грустная</option>
            <option value="Energitic">Энергичная</option>
            <option value="Calm">Calm</option>
            <option value="Romantic">Романтическая</option>
            <option value="Motivational">Для мотивации</option>
            
          </select>
          </div>
      
          <div className="card">
            <label className="label" > Время суток: </label>
            <select 
          id="timeOfDay"
          value={timeOfDay}
          onChange={(e)=>setTimeOfDay(e.target.value)}
          className="sel">
            <option value="Morning">Утро</option>
            <option value="Day">День</option>
            <option value="Night">Ночь</option>
            
          </select>
          </div>
          
        </div>
        <div className="btn-c">
          <button onClick={fetchRecomend} className="btn" >Рекомендовать </button>
        </div>
       
        <div className="recomendation btn-c">
            {loading ? "Loading recomendation..." : recommendation}
          </div>
      </div>
    </div>
  </div>;
}
