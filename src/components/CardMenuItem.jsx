/*
  How to use this compoent

<CardMenuItem 
  title='You Title'
  price={5} // Price  
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
  CardHeader
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
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  headerText: {
    font: `Bold 16px/10px Poppins`,
    color: '#FFFFFF'    
  },
  cardContent: makeStyles({
    root: {
      paddingTop: '0.6em',
      paddingBottom: '1em !important',
      fontSize: '1em/0.625em !important'
    }
  })
}

const renderHeader = (title, price) => {
  return (
    <div style={styles.headerContainer}>
      <span style={styles.headerText}>
        {title}
      </span>
      <span style={styles.headerText}>
        {price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
      </span>
    </div>
  )
}
const CardMenuItem = (props) => {
  const { children, title, price } = props

  return (
    <Card classes={styles.card()}>
      <div style={styles.container}>
        <CardActionArea classes={styles.cardActionArea()}>
          <CardHeader 
            title={renderHeader(title, price)}  
            classes={styles.cardHeader()}
          />
          <CardContent classes={styles.cardContent()}>
            {children}
          </CardContent>  
        </CardActionArea>    
      </div>
    </Card>
  )
}

export default CardMenuItem