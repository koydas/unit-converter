import styled from 'styled-components'
import Tab, {Title, Content} from '../tab'

const Inputs = styled.div`
`

const Outputs = styled.div`
    margin-top: 2em;
`

function convert() {
    const val = document.querySelector("#val").value
    const from = document.querySelector("#from").value
    const to = document.querySelector("#to").value
    
    let res
    if (from == 'km' && to == 'miles')
        res = kmToMiles(val)
    else if (from == 'miles' && to == 'km')
        res = MilesToKm(val)

    if (res)
        document.querySelector("#solution").innerText = `${val}${from} = ${res.toFixed(4)}${to}`
}


function kmToMiles(val) {
    return val * 0.621371
}

function MilesToKm(val) {
    return val * 1.60934
}

export default ({active}) => <Tab active={active} >
    <Title>Length</Title>
    <Content>
        <Inputs className="inputs">
            <div>
                <div>Enter the length to convert</div>
                <input type="number" id="val"/>
            </div>

            <div>
                <select id="from">
                    <option selected>km</option>
                    <option>miles</option>
                </select>
                <span>to</span>
                <select id="to">
                    <option>km</option>
                    <option selected>miles</option>
                </select>
            </div>

            <button onClick={convert}>Convert</button>
        </Inputs>

        <Outputs className="ouputs">
            <div>Result of your calculation</div>
            <div id="solution"></div>
            <button>Reset</button>
        </Outputs>
    </Content>
</Tab>