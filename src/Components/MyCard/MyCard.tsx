import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material'
// import AccessibilityOutlinedIcon from '@mui/icons-material/AccessibilityOutlined';

const MyCard = ({ title, subtitle }: { title: string, subtitle: string }) => {

      const INITIAL_STATE = 1

      const [numero, setNumero] = useState(INITIAL_STATE)

      const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => setNumero(numero + 1)

      // const cardStyle = {
      //       color: '#333',
      //       border: '1px solid gray',
      //       borderRadius: '3px'
      // }

      const bull = (
            <Box
              component="span"
              sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
            >
              •
            </Box>
          );

      return (
            // <div 
            //       // style={cardStyle} 
            //       className="flex-column padding"
            // >

            //       <h4>{title}</h4>
            //       <div>
            //             <p>{subtitle}</p>
            //       </div>
            //       <Button 
            //             onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => handleClick(event)} 
            //             variant="contained"
            //             >Apretar {numero} 
            //       </Button>
            //             {/* <svg data-testid="AccessibilityOutlinedIcon"></svg> */}
            // </div>

            <Card sx={{ minWidth: 275 }}>

                  <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                              Word of the Day
                        </Typography>
                        <Typography variant="h5" component="div">
                              be{bull}nev{bull}o{bull}lent
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                              adjective
                        </Typography>
                        <Typography variant="body2">
                              well meaning and kindly.
                              <br />
                              {'"a benevolent smile"'}
                        </Typography>
                  </CardContent>

                  <CardActions>
                        <Button
                              onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => handleClick(event)}
                              variant="contained"
                        >
                              Apretar {numero}
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
