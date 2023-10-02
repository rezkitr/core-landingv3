import './styles.scss'

const SectionTitle = ({ title = '', className = '' }) => {
  return (
    <div className="container">
      <h1 className={`section-title text-2xl font-bold ${className}`}>
        {title}
      </h1>
    </div>
  )
}

export default SectionTitle
