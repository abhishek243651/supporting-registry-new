import React from 'react'

function Dropdown() {
    return (
        <div>
            <select className="form-select" aria-label="Default select example">
                <option value="">Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </div>
    )
}

export default Dropdown