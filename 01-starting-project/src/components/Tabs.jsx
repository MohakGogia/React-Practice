export default function Tabs({children, buttons, BtnContainerType = 'menu'}) {
    return (
        <>
            <BtnContainerType>{buttons}</BtnContainerType>
            {children}
        </>
    );
}