import './NavTab.scss'

function NavTab() {
  return (
    <>
      <ul className='navtab'>
        <li className='navtab__item'>
          <button className='navtab__button' type='button'>
            О проекте
          </button>
        </li>
        <li className='navtab__item'>
          <button className='navtab__button' type='button'>
            Технологии
          </button>
        </li>
        <li className='navtab__item'>
          <button className='navtab__button' type='button'>
            Студент
          </button>
        </li>
      </ul>
    </>
  )
}

export default NavTab
