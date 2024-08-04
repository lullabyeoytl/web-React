import { useContext, useState, useEffect } from "react";
import BadgerBuds from "../../BadgerBuds";
import BadgerBudsDataContext from "../../../contexts/BadgerBudsDataContext";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

export default function BadgerBudsAdoptable(props) {
  const catList = useContext(BadgerBudsDataContext);
  const [selectedCat, setSelectedCat] = useState([]);
  const [savedCatIds, setSavedCatIds] = useState(new Set(JSON.parse(sessionStorage.getItem('savedCatIds')) || []));
  const [adoptedCatIds, setAdoptedCatIds] = useState(new Set(JSON.parse(sessionStorage.getItem('adoptedCatIds')) || []));
  
  useEffect(() => {
    const catCard = catList.map((cat) => ({
      ...cat,
      description_able: false,
      saved: false,
      adopted: adoptedCatIds.has(cat.id)? true : false,
    }));
    setSelectedCat(catCard);
  }, [catList]);

  useEffect(() => {
    sessionStorage.setItem('savedCatIds', JSON.stringify([...savedCatIds]));
  }, [savedCatIds]);

  
  function handleAdopt(cat) {
    // 实现领养逻辑
    alert(`Adopting ${cat.name}`);
    setSavedCatIds(prev => new Set([...prev, cat.id]));
    const updatedCat = { ...cat, saved: true };
    setSelectedCat(
      selectedCat.map((c) => (c.id === cat.id ? updatedCat : c))
    );
  }

  function Description_show(cat) {
    return (
      <div>
        <p>{cat.description}</p>
        <Button variant="primary" onClick={() => handleAdopt(cat)}>
          Saved
        </Button>
        <Button
          variant="secondary"
          onClick={() => {
            const updatedCat = { ...cat, description_able: false };
            setSelectedCat(
              selectedCat.map((c) => (c.id === cat.id ? updatedCat : c))
            );
          }}
        >
          Hide Description
        </Button>
      </div>
    );
  }

  function Description_hide(cat) {
    return (
      <div>
        <Button variant="primary" onClick={() => handleAdopt(cat)}>
          Saved
        </Button>
        <Button
          variant="secondary"
          onClick={() => {
            const updatedCat = { ...cat, description_able: true };
            setSelectedCat(
              selectedCat.map((c) => (c.id === cat.id ? updatedCat : c))
            );
          }}
        >
          Show Description
        </Button>
      </div>
    );
  }
  const CatCount = selectedCat
  .filter((cat) => !cat.saved&&!cat.adopted)
    .length;

  return (
    <div>
      <h1>Available Badger Buds</h1>
      <p>The following cats are looking for a loving home! Could you help?</p>
      <Container fluid>
        <Row>
          {CatCount === 0?<p>No cats available for adoption at this time.</p>:selectedCat
            .filter((cat) => !cat.saved&&!cat.adopted)
            .map((cat) => (
              <Col key={cat.id} xs={12} md={6} lg={4}>
                <Card border="dark">
                  <img
                    src={`https://raw.githubusercontent.com/CS571-S24/hw5-api-static-content/main/cats/${cat.imgIds[0]}`}
                    alt={cat.name}
                    className="img-fluid"
                  />
                  <Card.Body>
                    <strong>{cat.name}</strong>
                    <p>Age: {cat.age}</p>
                    <p>Breed: {cat.breed}</p>
                    <p>Gender: {cat.gender}</p>
                    {cat.description_able
                      ? Description_show(cat)
                      : Description_hide(cat)}
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
}
