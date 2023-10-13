import Component from '~components/misc/component';
import { getT } from '~locales/server';

const Page = async () => {
    const t = await getT();

    return (
        <div className="m-8">
            <h1 className="text-2xl font-semibold">{t('home.description')}</h1>
            <Component />
        </div>
    );
};

export default Page;
