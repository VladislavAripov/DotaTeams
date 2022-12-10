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
import googleLogo from './assets/google-logo.svg';
import steamLogo from './assets/steam-logo.svg';

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
                            <OAuthButton icon={googleLogo} label={'Continue with Google'} redirectUri={'https://accounts.google.com/ServiceLogin?elo=1'} />
                            <OAuthButton icon={steamLogo} label={'Continue with Steam'} redirectUri={'https://steamcommunity.com/openid/login?openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.ns.sreg=http%3A%2F%2Fopenid.net%2Fextensions%2Fsreg%2F1.1&openid.sreg.optional=nickname%2Cemail%2Cfullname%2Cdob%2Cgender%2Cpostcode%2Ccountry%2Clanguage%2Ctimezone&openid.ns.ax=http%3A%2F%2Fopenid.net%2Fsrv%2Fax%2F1.0&openid.ax.mode=fetch_request&openid.ax.type.fullname=http%3A%2F%2Faxschema.org%2FnamePerson&openid.ax.type.firstname=http%3A%2F%2Faxschema.org%2FnamePerson%2Ffirst&openid.ax.type.lastname=http%3A%2F%2Faxschema.org%2FnamePerson%2Flast&openid.ax.type.email=http%3A%2F%2Faxschema.org%2Fcontact%2Femail&openid.ax.required=fullname%2Cfirstname%2Clastname%2Cemail&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.return_to=https%3A%2F%2Fapi.opendota.com%2Freturn&openid.realm=https%3A%2F%2Fapi.opendota.com'} />
                        </div>
                    </ContentWrapper>
                </div>
            </PageContent>
        </Page>
    );
};

export default AuthorizationPage;
