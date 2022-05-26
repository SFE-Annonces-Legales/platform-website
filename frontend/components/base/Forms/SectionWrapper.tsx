import { FC, PropsWithChildren } from "react";

const SectionWrapper: FC<PropsWithChildren<{ title: string }>> = ({ title, children }) => (
    <section className="my-4">
        <div className="border-b-2 border-blue-600">
            <p className="px-6 py-2 bg-blue-600 rounded-t-lg text-white w-fit text-lg font-semibold">
                {title}
            </p>
        </div>
        {children}
    </section>
);
export default SectionWrapper;