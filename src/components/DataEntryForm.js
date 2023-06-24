import React,{useState} from "react";

const DataEntryForm = (props) => {
    const [formFields, setFormFields] = useState([
        {id:0,
         userGain:'', 
         year:''}
    ]);
    

    const handleSubmit = (e) => {
        e.preventDefault()
       props.collectData(formFields)
    };

    const handleFormChange =(event, index) => {
        let data = [...formFields]
        data[index][event.target.name] = event.target.value
        setFormFields(data)
    }

    const addField = () => {
        
        let newDataPoint = {
            id:formFields.length,
            userGain:"",
            year:""
        }

        setFormFields([...formFields, newDataPoint])
    }

    const removeField = (index) => {
        let data = [...formFields]
        data.splice(index,1)
        setFormFields(data)
    }

    return (
        <div className="buildForm">
            <h3>Build your graph here</h3>
            <form onSubmit={handleSubmit} className="updateForm">
                {formFields.map((form,index) => {
                    return (
                        <div>
                            <label htmlFor={`y${form.id}`}>Y axis:</label>
                            <input
                                type="text"
                                name={`userGain`}
                                onChange={(e) => handleFormChange(e, index)}
                                value = {form.userGain}
                            />
                            <label htmlFor={`x${form.id}`}> X axis:</label>
                            <input
                                type="text"
                                name={`year`}
                                onChange={(e) => handleFormChange(e, index)}
                                value = {form.year}
                            />
                            <button onClick={() => removeField(index)}>Remove</button>
                        </div>
                    )
                })}
                <button onClick={() => addField()}>Add</button>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default DataEntryForm