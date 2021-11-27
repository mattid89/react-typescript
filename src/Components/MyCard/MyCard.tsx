import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Button } from '@mui/material'
// import AccessibilityOutlinedIcon from '@mui/icons-material/AccessibilityOutlined';

const MyCard = ({ title, subtitle }: { title: string, subtitle: string }) => {

      const INITIAL_STATE = 1

      const [numero, setNumero] = useState(INITIAL_STATE)

      const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => setNumero(numero + 1)


      return (
            <div className="flex-column padding">
                  <h4>{title}</h4>
                  <div>{subtitle}</div>
                  <Button 
                        onClick={(event) => handleClick(event)} 
                        variant="contained"
                        >Apretar {numero} 
                        </Button>
                        {/* <svg data-testid="AccessibilityOutlinedIcon"></svg> */}
            </div>
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
