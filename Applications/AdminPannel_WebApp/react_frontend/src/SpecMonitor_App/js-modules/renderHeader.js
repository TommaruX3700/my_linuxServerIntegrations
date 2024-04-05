/*
    This is for rendering the header of the WebApp
*/

import logo from '../../media/logo.svg';

function render () {
    return (
        <div>
            <section class= "monitor-header">
                <img src={logo} class="monitor-header-icon testLogo" alt="logo"/>
                <p class="monitor-header-text">Specs Monitor</p>
            </section>
        </div>
    );
}

export default render