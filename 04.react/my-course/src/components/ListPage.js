import classNames from 'classnames';
import Container from './Container';
import styles from './ListPage.module.css';
import courses from '../assets/courses.png';

const ICON = {
	catalog: {
		src: courses,
		alt: 'courses',
	},
};

function ListPage({
	variant = 'catalog',
	title = '',
	description = '',
	children,
}) {
	const icon = ICON[variant] || ICON.catalog;
	return (
		<>
			<div className={classNames(styles.bg, styles[variant])}>
				<img className={styles.icon} src={icon.src} alt={icon.alt} />
				<div className={styles.texts}>
					<h1 className={styles.heading}>{title}</h1>
					<p className={styles.description}>{description}</p>
				</div>
			</div>
			<Container className={styles.container}>{children}</Container>
		</>
	);
}

export default ListPage;
