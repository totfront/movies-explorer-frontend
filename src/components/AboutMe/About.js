import './About.scss'

function About() {
  return (
    <>
      <section className='about'>
        <h2 className='about__heading'>О проекте</h2>
        <article className='about__grid'>
          <h4 className='about__grid-heading'>Дипломный проект включал 5 этапов</h4>
          <h4 className='about__grid-heading about__grid-heading_second'>На выполнение диплома ушло 5 недель</h4>
          <p className='about__grid-text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          <p className='about__grid-text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </article>
        <article className='about__schema'>
          <div className='about__schema-text about__schema-text_bg_green'>1 неделя</div>
          <div className='about__schema-text about__schema-text_bg_grey'>4 недели</div>
          <p className='about__schema-text about__schema-text_grey'>Back-end</p>
          <p className='about__schema-text about__schema-text_grey'>Front-end</p>
        </article>
      </section>
    </>
  )
}

export default About
