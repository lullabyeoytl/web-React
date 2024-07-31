const Student = (student) => {
    let status = student.fromWisconsin === true? "": "Not";

    return <div>
        <h2>{student.name.first} {student.name.last}</h2>
        <strong>{student.major}</strong>
        <p>{student.name.first} is taking {student.numCredits} credits and is {status} from Wisconsin. </p>
        <br/>
        They have {student.interests.length} icluding ...

        <ul>
            {student.interests.map((interest, index) => <li key={index}>{interest}</li>)}
        </ul>
    </div>
}

export default Student; 