import { TagProps } from "./Tag.props";
import styles from "./Tag.module.css"
import classNames from "classnames";



 export const Tag = ({size = 'medium', children, href, color = 'ghost', className, ...props }: TagProps): JSX.Element => {
   return (<div className={classNames(styles.tag, className,
    {
        [styles.small]: size == 'small',
        [styles.small]: size == 'medium',
        [styles.ghost]: color == 'ghost',
        [styles.red]: color == 'red',
        [styles.grey]: color == 'grey',
        [styles.green]: color == 'green',
        [styles.primary]: color == 'primary',
    }
    )}>{href ? 
    <a href={href}>{children}</a>
 :
 <>{children}</>
}</div>)
};

