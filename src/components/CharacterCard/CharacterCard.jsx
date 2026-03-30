import Card from 'react-bootstrap/Card';

function CharacterCard({ props, onEdit, onDelete, showActions = false }) {
  return (
    <Card className="character-card" style={{ width: '100%', maxWidth: '320px' }}>
      <Card.Img 
        variant="top" 
        src={props.image}
        style={{ height: '220px', objectFit: 'cover' }}
      />

      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>Name: {props.name}</Card.Text>
        <Card.Text>Age: {props.age}</Card.Text>
        <Card.Text>Job: {props.job}</Card.Text>

        {showActions && (
          <>
            <button 
              onClick={() => onEdit(props)} 
              style={{ marginRight: "10px", backgroundColor: "blue", color: "white" }}
            >
              Edit
            </button>
            <button 
              onClick={() => onDelete(props.id)} 
              style={{ backgroundColor: "red", color: "white" }}
            >
              Delete
            </button>
          </>
        )}
      </Card.Body>
    </Card>
  );
}

export default CharacterCard;