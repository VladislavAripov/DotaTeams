import React, { useState } from 'react';
import { Divider } from 'antd';
import { Page } from 'components/Layout/Page';
import { PageContent } from 'components/Layout/PageContent';
import ContentWrapper from 'ui-kit/ContentWrapper';
import TextButton from 'ui-kit/TextButton';
import browserHistory from 'App/root/browserHistory';
import { Pages } from 'constants/links';
import OAuthButton from './OAuthButton';
import LogInForm from './LogInForm';
import SignUpForm from './SignUpForm';
import './AuthorizationPage.less';

type AuthorizationMode = 'LogIn' | 'SignUp';

const AuthorizationPage: React.FC = () => {
    const [authorizationMode, setAuthorizationMode] = useState<AuthorizationMode>('LogIn');

    return (
        <Page>
            <PageContent>
                <div className={'AuthorizationPage'}>
                    <div
                        className={'logo'}
                        onClick={() => browserHistory.push(Pages.Main.url)}
                    >
                        DotaTeams
                    </div>
                    <ContentWrapper widthMode={'FitContent'}>
                        <div className={'authorization-mode-selector'}>
                            <TextButton
                                onClick={() => setAuthorizationMode('LogIn')}
                                active={authorizationMode === 'LogIn'}
                            >
                                Вход
                            </TextButton>
                            <span className={'authorization-mode-divider'}>/</span>
                            <TextButton
                                onClick={() => setAuthorizationMode('SignUp')}
                                active={authorizationMode === 'SignUp'}
                            >
                                Регистрация
                            </TextButton>
                        </div>
                        <div className={'authorization-form-wrapper'}>
                            {
                                authorizationMode === 'LogIn'
                                    ? <LogInForm />
                                    : <SignUpForm />
                            }
                        </div>
                        <Divider className={'native-oauth-authorization-divider'} plain>
                            или
                        </Divider>
                        <div className={'oauth-buttons-panel'}>
                            <OAuthButton />
                        </div>
                    </ContentWrapper>
                </div>
            </PageContent>
        </Page>
    );
};

export default AuthorizationPage;
