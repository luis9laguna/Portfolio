import React from 'react'
import styles from './Projects.module.css'
import data from '../../utils/data.js'
import { GitHub, Web } from '@material-ui/icons'

const Projects = () => {


  return (
    <div className={styles.containerProjects} id="projects">
      <h1>Checkout some of my projects</h1>
      <div key={data.id} className={styles.projects} data-aos="fade-up" data-aos-duration="1500">
        {data.map(data => (
          <div>
            <div className={styles.info}>
              <h2>{data.title}</h2>
              <p>{data.description}</p>
              <div className={styles.urls}>
                <a href={data.url}><Web/></a>
                <a href={data.github}><GitHub/></a>
              </div>
            </div>
            <img className={styles.img} src={data.image}/>
          </div>
            ))}
      </div>
    </div>
  )
}

export default Projects