import React from'react'
import { useContext, useState, useEffect } from "react";
import BadgerBudsDataContext from "../../../contexts/BadgerBudsDataContext";
import { Button, Card, Col, Container, Row } from "react-bootstrap";


export default function BadgerBudsBasket(props) {
    
    const catList = useContext(BadgerBudsDataContext);
    const [savedCatIds, setSavedCatIds] = useState(new Set(JSON.parse(sessionStorage.getItem('savedCatIds')) || []));
    const [savedCats, setSavedCats] = useState([])
    const [adoptedCatIds, setAdoptedCatIds] = useState(new Set(JSON.parse(sessionStorage.getItem('adoptedCatIds')) || []));

    useEffect(() => {
        const AsavedCats = catList.slice().filter(cat=>savedCatIds.has(cat.id));
        setSavedCats(AsavedCats);
    }, [catList, savedCatIds]);

    useEffect(() => {
        sessionStorage.setItem('adoptedCatIds', JSON.stringify([...adoptedCatIds]));
      }, [adoptedCatIds]);

    function handleSaved(cat) {
        // 实现领养逻辑
        alert(`Don't save ${cat.name}`);
        setSavedCatIds(prev => {
            const newSavedCatIds = new Set(prev);
            newSavedCatIds.delete(cat.id);
            sessionStorage.setItem('savedCatIds', JSON.stringify([...newSavedCatIds]));
            return newSavedCatIds;
          });
        const updatedCat = { ...cat, saved: false };
        setSavedCats(
          savedCats.map((c) => (c.id === cat.id ? updatedCat : c))
        );
      }

    function handleAdopt(cat) {
        // 实现领养逻辑
        alert(`Thankyou for Adopt ${cat.name}!!!`);
        setAdoptedCatIds(prev => new Set([...prev, cat.id]));
        const updatedCat = { ...cat, adopted: true };
        setSavedCats(
            savedCats.map((c) => (c.id === cat.id ? updatedCat : c))
        )
    }
    const catCount = savedCats.filter(cat=>!cat.adopted).length;
    return <div>
        <h1>Badger Buds Basket</h1>
        <p>These cute cats could be all yours!</p>
        <Container fluid>
            <Row>
                {catCount === 0? <p>No cats in basket</p> : savedCats.filter(cat=>!cat.adopted).map(cat => (
                    <Col key={cat.id} md={4}>
                        <Card>
                        <img
                    src={`https://raw.githubusercontent.com/CS571-S24/hw5-api-static-content/main/cats/${cat.imgIds[0]}`}
                    alt={cat.name}
                    className="img-fluid"
                />
                    <strong>{cat.name}</strong>
                    <Button variant="secondary" onClick={() => handleSaved(cat)}>Remove</Button>
                    <Button variant="primary" onClick={()=>handleAdopt(cat)}>Adopts</Button>
                        </Card>
                    </Col>))}
            </Row>
        </Container>
    </div>
}