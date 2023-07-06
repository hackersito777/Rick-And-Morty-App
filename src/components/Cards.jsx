import "./cards.css"
import Card from './Card';

export default function Cards(props) {

   console.log("ejemplo", props.characters)

   return (
      <div className="cards-container">

         {props.characters.map((pj) => (
            <Card
               key={pj.id}
               id={pj.id}
               name={pj.name}
               status={pj.status}
               species={pj.species}
               gender={pj.gender}
               origin={pj.origin.name}
               image={pj.image}
               onClose={props.onClose}



            />


         ))}

      </div>

   )


}
