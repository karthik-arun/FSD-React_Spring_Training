import './Body.css';

function BodyContentComponent({content}) {
    return(
        <div className="BodyContent">
            {/* Print the prop content below */}
            <h4>{content}</h4>
        </div>
    );
}

export default BodyContentComponent;