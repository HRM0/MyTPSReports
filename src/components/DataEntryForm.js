import React,{useState} from "react";

const DataEntryForm = (props) => {
    const [graphLabel, setGraphLabel] = useState(
        {
        graphTitle:'User Gain',
        lineName:'Users Gained',
        yName:'Users',
        xName:'Year'
        }
        )
    const [formFields, setFormFields] = useState([
        {id:0,
         y:'', 
         x:''}
    ]);
    

    const handleSubmit = (e) => {
        e.preventDefault()

       props.collectData(formFields,graphLabel)
       props.collectData(formFields,graphLabel)
       props.collectData(formFields,graphLabel)
    };

    const handleFormChange =(event, index) => {
        let data = [...formFields]
        data[index][event.target.name] = event.target.value
        setFormFields(data)
    }

    const addField = () => {
        
        let newDataPoint = {
            id:formFields.length,
            y:"",
            x:""
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
            <div>
                <label>Name your Graph: </label>
                <input type="text"
                    name='graphTitle'
                    onChange={(e) => setGraphLabel({...graphLabel, graphTitle: e.target.value})}
                    value = {graphLabel.graphTitle}>
                </input>
            </div>
            <div className="formElement">
                <label>Name your Data: </label>
                <input type="text"
                    name='graphLabel'
                    onChange={(e) => setGraphLabel({...graphLabel, lineName: e.target.value})}
                    value = {graphLabel.lineName}>
                </input>
                <label htmlFor="chartStyle"> Chart Style: </label> 
                <select name="chartStyle" id="chartStyle" value={props.chartType} onChange={(event) => props.displayChart(event.target.value)}>
                    <option value="line">Line</option>
                    <option value="bar">Bar</option>
                    <option value="pie">Pie</option>
                </select>
            </div>
            <div className="formElement">
                <label>Y Axis Name: </label>
                <input type="text"
                    name='yName'
                    onChange={(e) => setGraphLabel({...graphLabel, yName: e.target.value})}
                    value = {graphLabel.yName}>
                </input>
                <label>X Axis Name: </label>
                <input type="text"
                    name='xName'
                    onChange={(e) => setGraphLabel({...graphLabel, xName: e.target.value})}
                    value = {graphLabel.xName}>
                </input>
            </div>
            <form onSubmit={handleSubmit} className="updateForm">
                {formFields.map((form,index) => {
                    return (
                        <div>
                            <label htmlFor={`y${form.id}`}>Y axis:</label>
                            <input
                                type="text"
                                name={`y`}
                                onChange={(e) => handleFormChange(e, index)}
                                value = {form.y}
                            />
                            <label htmlFor={`x${form.id}`}> X axis:</label>
                            <input
                                type="text"
                                name={`x`}
                                onChange={(e) => handleFormChange(e, index)}
                                value = {form.x}
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