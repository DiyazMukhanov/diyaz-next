import { Button } from "../components/Button/Button"
import { Htag } from "../components/Htag/Htag"
import { Tag } from "../components/Tag/Tag"
import { Typography } from "../components/Typography/Typography"





function HomePage(): JSX.Element {
  return (
  <>
<Htag tag='h3'>Some Text</Htag>
<Button appearance="primary" arrow="down">Click me</Button>
<Button appearance="ghost" arrow="right">Click me</Button>
<Typography size="small">My paragraph</Typography>
<Tag size = 'small' color="ghost">Ghost</Tag>
<Tag size = 'small' color="green">Green</Tag>
<Tag size = 'small' color="red">Red</Tag>
  </>
  )
}

export default HomePage