function TabButton ({children, onSelect, isSelectedTab}) {
    return (
        <li>
            <button className={isSelectedTab ? 'active' : ''} onClick={onSelect}>{children}</button>
        </li>
    );
}

export default TabButton;