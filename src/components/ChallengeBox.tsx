import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox(){

   const {resetCountdown} = useContext(CountdownContext)

    function handleChallengeSucceeded(){
        completeChallenge();
        resetCountdown();
    }


    function handleChallengeFailed(){
        resetChallenge();
        resetCountdown();
    }

    const {activeChallenge, resetChallenge, completeChallenge} = useContext(ChallengesContext)


    return(
        <div className={styles.challengeBoxContainer}>
            {activeChallenge ? (
                <div className = {styles.challengeActive}>
                    <header>Ganhe {activeChallenge.amount} de xp</header>
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} alt=""/>
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button className ={styles.challengeFailedButton} type="button" onClick={handleChallengeFailed}>Falhei</button>
                        <button className ={styles.challengeSucceededButton} type="button" onClick={handleChallengeSucceeded}>Completei</button>
                    </footer>
                </div>
            ) : (<div className={styles.challengeNotActive}>
                <strong>Finalize um ciclo para receber um desafio</strong>
                <p>
                    <img src="icons/level-up.svg" alt="level up"/>
                    Avance de level completando desafios.
                </p>
            </div>)}
        </div>
    );
}