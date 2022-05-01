import { ErrorMessage } from "formik";

const FormError = ({ name, className }: { name: string, className?: string }) => {
    return (
        <ErrorMessage 
            name={name} 
            component="p" 
            className={`inline text-red-600 text-sm ml-2 ${className ?? ''}`} 
        />
    );
}
export default FormError;