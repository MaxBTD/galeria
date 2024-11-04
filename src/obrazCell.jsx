import './obrazCell.css';

function ObrazCell(props){
    return(
        <div className='obrazCell'>
            <div className='obrazDiv'><img src={props.obraz.graf}/></div>
            <p className='nrText'>Obraz nr. {props.obraz.nr}</p>
            <h2>{props.obraz.nazwa}</h2>
            <p>{props.obraz.opis}</p>
            <p className='cena'>{props.obraz.cena}.00 zł</p>
        </div>
    );
}

export default ObrazCell;