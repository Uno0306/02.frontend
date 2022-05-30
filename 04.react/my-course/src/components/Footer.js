import styles from './Footer.module.css';
import Container from './Container';

function Footer() {
	return (
		<div className={styles.footer}>
			<Container>
				<ul className={styles.info}>
					<li>Company : Lecture</li>
				</ul>
			</Container>
		</div>
	);
}

export default Footer;
