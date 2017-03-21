import { injectReducer } from '../../store/reducers';
import { injextReducer } from '../../store/reducers';


export default (store) => ({

  path : 'projects',
  /* Async getComponent is only invoked when route matches */
  getComponent (nextState, cb) {
    /* Webpack - use 'require.ensure' to create a split point 
       and embed an async module loader (jsonp) when bulding */
    require.ensure([], (require) => {
      /* Webback - use require call back to define dependencies for bundling */
      const Projects = require('./containers/ProjectsContainer').default;
      // const reducer = require('./modules/about').default; // TODO

      /* add the reducer to the store on the key 'about' */
      // injectReducer(store, { key : 'projects', reducer }); // TODO

      /* Return getComponent */
      cb(null, Projects);

      /* webback named bundle */
    }, 'projects');
  }

});
