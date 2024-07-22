export const ItemsList = ({items}) => {
    return (
        <>
            <h1>List of Items</h1>
            <ul>
                {items.map((item, index) => 
                    <li key={index}>{item}</li>
                )}
            </ul>
        </>
    )
}