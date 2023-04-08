import React,{useState} from 'react'

const Handler = ({data ,edit}) => {
    const {id,title} = data;
    const [value,setValue] = useState("");
    return  (
        <div className="mp-link">
        <div className="mp-title">{title}</div>
        <div className="mp-input-link">
          <span className="mp-link-icon">
            <img
              src={`./${title}.svg`}
              alt={title}
              className={title}
            />
          </span>
          <input
            className="mp-link-text"
            placeholder={title}
            disabled={!edit}
            onChange={(e)=>{setValue(e.target.value)}}
            value={value}
          />
        </div>
      </div>
)
}
export default Handler