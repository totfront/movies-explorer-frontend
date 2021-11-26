import './Promo.scss'

function Promo(props) {
  return (
    <>
      <section className='promo'>
        <div className='promo__inner'>
          <h1 className='promo__heading'>Учебный проект студента факультета Веб-разработки.</h1>
          {props.children}
        </div>
      </section>
    </>
  )
}

export default Promo
