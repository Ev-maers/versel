import styles from './Header.module.css'


import igniteLogo from '../assets/ignite.svg'

export function Header(){
    return(

        <header className = {styles.Header}>
            <img src={igniteLogo} alt = "Logotipo"></img>
        </header>
        
    )
}