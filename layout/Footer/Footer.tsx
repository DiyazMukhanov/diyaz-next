import classNames from "classnames"
import styles from './Footer.module.css'
import { FooterProps } from "./Footer.props"
import { format } from 'date-fns'


export const Footer = ({...props}: FooterProps): JSX.Element => {
    return (
       <footer {...props} className={classNames(props.className, styles.wrapper)} >
           <div className={styles.rights}>
               OwTop @2020 - {format(new Date(), 'yyyy')} Все права защищены
           </div>
               <a href="#" target="_blank" className={styles.agreement}>
                   Пользовательское соглашение
               </a>
               <a href="#" target="_blank" className={styles.politics}>
                   Политика конфиденциальности
               </a>
           
       </footer>
    );
}; 