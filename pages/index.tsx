import { useEffect, useState } from "react"
import { Button } from "../components/Button/Button"
import { Htag } from "../components/Htag/Htag"
import { Rating } from "../components/Rating/Rating"
import { Tag } from "../components/Tag/Tag"
import { Typography } from "../components/Typography/Typography"





function HomePage(): JSX.Element {
  const [counter, setCounter] = useState<number>(0)
  useEffect(() => {
    console.log('Counter ' + counter);
    return function cleanUp() {
      console.log('Unmount');
    }
  }, [])
  return (
  <>
<Htag tag='h1'>{counter}</Htag>
<Button appearance="primary" arrow="down" onClick={() => setCounter(counter => counter + 1)}>Counter Up</Button>
<Button appearance="ghost" arrow="right">Click me</Button>
<Typography size="small">My paragraph</Typography>
<Tag size = 'small' color="ghost">Ghost</Tag>
<Tag size = 'small' color="green">Green</Tag>
<Tag size = 'small' color="red">Red</Tag>
<Rating rating={2} />
  </>
  )
}

export default HomePage