import React from 'react';
import { Page } from 'components/Layout/Page/Page';
import { PageContent } from 'components/Layout/PageContent/PageContent';
import './MainPage.scss';
import OpportunitiesPanel from './components/OpportunitiesPanel';

const MainPage: React.FC = () => {
    return (
        <Page solidBackground>
            <div className={'MainPage'}>
                <div className={'jugger'}>
                    <div className={'jugger-gradient'} />
                </div>
                <PageContent>
                    <OpportunitiesPanel />
                    <div className={'logo'}>
                        DotaTeams
                    </div>
                </PageContent>
            </div>
        </Page>
    );
};

export default MainPage;
