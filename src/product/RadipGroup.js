import React from "react";
import PropTypes from "prop-types";

const RadioGroup = ({ name, options, inputRef }) => {
    return (
        <fieldset>
            <div>
                {options.map(({ label: optionLabel, value }, index) => {
                    return (
                        <div key={index}>
                            <input
                                id={index}
                                name={name}
                                type="radio"
                                value={value}
                                {...inputRef}
                            />
                            <label htmlFor={index}>
                                <span>{optionLabel}</span>
                            </label>
                        </div>
                    );
                })}
            </div>
        </fieldset>
    );
};

RadioGroup.propTypes = {
    name: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.number.isRequired
        })
    )
};
export default RadioGroup;
