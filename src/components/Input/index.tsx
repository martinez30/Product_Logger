import { styled } from "@nextui-org/react"
import { useField } from "formik"
import { ChangeEvent } from "react"
import ReactSelect, { OptionsOrGroups } from "react-select"
import Creatable from "react-select/creatable"

interface InputProps {
    as: "INPUT" | "SELECT" | "SELECT_CREATABLE",
    options?: OptionsOrGroups<any, any>,
    handleCreateOption?: (value: string) => Promise<any>,
    name: string,
    onChange?: (e: ChangeEvent<any>) => void,
    setValue?: (value: any) => void,
    value?: any
}

const TypeInput = {
    INPUT: (props: InputProps) => <input
        name={props.name}
        onChange={props.onChange}
        value={props.value}
    />,
    SELECT: (props: InputProps) => <ReactSelect
        name={props.name}
        options={props.options}
        onChange={props.onChange}
        value={props.value}
    />,
    SELECT_CREATABLE: (props: InputProps) => <Creatable
        options={props.options}
        onChange={({ value }) => props.setValue ? props.setValue(value) : () => console.warn("Create.onChange não implementado")}
        value={props.value}
        onCreateOption={async (value) => {
            if(props.handleCreateOption && props.setValue) {
                const created = await props.handleCreateOption(value)
                props.setValue(created.id)
            }
            else {
                console.warn("Create.onCreateOption não implementado")
            }
        }}  
    />
}

export const Input = (props: InputProps) => {
    const [field, meta, helpers] = useField(props.name);

    return (
        <InputGroup>
            <label htmlFor="name">Nome</label>
            {TypeInput[props.as]({ ...props, value: field.value, setValue: helpers.setValue, onChange: field.onChange })}
            {meta.touched && meta.error && <span>{meta.error}</span>}
        </InputGroup>
    )
}

const InputGroup = styled("div", {
    display: "flex",
    flexDirection: "column",
})