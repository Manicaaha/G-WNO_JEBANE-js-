import { useEffect, useState } from "react"
import Student from "./Student"

function Students(){

    const [list, setList] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [checked, setChecked] = useState('all')
    const [filteredList, setFilteredLIst] = useState([])

    useEffect(() => {
        setFilteredLIst(list)
        if(list.length === 0){
            const singleStudent = {
                name: "studentName1",
                status: "present"
            }
            const singleStudent2 = {
                name: "studentName2",
                status: "absent"
            }
            const singleStudent3 = {
                name: "studentName3",
                status: "present"
            }
            setList([singleStudent, singleStudent2, singleStudent3])
            setFilteredLIst([singleStudent, singleStudent2, singleStudent3])
        }
        let filtered = list;
        if(checked !== 'all'){
            filtered = list.filter(student => student.status === checked)
        }
        
        if(searchTerm !== ""){
            filtered = filtered.filter((student)=>
                student.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
        }

        setFilteredLIst(filtered)
    }, [searchTerm, list, checked])

    const addStudent = (status) => {

        if (searchTerm !== "" && !list.some(student => student.name.toLowerCase() === searchTerm.toLowerCase())) {
          const newStudent = { name: searchTerm.trim(), status: status };
          setList([...list, newStudent]);
          setSearchTerm("");
        } else {
          alert("I need a unique student name.");
        }
      };

    return(
        <div>
            <div>
            <h1>Students</h1>
            <input type="text" placeholder="student name" onChange={(e)=> setSearchTerm(e.target.value)} value={searchTerm} ></input>
            <select onChange={(e) => setChecked(e.target.value)}>
                <option value='all'>All</option>
                <option value='present'>Present</option>
                <option value='absent'>Absent</option>
            </select>
            <br></br>
            <button onClick={() => addStudent("present")}>Present</button>
            <button onClick={() => addStudent("absent")}>Absent</button>
        </div>
        {
            filteredList.map((student, index) => (
            <Student key={index} name={student.name} status={student.status} />
            ))
        }
        </div>
        
    )
}

export default Students