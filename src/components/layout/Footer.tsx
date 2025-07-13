import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer style={{
            background: '#222',
            color: '#fff',
            textAlign: 'center',
            padding: '1rem 0',
            left: 0,
            bottom: 0,
            width: '100%',
            fontSize: '1rem'
        }}>
            <p>
                © {new Date().getFullYear()} Lázaro Kauã. Todos os direitos reservados.
            </p>
            <p>
                <a
                    href="https://github.com/Lazarokaua"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#23C6FF', textDecoration: 'none' }}
                >
                    GitHub
                </a>
                {' | '}
                <a
                    href="https://www.linkedin.com/in/lazarokaua/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#23C6FF', textDecoration: 'none' }}
                >
                    LinkedIn
                </a>
            </p>
        </footer>
    );
};

export default Footer;
