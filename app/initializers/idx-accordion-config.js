import Em from 'ember';
import Config from 'ember-idx-utils/config'

export default {
  name: 'ember-idx-accordion',
  initialize: function() {
    if (!Em.Config) {
        Em.Config = Config.create()
    }

    var defaultConfig = Em.Config.getConfig('default');
    if (!defaultConfig) {
        Em.Config.addConfig('default');
        defaultConfig = Em.Config.getConfig('default');
    }

    //Bootstrap
    var bsConfig = Em.Config.getConfig('bs');
    if (!bsConfig) {
        Em.Config.addConfig('bs');
        bsConfig = Em.Config.getConfig('bs');
    }
    bsConfig['accordion'] = {
        classes: ['panel-group'],
        itemClasses: ['panel', 'panel-default'],
        itemSelectedClasses: ['active'],
        panelHeaderClasses: ['panel-heading'],
        panelTitleClasses: ['panel-title'],
        panelTogglerClasses: ['accordion-toggle'],
        panelBodyContainerClasses: ['panel-collapse','collapse'],
        panelBodyClasses: ['panel-body']
    }
  }
};

