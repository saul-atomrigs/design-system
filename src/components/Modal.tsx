import React from 'react';
import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { Button } from './Button';

interface ModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  title?: string;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('Modal components must be used within a Modal.Provider');
  }
  return context;
};

const styles = {
  overlay: {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    overflowY: 'auto' as const,
    padding: '1rem',
  },
  container: {
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    width: '100%',
    maxWidth: '500px',
    maxHeight: '90vh',
    overflowY: 'auto' as const,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    display: 'flex',
    flexDirection: 'column' as const,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    borderBottom: '1px solid #eee',
  },
  title: {
    margin: 0,
    fontSize: '1.25rem',
  },
  closeButton: {
    background: 'none',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
    padding: 0,
    lineHeight: 1,
  },
  content: {
    padding: '1rem',
    flexGrow: 1,
    overflowY: 'auto' as const,
    display: 'flex',
    flexDirection: 'column' as const,
    maxHeight: 'calc(90vh - 4rem)',
  },
};

// Original Modal Component (for backward compatibility)
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  trigger?: React.ReactNode;
}

export const Modal = ({
  isOpen: controlledIsOpen,
  onClose: controlledOnClose,
  title,
  children,
  trigger,
}: ModalProps) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const isControlled = controlledIsOpen !== undefined;
  const isOpen = isControlled ? controlledIsOpen : internalIsOpen;

  const onClose = () => {
    if (isControlled) {
      controlledOnClose();
    } else {
      setInternalIsOpen(false);
    }
  };

  const openModal = () => {
    if (!isControlled) {
      setInternalIsOpen(true);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen]);

  return (
    <>
      {trigger && <div onClick={openModal}>{trigger}</div>}

      {isOpen && (
        <div style={styles.overlay}>
          <div style={styles.container} ref={modalRef}>
            <div style={styles.header}>
              {title && <h2 style={styles.title}>{title}</h2>}
              <button style={styles.closeButton} onClick={onClose}>
                &times;
              </button>
            </div>
            <div style={styles.content}>{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

// Compound Components
interface ProviderProps {
  children: React.ReactNode;
  defaultOpen?: boolean;
  title?: string;
}

const Provider = ({ children, defaultOpen = false, title }: ProviderProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal, title }}>
      {children}
    </ModalContext.Provider>
  );
};

interface TriggerProps {
  children: React.ReactNode;
  disabled?: boolean;
}

const Trigger = ({ children, disabled = false }: TriggerProps) => {
  const { openModal } = useModalContext();

  return (
    <div
      onClick={disabled ? undefined : openModal}
      style={{
        opacity: disabled ? 0.5 : 1,
        cursor: disabled ? 'not-allowed' : 'pointer',
      }}
    >
      {children}
    </div>
  );
};

interface ContentProps {
  children: React.ReactNode;
}

const Content = ({ children }: ContentProps) => {
  const { isOpen, closeModal, title } = useModalContext();
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, closeModal]);

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.container} ref={modalRef}>
        <div style={styles.header}>
          {title && <h2 style={styles.title}>{title}</h2>}
          <button style={styles.closeButton} onClick={closeModal}>
            &times;
          </button>
        </div>
        <div style={styles.content}>{children}</div>
      </div>
    </div>
  );
};

interface ModalCTAButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const ModalCTAButton = ({
  children,
  onClick,
  disabled = false,
}: ModalCTAButtonProps) => {
  const { closeModal } = useModalContext();

  const handleClick = () => {
    if (onClick) onClick();
    closeModal();
  };

  return (
    <Button fullWidth onClick={handleClick} disabled={disabled}>
      {children}
    </Button>
  );
};

// Attach compound components to Modal
Modal.Provider = Provider;
Modal.Trigger = Trigger;
Modal.Content = Content;
Modal.CTAButton = ModalCTAButton;
