<template>
    <div class="mdl-layout mdl-js-layout color--gray is-small-screen login">
    <main class="mdl-layout__content">
        <div class="mdl-card mdl-card__login mdl-shadow--2dp">
                <div class="mdl-card__supporting-text color--dark-gray">
                    <div class="mdl-grid">
                        <div class="mdl-cell mdl-cell--12-col mdl-cell--4-col-phone">
                            <span class="mdl-card__title-text text-color--smooth-gray">DARKBOARD</span>
                        </div>
                        <div class="mdl-cell mdl-cell--12-col mdl-cell--4-col-phone">
                            <span class="login-name text-color--white">Sign in</span>
                            <span class="login-secondary-text text-color--smoke">Enter fields to sign in to DARKBOARD</span>
                        </div>
                        <div class="mdl-cell mdl-cell--12-col mdl-cell--4-col-phone">
                            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label full-size">
                                <input class="mdl-textfield__input" type="text" id="e-mail">
                                <label class="mdl-textfield__label" for="e-mail">Email</label>
                            </div>
                            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label full-size">
                                <input class="mdl-textfield__input" type="text" id="password">
                                <label class="mdl-textfield__label" for="password">Password</label>
                            </div>
                            <a href="forgot-password.html" class="login-link">Forgot password?</a>
                        </div>
                        <div class="mdl-cell mdl-cell--12-col mdl-cell--4-col-phone submit-cell">
                            <a href="sign-up.html" class="login-link">Don't have account?</a>
                            <div class="mdl-layout-spacer"></div>
                            <a href="index.html">
                                <buttons class="mdl-button mdl-js-button mdl-button--raised color--light-blue">
                                    SIGN IN
                                </buttons>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
    </main>
</div>
</template>