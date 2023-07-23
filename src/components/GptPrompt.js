import React, {useState} from "react";
import axios from "axios"


const GptPrompt = (props) => {
    const [prompt, setPrompt] = useState("")
    const [response,setResponse] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        const createMyMemo = `${JSON.stringify(props.data[0])} please create a 3 paragraph business memo based on the data provided it should be about ${props.data[1].lineName}and note that ${prompt}.
                                please format your response in html`
        console.log(`${JSON.stringify(props.data[0])}`)
        axios.post("https://mytps-server.onrender.com/chat", {createMyMemo})
             .then((res) => {
                setResponse(res.data.message.content)
                //console.log(res.data.message.content)
                printMessage()
             })
             .catch((err) => {
                console.error(err)
             })
    }

    function printMessage() {
        return (
            <div className="response">
                <div dangerouslySetInnerHTML={{__html:response}}></div>
                <div>{props.chart}</div>
            </div>
        )
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit} className="promptForm">
                <div>
                    <label htmlFor={`prompt`}>What else should we know about the data? </label>
                    <input
                        type="text"
                        name={`prompt`}
                        onChange={(e) => setPrompt(e.target.value)}
                        value = {prompt}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
            {response && printMessage()}
        </div>
    )
}

export default GptPrompt