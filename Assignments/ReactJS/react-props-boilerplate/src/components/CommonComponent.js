import './Common.css'
function CommonComponent({text}) {
    return(
        <div className="CommonComponent">
            {/* Print the props text below */}
            <h2>{text}</h2>
        </div>
    );
}

export default CommonComponent;