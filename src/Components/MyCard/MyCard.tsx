import PropTypes from 'prop-types'
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import useCounter from '../../Hooks/UseCounter'
// import AccessibilityOutlinedIcon from '@mui/icons-material/AccessibilityOutlined';

const MyCard = ({ title, subtitle }: { title: string, subtitle: string }) => {

      const [counter, incrementar] = useCounter(0)

      return (

            <Card sx={{ minWidth: 275 }}>

                  <CardContent>
                        <Typography variant="h5" component="div">{title}</Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">{subtitle}</Typography>
                  </CardContent>

                  <CardActions>
                        <Button onClick={incrementar} variant="contained">
                              Apretar {counter}
                        </Button>
                  </CardActions>

            </Card>
      )
}

MyCard.propTypes = {
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired
}

MyCard.defaultProps = {
      title: "Título default",
      subtitle: "Subtítulo default"
}

export default MyCard
