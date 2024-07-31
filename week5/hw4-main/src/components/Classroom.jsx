import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Student from "./Student";

const Classroom = () => {
    const [students, setStudents] = useState([]);
    const [formData, setFormData] = useState({
        searchName: '',
        searchMajor: '',
        searchInterest: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleReset = () => {
        setFormData({
            searchName: '',
            searchMajor: '',
            searchInterest: ''
        });
    };

    useEffect(() => {
        fetch('./src/components/response.json')
            .then(res => {
                console.log(res.status);
                return res.json()
            })
            .then(data => {
                console.log(data[0])
                setStudents(data)
            })
    }, [])

    const students_shower = (props) => {
        let student_list = [];
        for (let i = 0; i < props.length; i++) {
            student_list.push(<Student key={i} {...props[i]} />);
        }
        return student_list;
    }

    const filterStudents = (students, name, major, interest) => {
        return students.filter(student => {
            const nameMatch = name === '' || student.name.first.toLowerCase().includes(name.toLowerCase()) || student.name.last.toLowerCase().includes(name.toLowerCase());
            const majorMatch = major === '' || student.major.toLowerCase().includes(major.toLowerCase());
            const interestMatch = interest === '' || student.interests.some(interestItem => interestItem.toLowerCase().includes(interest.toLowerCase()));
            return nameMatch && majorMatch && interestMatch;
        });
    }

    const filtered_students = filterStudents(students, formData.searchName, formData.searchMajor, formData.searchInterest);
    const student_num = formData.searchName === '' && formData.searchMajor === '' && formData.searchInterest === ''? students.length : filtered_students.length;
    return (
        <div>
            <h1>Badger Book</h1>
            <p>Search for students below!</p>
            <hr />
            <Form>
                <Form.Label htmlFor="searchName">Name</Form.Label>
                <Form.Control id="searchName" name="searchName" value={formData.searchName} onChange={handleInputChange} />
                <Form.Label htmlFor="searchMajor">Major</Form.Label>
                <Form.Control id="searchMajor" name="searchMajor" value={formData.searchMajor} onChange={handleInputChange} />
                <Form.Label htmlFor="searchInterest">Interest</Form.Label>
                <Form.Control id="searchInterest" name="searchInterest" value={formData.searchInterest} onChange={handleInputChange} />
                <br />
                <Button variant="neutral" onClick={handleReset}>Reset Search</Button>
                <br></br>
                <p>There're currently {student_num} students found.</p>
            </Form>
            <Container fluid>
                <Row>
                    {students_shower(filtered_students).map((stu, index) => (
                        <Col key={index} xs={12} md={6} lg={4}>
                            {stu}
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default Classroom;
