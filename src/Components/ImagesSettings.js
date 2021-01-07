import React, { Component } from 'react'
class ImagesSettings extends Component {
    constructor(props) {
        super(props)

    }

    handleChange = (event) =>{
        this.props.action(event.target.value,event.target.name)
    }
    //=======================================================//
    render() {
        let data = this.props.data
        let s = this.props.settings
        return (

            <div className={s.darkMode === "on" ? "sideSettings dm-L2" : "sideSettings l1 box-shadow"}>
                <div className="innerSideSettings">
                    <div className="column">
                        <div>Scale</div>
                        <input 
                            type="number"
                            step="0.1"
                            value={data.scale} 
                            className="input wm-L2" 
                            name="scale"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="column">
                        <div>Denoise level</div>
                        <select 
                            className="input wm-L2" 
                            value={data.denoiseLevel}
                            name="denoiseLevel"
                            onChange={this.handleChange}
                        >
                            <option>None</option>
                            <option>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                        </select>
                    </div>
                    <div className="column">
                        <div>Output format</div>
                        <select 
                            className="input wm-L2" 
                            value={data.outputFormat}
                            name="outputFormat"
                            onChange={this.handleChange}
                        >   
                            <option>Original</option>
                            <option>.png</option>
                            <option>.jpg</option>
                            <option>.webp</option>
                        </select>
                    </div>
                    <button 
                        className="button fillY darkTeal" 
                        style={{margin:0,marginTop:"auto"}}
                        onClick={this.props.executeWaifu}
                    >
                        Execute All
                    </button>
                </div>

            </div>
        )
    }
}

export default ImagesSettings