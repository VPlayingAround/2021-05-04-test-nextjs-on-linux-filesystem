import headerStyles from "../styles/Header.module.css"

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>webdev newsss</span>
      </h1>
      <p className={headerStyles.description}>keep up to date enzo lol</p>
    </div>
  )
}

export default Header
