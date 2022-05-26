import http from "@/helpers/http";
import City from "@/interfaces/cities";
import { Field, FieldHookConfig, useField } from "formik";
import { FC } from "react";
import FormError from "./FormError";

type CitySelectProps = (FieldHookConfig<string>) &  { cities: City[] };

const CitySelect: FC<CitySelectProps> = ({ cities, ...props}) => {
    const [ field, meta ] = useField(props);

    return (
        <div className="mb-6">
            <>
                <label className="mb-2 text-sm font-medium text-gray-900">Ville</label>
                <FormError name='city' />
            </>
            <Field as="select"
                {...field}
                {...props}
                className={`${meta.error && 'border-red-600'} bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}>
                <option defaultValue="" value={""}>-- choisir --</option>
               {cities.length && cities.map(({id, name}) => (
                   <option value={id} key={id}>{name}</option>
               ))}
            </Field>
        </div>
    );
}
export default CitySelect;