/*
  How to use this compoent

<CardPlace 
  title='You Title'
  onClickPlace={() => console.log('click')} // Called when the card is clicked
  onClickAdd={() => console.log('click')} // Called when the add button is clicked
>
  Content
</CardPlace>
*/

import React from 'react'

// Materia-UI
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  CardActionArea
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { Add } from '@material-ui/icons'

const styles = {
  card: makeStyles({
    root: {
      boxShadow: 'inherit',
      backgroundColor: '#333333',
      borderRadius: '8px'
    }
  }),
  cardHeader: makeStyles({
    root: {
      paddingBottom: '2px'
    },
    title: {
      font: `Bold 16px/10px Poppins`,
      color: '#FFFFFF'
    }
  }),
  cardContent: makeStyles({
    root: {
      paddingTop: '0.3em',
      paddingBottom: '1em !important',
    }
  }),
  buttonContainer: makeStyles({
    root: {
      textAlign: 'right'
    }
  }),
  button: makeStyles({
    root: {
      width: '36px',
      height: '36px',
      padding: 0,
      borderWidth: 1, 
      borderColor: '#FFFFFF', 
      borderStyle: 'solid',
      borderRadius: '50%'
    }
  })
}

const CardPlace = (props) => {
  const { title, children, onClickPlace, onClickAdd } = props

  return (
    <Grid container alignItems='center'>
      <Grid item xs={10}>
        <Card classes={styles.card()}>
          <CardActionArea onClick={onClickPlace}>
            <CardHeader title={title} classes={styles.cardHeader()}/>
            <CardContent classes={styles.cardContent()}>
              {children}
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={2} classes={styles.buttonContainer()}>
        <IconButton onClick={onClickAdd} aria-label="Ver mais" classes={styles.button()}>
          <Add fontSize="medium" />
        </IconButton>
      </Grid>
    </Grid>
    
  )
}

export default CardPlace