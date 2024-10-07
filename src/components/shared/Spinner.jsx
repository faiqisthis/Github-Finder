import spinner from '../../assets/spinner.gif'
function Spinner() {
  return (
    <div className='w-100 mt-20'>
      <img src={spinner} width={180} className='mx-auto text-center' alt='Loading...'
     /> 
    </div>
  )
}

export default Spinner
