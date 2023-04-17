import Link from "next/link"
import { useRouter } from "next/router"

const Header = () => {
    const router = useRouter()
    console.log(router);
    const styles = {
        header:{
            margin:20,
            padding:20,
            border: "1px solid #DDD"
        },
        link:{
            margin:15
        },
        active:{
            margin:15,
            color:"blue"
        }
    }
  return(
    <div style={styles.header}>
        {/* comme on utilise pas l'attribut a pour faire ledes liens on met l'attribut passHref */}
        <Link href="/" passHref>
            {/* On met une condition pour que le lien actif soit bleu */}
            <span style={router.pathname === "/" ? styles.active : styles.link }>Home</span>
        </Link>
        <Link href="/blog" passHref>
            <span style={router.pathname === "/blog" ? styles.active : styles.link}>Blog</span>
        </Link>
        <Link href="/profile" passHref>
            <span style={router.pathname === "/profile" ? styles.active : styles.link}>Profile</span>
        </Link>
        <Link href="/blog/items" passHref>
            <span style={router.pathname === "/blog/items" ? styles.active : styles.link}>Items</span>
        </Link>
        <Link href="/blog/categories" passHref>
            <span style={router.pathname === "/blog/categories" ? styles.active : styles.link}>Catégories</span>
        </Link>         
    </div>
  )
}

export default Header