import { FieldHookConfig, useField, Field, ErrorMessage } from "formik";
import { PropsWithChildren } from "react";

const PubFormField: React.FC<FieldHookConfig<string> & PropsWithChildren<{ label: string; tail?: string; }>> = ({ label, children, tail, ...props }) => {
    const [field, meta, helpers] = useField(props);
    return (
        <div className={`flex mt-4 ${props.as === "textarea" ? 'items-start' : 'items-center'}`}>
            <label htmlFor={props.name} className="mb-2 text-base font-medium text-blue-700 w-60">{label}</label>
            <div className="">
                <div className={`flex w-96`}>
                    <Field
                        {...field}  {...props}
                        id={props.name}
                        placeholder={props.placeholder}
                        className={`border  max-w-sm text-gray-900 placeholder-gray-700 text-sm flex-auto p-2.5 ${!!tail ? 'rounded-l-lg' : 'rounded-lg'} ${meta.touched && meta.error ? 'bg-red-50 border-red-500' : 'bg-blue-50 border-blue-500'} focus:ring-blue-500 focus:border-blue-500`}
                    >
                        {children}
                    </Field>
                    {!!tail && (
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-l-0 border-gray-300 rounded-r-md">
                            {tail}
                        </span>
                    )}
                </div>
                <ErrorMessage name={field.name}>
                    {msg => <p className="mt-2 text-sm text-red-600">{msg}</p>}
                </ErrorMessage>
            </div>
        </div>
    )
}

export default PubFormField;