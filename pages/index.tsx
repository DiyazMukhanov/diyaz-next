import { useEffect, useState } from "react"
import { Button } from "../components/Button/Button"
import { Htag } from "../components/Htag/Htag"
import { Rating } from "../components/Rating/Rating"
import { Tag } from "../components/Tag/Tag"
import { Typography } from "../components/Typography/Typography"
import { withLayout } from "../layout/Layout/Layout"





function HomePage(): JSX.Element {
  const [rating, setRating] = useState<number>(4);
  return (
  <>
      <Htag tag='h1'>Заголовок</Htag>
      <Button appearance="primary" arrow="down" onClick={() => setCounter(counter => counter + 1)}>Counter Up</Button>
      <Button appearance="ghost" arrow="right">Click me</Button>
      <Typography size="small">My paragraph</Typography>
      <Tag size = 'small' color="ghost">Ghost</Tag>
      <Tag size = 'small' color="green">Green</Tag>
      <Tag size = 'small' color="red">Red</Tag>
      <Rating rating={rating} isEditable={true} setRating={setRating}/>
  </>
  )
}

export default withLayout(HomePage)