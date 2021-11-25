import './Header.scss'

function Header() {
  return (
    <>
      <header className='header'>
        <svg width='38' height='38' viewBox='0 0 38 38' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path fill-rule='evenodd' clip-rule='evenodd' d='M19 38C29.4934 38 38 29.4934 38 19C38 8.50659 29.4934 0 19 0C8.50659 0 0 8.50659 0 19C0 29.4934 8.50659 38 19 38ZM19 28.5C24.2467 28.5 28.5 24.2467 28.5 19C28.5 13.7533 24.2467 9.5 19 9.5C13.7533 9.5 9.5 13.7533 9.5 19C9.5 24.2467 13.7533 28.5 19 28.5Z' fill='#3DDC84' />
        </svg>
        <div className='header__inner'>
          <button className='header__button' type='button'>
            Регистрация
          </button>
          <button className='header__button header__button_green header__button_margin-left header__button_padding' type='button'>
            Войти
          </button>
        </div>
      </header>
    </>
  )
}

export default Header
