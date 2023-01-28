import { FacebookLogo, InstagramLogo, LinkedinLogo, PinterestLogo } from 'phosphor-react'
import styles from './Footer.module.css'
export function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerEmpresa}>
        <h3>Empresa</h3>
        <div className={styles.footerNavLink}>
          <a href="">Sobre nós</a>
          <a href="">Fale Conosco</a>
          <a href="">Comunidade</a>
        </div>
      </div>

      <div className={styles.footerEmpresa}>
        <h3>Termos</h3>
        <div className={styles.footerNavLink}>
          <a href="">Termos e condições de uso</a>
          <a href="">Termos de privacidade</a>
        </div>
      </div>

      <div className={styles.footerEmpresa}>
        <h3>Nos siga nas redes sociais</h3>
        <div className={styles.footerNavLinkSocialMedia}>
          <a href=""> <FacebookLogo size={28} alt="logo Facebook com link que leva para a pagina" /></a>
          <a href=""> <InstagramLogo size={28} alt="logo Instragram com link que leva para a pagina" /> </a>
          <a href=""> <LinkedinLogo size={28} alt="logo Linkedin com link que leva para a pagina" /> </a>
          <a href=""> <PinterestLogo size={28} alt="logo Pinterest com link que leva para a pagina" /> </a>

        </div>
      </div>
    </footer>
  )
}