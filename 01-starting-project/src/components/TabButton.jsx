function TabButton ({children, isSelectedTab, ...props}) {
    return (
        <li>
            <button className={isSelectedTab ? 'active' : ''} {...props}>{children}</button>
        </li>
    );
}

export default TabButton;