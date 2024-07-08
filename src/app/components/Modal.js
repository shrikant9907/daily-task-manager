import React from 'react';
import styles from '../styles/Modal.module.css';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <span className={styles.closeButton} onClick={onClose}>
                    &times;
                </span>
                {children}
            </div>
        </div>
    );
};

export default Modal;
