import {
  CaretDownFill,
  CaretUpFill
} from 'react-bootstrap-icons'
import { ToggleButton } from './TagDisplay.styles'

interface Props {
  display: boolean
}

const TagToggle: React.FC<Props> = ({ display }) => {
  const getIcon = () => {
    if (display) {
      return <CaretUpFill />
    } else {
      return <CaretDownFill />
    }
  }

  return (
    <ToggleButton>
      {getIcon()}
    </ToggleButton>
  )
}

export default TagToggle