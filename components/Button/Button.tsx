import { ButtonProps } from "./Button.props";
import styles from "./Button.module.css"
import classNames from "classnames";
import Arrow from "./arrow.svg"



 export const Button = ({children, appearance, arrow = 'none', className, ...props}: ButtonProps): JSX.Element => {
     return (
        <button className={classNames(styles.button, className,
            {
                [styles.primary]: appearance == 'primary',
                [styles.ghost]: appearance == 'ghost'
            }
            )}
            {...props} //for example onClick and so on
            >
                {children}
                {arrow != 'none' && <span className={classNames(
                    styles.arrow, {
                        [styles.down]: arrow == 'down'
                    }
                )}>
                 <Arrow />
                    </span>}
            </button>
     )
    
};
