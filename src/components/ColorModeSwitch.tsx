interface Props {
    onToggle: () => void;
    isDarkMode: boolean;
}

const ColorModeSwitch = ({onToggle, isDarkMode}: Props) => {

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px' }}>
            <input 
                type="checkbox"
                checked={isDarkMode}
                onChange={onToggle}
            />

            <span style={{color: 'white', whiteSpace: 'nowrap'}}>Dark Mode</span>

        </div>
    );
};

export default ColorModeSwitch;