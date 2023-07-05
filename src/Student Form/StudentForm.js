import React, {useState} from 'react';
import './StudentForm.css';

function StudentForm() {
    const [students, setStudents] = useState([]);
    const [no, setNo] = useState(1);
    const [name, setName] = useState('');
    const [color, setColor] = useState('');
    const [food, setFood] = useState('');
    const [subject, setSubject] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const student = {no, name, color, food, subject}
        setStudents([...students, student])
        setNo(no + 1);
        setName('');
        setColor('');
        setFood('');
        setSubject(''); 
    }

  return (
    <div>
      <h2>Student Form</h2>
      <form onSubmit={handleSubmit} className='inputFields'>
      <input
      type='text'
      placeholder='Name'
      value={name}
      onChange={(e) => setName(e.target.value)}
      required
      /> <br/>
      <input
      type='text'
      placeholder='Favourite Color'
      value={color}
      onChange={(e) => setColor(e.target.value)}
      required
      /> <br/>
      <input
      type='text'
      placeholder='Favourite Food'
      value={food}
      onChange={(e) => setFood(e.target.value)}
      required
      /> <br/>
      <input
      type='text'
      placeholder='Favourite Subject'
      value={subject}
      onChange={(e) => setSubject(e.target.value)}
      required
      /> <br/>
      <button type='submit'>Submit</button>
      </form>

      {students.length > 0 && ( 
        <table className="student-table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Color</th>
              <th>Food</th>
              <th>Subject</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{student.no}.</td>
                <td>{student.name}</td>
                <td>{student.color}</td>
                <td>{student.food}</td>
                <td>{student.subject}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

    </div>
  )
}

export default StudentForm;
