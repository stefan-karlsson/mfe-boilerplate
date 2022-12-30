import { initFederation } from '@softarc/native-federation';

(async () => {
  /**
   * Will initiate the federation making it possible to import federated modules.
   */
  await initFederation({
    // header: 'http://mfe-admin-header.mhdev.se/remoteEntry.json',
    // navigation: 'http://mfe-admin-navigation.mhdev.se/remoteEntry.json',
  });

  /**
   * Call that will bootstrap the application.
   */
  import('./bootstrap.js');
})();
