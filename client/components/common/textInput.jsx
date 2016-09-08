import React, { PropTypes } from "react";

const TextInput = ({name, label, onChange, value, error, pattern}) => {
    return (
        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input className="mdl-textfield__input"
                type="text"
                id={name}
                pattern={pattern}
                value={value}
                onChange={onChange}
                />
            <label className="mdl-textfield__label" htmlFor={name}>{label}</label>
            {error && <span className="mdl-textfield__error">{error}</span>}
        </div>
    );
};

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    error: PropTypes.string,
    pattern: PropTypes.string
};

export default TextInput;