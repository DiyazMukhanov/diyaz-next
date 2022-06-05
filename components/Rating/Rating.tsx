import classNames from "classnames"
import { useEffect, useState, KeyboardEvent } from "react"
import styles from './Rating.module.css'
import { RatingProps } from "./Rating.props"
import StarIcon from './star.svg'


export const Rating = ({children, className, isEditable = false, rating, setRating, ...props}: RatingProps): JSX.Element => {

    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));
   
    useEffect(() => {
        constructRating(rating);
    }, [rating])

    const constructRating = (currentRating: number) => {
          const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
              return (
                  <span key = {i} className = {classNames(styles.star, {
                    [styles.filled]: i < currentRating,
                    [styles.editable]: isEditable,
                })}

                onMouseEnter={() => {
                   changeDisplayStar(i + 1);
                }}

                onMouseLeave={()=> {
                   constructRating(rating);
                }}

                onClick={() => {
                    onClick(i + 1);
                }}>
                 <StarIcon 

                 tabIndex={isEditable ? 0 : -1} //чтобы можно было табать по звездочкам

                 onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && handleSpace(i + 1, e) }
                 /> 
                 </span>
              )
          });
          setRatingArray(updatedArray);
    }

    const changeDisplayStar = (i: number) => {
        if(!isEditable){
            return;
        }
        constructRating(i);
    }

    const onClick = (i: number) => {
        if(!isEditable || !setRating){
            return;
        }
        setRating(i);
    }

    const handleSpace = (i: number, e: KeyboardEvent<SVGElement> ) => {
        if(e.code != 'Space' || !setRating) {
            return;
        }
        setRating(i);
    }

return(
    <div {...props}>
      {ratingArray.map((r, i) => (<span key={i}>{r}</span>))}
    </div>
);
    
} 