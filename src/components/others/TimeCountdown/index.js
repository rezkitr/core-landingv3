import FlipCountdown from '@rumess/react-flip-countdown'
import moment from 'moment'

import './styles.scss'

const TimeCountdown = () => {
  const tomorrow = moment().add(1, 'days').startOf('day')
  return (
    <FlipCountdown hideYear hideMonth hideDay endAt={tomorrow} size="small" />
  )
}

export default TimeCountdown
