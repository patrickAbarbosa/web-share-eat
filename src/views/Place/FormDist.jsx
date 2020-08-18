import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

// Materia-UI
import {
  IconButton,
  LinearProgress,
  Snackbar
} from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert'
import { NavigateBefore } from '@material-ui/icons'

// Core Components
import Input from '../../components/Input'
import env from '../../env'

// Actions 
import { query } from '../../utils/functions'
import {
  saveDist
} from '../../store/actions'

const renderForm = (props) => {  
  return (
    <form>
        <div>
          <Input
            label='Nome do prato'
            placeholder='Prato'
            type='text'
            onChangeText={e => props.setName(e)}
            value={props.name}
          />
        </div>
        <div>
          <Input
            label='Valor'
            placeholder='0,00'
            type='money'
            onChangeText={e => props.setPrice(e)}
            value={props.price}
          />
        </div>
        <div>
          <Input
            label='Descrição do prato'
            placeholder='Insira uma descrição'
            type='textarea'
            rows={4}
            maxlength="200"
            onChangeText={e => props.setDescription(e)}
            value={props.description}
          />
          <span>*A descrição deve conter até 200 caracteres.</span>
        </div>
        {props.loadingSave ? 
          <LinearProgress style={{marginTop: '2em'}}/>  
          :
          <button className='button' onClick={e => props.save(e)} style={{marginTop: '3.5em'}}>Salvar</button>
        }
    </form>
  )
}

// Render feedback save dist
const RenderFeedBack = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
} 

const initial_feedback = {open: false, severity: 'info',  message: ''}

const FormDist = (props) => {
  const [search, setSearch] = useState(null)
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [feedback, setFeedback] = useState(initial_feedback)
  const [loading, setLoading] = useState(true)
  const [loadingSave, setLoadingSave] = useState(false)
  const { places } = props.place
  
  useEffect(() => {
    const aux = query(props.location)

    if(!aux || !aux.place || !Number.isInteger(parseInt(aux.place)) || aux.place < 0)
      props.history.push('/')

    setSearch(aux)
    setLoading(false)
  }, [])

  // Validate and Save dist
  const save = (e) =>{
    e.preventDefault()
    setLoadingSave(true)
    if(name == '' || name.length < 3){
      setLoadingSave(false)
      return setFeedback({open: true, message: 'Nome inválido!', severity: 'error' })
    }
    
    const ammount = parseFloat(price.replace('R$', '').replace('.', '').replace(',', '.'))
    
    if(ammount == NaN || ammount <= 0){
      setLoadingSave(false)
      return setFeedback({open: true, message: 'Preço inválido!', severity: 'error' }) 
    }

    if(search.place > props.place.places?.length - 1){
      setFeedback({open: true, message: 'Lugar inválido!', severity: 'error' }) 
      return setTimeout(() => {
        props.history.push('/')
      }, 2000)
    }
    setFeedback({open: true, message: 'Salvo com sucesso!', severity: 'success' })
    props.saveDist({name, price: ammount, description, place: search.place })

    setTimeout(() => {
      props.history.push(`/place?place=${search.place}`)
    }, 2000)
  }

  return (
    loading ? 
      <LinearProgress />
      : search?.place ?
        <>
          <div style={{position: 'absolute', top: '0.5em', marginLeft: '-1em'}}>
            <IconButton aria-label="Ver mais" onClick={() => props.history.goBack()}>
              <NavigateBefore fontSize="large" />
            </IconButton>
          </div>
      
          <h1>{places[search.place]?.name}</h1>
          
          {renderForm({ name, setName, price, setPrice, description, setDescription, save, loadingSave})}
          <Snackbar open={feedback.open} autoHideDuration={6000} onClose={() => setFeedback(initial_feedback)}>
            <RenderFeedBack onClose={() => setFeedback(initial_feedback)} severity={feedback.severity}>
              {feedback.message}
            </RenderFeedBack>
          </Snackbar>
        </>
        : 
        <>
          Lugar não encontrado.
        </>
  )
}

const mapStateToProps = ({ place }) => {
  return { place }
}
export default connect(mapStateToProps, {
  saveDist
})(FormDist)