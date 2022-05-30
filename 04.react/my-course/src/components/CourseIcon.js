import classNames from 'classnames';
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import react from '../assets/react.png';
import java from '../assets/java.png';
import spring from '../assets/spring.png';
import linux from '../assets/terminal.png';
import mysql from '../assets/mysql.png';
import styles from './CourseIcon.module.css';

const ICONS = {
	html: html,
	css: css,
	js: js,
	react: react,
	java: java,
	spring: spring,
	linux: linux,
	mysql: mysql,
};

function CourseIcon({ className, photoUrl = 'default' }) {
	return (
		<img
			className={classNames(styles.courseIcon, className)}
			src={ICONS[photoUrl]}
			alt={photoUrl}
		/>
	);
}

export default CourseIcon;
