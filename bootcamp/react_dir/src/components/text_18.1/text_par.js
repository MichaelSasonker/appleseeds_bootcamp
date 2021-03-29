import React from 'react';

const TextParagraph = ({ text, maxLength }) => {
    
    const [isHidden, setIsHidden] = React.useState(true);

    const DisplayText = () => {

        let paragraphLength = text[0].props.children.split(' ').length;

        const handleClick = () => {
            if (maxLength <= paragraphLength) {
                setIsHidden(!isHidden)
            }
        }

        if (isHidden) {
            let maxText = text[0].props.children.split(' ').splice(0, maxLength).join(' ');
            return (
                <div>
                    {maxText}...
                    <button 
                        type='submit' 
                        onClick={handleClick}
                        style={{
                            backgroundColor: 'transparent',
                            border: 'none',
                            color: 'blue'
                        }}
                    >
                        read more
                    </button>
                </div>
            );
        }
        else {
            let maxText = text[0].props.children.split(' ').splice(0, paragraphLength).join(' ');
            return (
                <div>
                    {maxText}
                    <button 
                        type='submit' 
                        onClick={handleClick}
                        style={{
                            backgroundColor: 'transparent',
                            border: 'none',
                            color: 'blue'
                        }}
                    >
                        read less
                    </button>
                </div>
            );
        }
    }

    return (
        <div>
            {DisplayText()}
        </div>
    );
}

export default TextParagraph;