import Head from 'next/head'
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdownw } from '../components/Countdown';
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';
import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <div className ={styles.container}>
      <Head>
        <title>Início - Move It</title>
      </Head>
      <ExperienceBar/>

      <section>
        <div>
          <Profile/>
          <CompletedChallenges/>
          <Countdownw/>
        </div>
        <div>

        </div>
      </section>
    </div>


  )
}
