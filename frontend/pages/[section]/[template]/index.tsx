import { useRouter } from "next/router";


const Template = ({  }) => {
    const { query } = useRouter();

    return (
        <h1>hello { query.template }</h1>
    );
}

export default Template;