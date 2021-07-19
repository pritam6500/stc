import React, { useState } from 'react';
import schema from '../static/formschema'
import { Controller, useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { Col, Card, CardTitle, CardBody, Button, } from 'reactstrap';
import RadioGroup from "./RadipGroup";
import DatePicker from 'react-datepicker'
import ReactJson from "react-json-view";
import { useHistory } from "react-router-dom"
import MultiSelect from "react-multi-select-component";
import "react-datepicker/dist/react-datepicker.css";

const ProductForm = () => {
    const { control, register, handleSubmit, formState: { errors } } = useForm();
    const [formData, setFromData] = useState({});
    const [selected, setSelected] = useState([]);
    const onSubmit = (data) => {
        schema.inputs.forEach(eachField => {
            if (eachField.type === 'multiselect') {
                data[eachField.name] = selected;
            }

        })
        setFromData(data);

    };
    const history = useHistory();
    const handleClick = () => {
        history.push('/lists');
    }


    return (
        <div>
            <Card className="shadow-lg rounded m-2">
                <CardBody>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="d-flex flex-wrap">
                            {schema.inputs.map((input, key) => {
                                return (
                                    <Col md={input.width} xs="12" key={key}>
                                        <div className="m-2 text-start">
                                            <label className="form-label" htmlFor={input.name}  >{input.label}</label>
                                            {(function () {
                                                if (input.type === "text") {
                                                    return (<input name={input.name} className="form-control" type={input.type}
                                                        {...register(input.name, input.validateRules)} />
                                                    );
                                                }
                                                if (input.type === "password") {
                                                    return (
                                                        <input name={input.name} className="form-control" type={input.type}
                                                            {...register(input.name, input.validateRules)} />
                                                    );
                                                }
                                                if (input.type === "select") {
                                                    return <select {...register(input.name)} className="form-control">
                                                        {input.options.map(value => (
                                                            <option key={value} value={value}>
                                                                {value}
                                                            </option>
                                                        ))}
                                                    </select>;
                                                }
                                                if (input.type === "radio") {
                                                    return <RadioGroup
                                                        name={input.name}
                                                        options={input.options}
                                                        inputRef={register(input.name, input.validateRules)}
                                                    />;
                                                }
                                                if (input.type === "calender") {
                                                    return <div className="d-flex"><Controller
                                                        control={control}
                                                        className="form-control"
                                                        name={input.name}
                                                        render={({ field }) => (
                                                            <DatePicker
                                                                name={input.name}
                                                                placeholderText='Select date'
                                                                onChange={(date) => field.onChange(date)}
                                                                selected={field.value}
                                                            />
                                                        )}
                                                    /></div>;
                                                }
                                                if (input.type === "multiselect") {
                                                    return <Controller
                                                        control={control}
                                                        className="form-control"
                                                        name={input.name}
                                                        render={() => (
                                                            <MultiSelect
                                                                options={input.options}
                                                                value={selected}
                                                                onChange={setSelected}
                                                                labelledBy={input.name}
                                                            />
                                                        )}
                                                    />;
                                                }
                                            })()}
                                            < ErrorMessage
                                                errors={errors}
                                                name={input.name}
                                                render={({ message }) => <p className="text-danger">** {input.name} is {message}</p>}
                                            />
                                        </div>
                                    </Col>
                                );
                            })}
                        </div>
                        <Button onClick={handleClick} color="warning" className="me-2">Go to Product lists</Button>
                        <Button color="primary">Submit</Button>

                    </form>

                </CardBody>

            </Card>

            <Card className="shadow-lg rounded m-2">
                <CardBody>
                    <CardTitle tag="h5">Data to be submitted to server</CardTitle>

                    <ReactJson
                        src={formData}

                    />
                </CardBody>
            </Card>
        </div>
    )
}

export default ProductForm;