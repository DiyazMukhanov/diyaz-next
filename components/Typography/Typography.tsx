import classNames from "classnames"
import styles from './Typography.module.css'
import { TypographyProps } from "./Typography.props"


export const Typography = ({children, className, size = 'medium', ...props}: TypographyProps): JSX.Element => {
    return (<p className={classNames(styles.p, className, {
        [styles.small]: size == 'small',
        [styles.medium]: size == 'medium',
        [styles.large]: size == 'large',
    })} {...props}>
         {children}
    </p>)
} 