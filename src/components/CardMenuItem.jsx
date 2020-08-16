/*
  How to use this compoent

<CardMenuItem 
  title='You Title'
  onClickPlace={() => console.log('click')} // Called when the card is clicked
  onClickAdd={() => console.log('click')} // Called when the add button is clicked
>
  Content
</CardMenuItem>
*/

import React from 'react'

// Materia-UI
import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Grid
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

const styles = {
  card: makeStyles({
    root: {
      boxShadow: 'inherit',
      backgroundColor: '#464646',
      borderRadius: '8px'
    }
  }),
  container: {
    borderLeft: '6px',
    borderLeftStyle: 'solid',
    borderLeftColor: '#F3AA00'
  },
  cardActionArea: makeStyles({
    root: {
      fontSize: '1em/0.625em !important',
      color: 'red'
    }
  }),
  cardHeader: makeStyles({
    root: {
      paddingBottom: '0.6em'
    },
    title: {
      font: `Bold 16px/10px Poppins`,
      color: '#FFFFFF'
    }
  }),
  cardContent: makeStyles({
    root: {
      paddingTop: '0.6em',
      paddingBottom: '1em !important',
      fontSize: '1em/0.625em !important'
    }
  })
}

const CardMenuItem = (props) => {
  const { title, children } = props

  return (
    <Grid container alignItems='center'>
      <Card classes={styles.card()}>
        <div style={styles.container}>
          <CardActionArea classes={styles.cardActionArea()}>
            <CardHeader title={title} classes={styles.cardHeader()}/>
            <CardContent classes={styles.cardContent()}>
              {children}
            </CardContent>  
          </CardActionArea>    
        </div>
      </Card>
    </Grid>
    
  )
}

export default CardMenuItem