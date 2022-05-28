import { Button } from "../components/Button/Button"
import { Htag } from "../components/Htag/Htag"
import { Typography } from "../components/Typography/Typography"





function HomePage(): JSX.Element {
  return (
  <>
<Htag tag='h3'>Some Text</Htag>
<Button appearance="primary" arrow="down">Click me</Button>
<Button appearance="ghost" arrow="right">Click me</Button>
<Typography size="small">My paragraph</Typography>
  </>
  )
}

export default HomePage