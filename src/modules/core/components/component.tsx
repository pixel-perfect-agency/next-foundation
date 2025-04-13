'use client';

const Component = () => {
    return (
        <div className="my-4 w-fit rounded-lg border border-gray-200 p-4">
            <h2 className="font-semibold text-xl">Hello World!</h2>
            <p>
                This component is located in:{' '}
                <span className="rounded-md bg-gray-200 px-2 py-1 text-sm">
                    src/modules/core/components/component.tsx
                </span>
            </p>
        </div>
    );
};

export default Component;
