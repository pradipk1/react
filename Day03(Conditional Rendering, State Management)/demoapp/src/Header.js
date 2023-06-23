function Header(props){
    return (
        <div>
            <h2>Header Component</h2>
            <ol>
                <li>{props.item1}</li>
                <li>Angular</li>
                <li>Java</li>
                <li>Javascript</li>
            </ol>
        </div>
    );
}

export default Header;