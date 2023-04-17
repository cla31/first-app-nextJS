const Header = () => {
    const styles = {
        header:{
            margin:20,
            padding:20,
            border: "1px solid #DDD"
        },
        link:{
            margin:15
        }
    }
  return(
    <div style={styles.header}>
        <span style={styles.link}>Home</span>
        <span style={styles.link}>Blog</span>
        <span style={styles.link}>Profile</span>
        <span style={styles.link}>Items</span>
        <span style={styles.link}>Catégories</span>
    </div>
  )
}

export default Header