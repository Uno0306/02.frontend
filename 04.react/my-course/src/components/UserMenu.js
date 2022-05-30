import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import personIcon from '../assets/person.png';
import styles from './UserMenu.module.css';

function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = useCallback((e) => {
    e.stopPropagation();
    setIsOpen((nextIsOpen) => !nextIsOpen);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = () => setIsOpen(false);
    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={styles.userMenu}>
      <button className={styles.iconButton} onClick={handleButtonClick}>
        <img src={personIcon} alt='user' />
      </button>
      {isOpen && (
        <ul className={styles.popup}>
          {/*  */}
          <Link to='/wishlist'>
            <li>wishlist</li>
          </Link>
        </ul>
      )}
    </div>
  );
}

export default UserMenu;
