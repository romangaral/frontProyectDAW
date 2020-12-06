import React, { Fragment } from 'react';
import AboutUs from './mainContent/AboutUs';
import PostsContainer from './mainContent/PostsContainer';
import Aside from './aside/Aside';

function Home({ credentials }) {

    return (
        <Fragment>
            <div className="sectionContainer container-fluid">
                <div className="mainContainer row">
                    <div className="mainContainer col-md-9">
                        <div className="aboutUsContainer row">
                            <AboutUs />
                        </div>
                        <div className="postsContainer row">
                            <PostsContainer credentials={credentials}/>
                        </div>
                    </div>
                    <div className="asideSection col-md-3">
                        <Aside />
                    </div>
                </div>
            </div>
        </Fragment>

    );
}

export default Home;


