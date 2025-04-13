import Component from '~components/component';

const Page = async () => {
    return (
        <div className="m-8">
            <h1 className="font-semibold text-2xl">
                This is a page in the <code>app</code> directory.
            </h1>
            <Component />
        </div>
    );
};

export default Page;
