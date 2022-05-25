import { Button } from "../components/Button/Button"
import { Htag } from "../components/Htag/Htag"




function HomePage(): JSX.Element {
  return (
  <>
<Htag tag='h3'>Some Text</Htag>
<Button appearance="primary">Click me</Button>
<Button appearance="ghost">Click me</Button>
  </>
  )
}

export default HomePage