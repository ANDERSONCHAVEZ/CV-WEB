import './Magazine.css';

function Magazine({isOpen, onClose}) {

    if(!isOpen) return null;

    return (
        <div className="magazine-overlay" onClick={onClose}>
            <div className="magizne-content" onClick={(e) => e.stopPropagation()}>
                <button className="magazine-close" onClick={onClose}>&times;</button>
                <div className="magazine-page">
                    <iframe 
                        src="" 
                        className="magazine-pdf"
                        title='CV Anderson'
                    >
                    </iframe>
                </div>
            </div>
        </div>
    );
}

export default Magazine;