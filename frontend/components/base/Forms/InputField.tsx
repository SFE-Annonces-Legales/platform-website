import { Field, FieldHookConfig, useField } from "formik";
import { PropsWithChildren } from "react";
import FormError from "./FormError";

type InputFieldProps = PropsWithChildren<{ label: string; }>

const InputField: React.FC<FieldHookConfig<string> & InputFieldProps> = ({ label, ...props }) => {
    const [field, meta, helpers] = useField(props);
    return (
        <div className="mb-6">
            <div>
                <label 
                    htmlFor={props.name}
                    className="mb-2 text-sm font-medium text-gray-900 "
                >
                    { label }
                </label>
                <FormError name={props.name}  />
            </div>

            <Field 
                {...field}  {...props}
                id={props.name}
                className={`${meta.error && "border-red-600"} bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                placeholder={props.placeholder} 
            />
               
        </div>
    );
}
export default InputField;