/* jshint ignore:start */

/* jshint ignore:end */

define('karel/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'karel/config/environment'], function (exports, Ember, Resolver, loadInitializers, config) {

  'use strict';

  Ember['default'].MODEL_FACTORY_INJECTIONS = true;

  var App = Ember['default'].Application.extend({
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix,
    Resolver: Resolver['default']
  });

  loadInitializers['default'](App, config['default'].modulePrefix);

  exports['default'] = App;

});
define('karel/initializers/app-version', ['exports', 'karel/config/environment', 'ember'], function (exports, config, Ember) {

  'use strict';

  var classify = Ember['default'].String.classify;
  var registered = false;

  exports['default'] = {
    name: "App Version",
    initialize: function initialize(container, application) {
      if (!registered) {
        var appName = classify(application.toString());
        Ember['default'].libraries.register(appName, config['default'].APP.version);
        registered = true;
      }
    }
  };

});
define('karel/initializers/export-application-global', ['exports', 'ember', 'karel/config/environment'], function (exports, Ember, config) {

  'use strict';

  exports.initialize = initialize;

  function initialize(container, application) {
    var classifiedName = Ember['default'].String.classify(config['default'].modulePrefix);

    if (config['default'].exportApplicationGlobal && !window[classifiedName]) {
      window[classifiedName] = application;
    }
  }

  ;

  exports['default'] = {
    name: "export-application-global",

    initialize: initialize
  };

});
define('karel/mixins/reset-scroll', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Mixin.create({
    activate: function activate() {
      this._super();
      window.scrollTo(0, 0);
    }
  });

});
define('karel/pods/about/route', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var AboutRoute = Ember['default'].Route.extend({
    titleToken: "About"
  });

  exports['default'] = AboutRoute;

});
define('karel/pods/about/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.0-beta.5",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","page");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","container");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h4");
        var el4 = dom.createTextNode("About Me");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createTextNode("Born in Toronto, ON, Canada, I am currently working in Silicon Valley as a Product Manager at Zazzle.");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createTextNode("More to come soon!");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createMorphAt(dom.childAt(fragment, [0, 1]),7,7);
        content(env, morph0, context, "outlet");
        return fragment;
      }
    };
  }()));

});
define('karel/pods/application/adapter', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  exports['default'] = DS['default'].FixtureAdapter.extend({
    queryFixtures: function queryFixtures(records, query) {
      return records.filter(function (record) {
        for (var key in query) {
          if (!query.hasOwnProperty(key)) {
            continue;
          }
          var value = query[key];
          if (record[key] !== value) {
            return false;
          }
        }
        return true;
      });
    }
  });

});
define('karel/pods/application/route', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    title: function title(tokens) {
      var separator = tokens.length > 0 ? " | " : "";
      return "Karel Vuong" + separator + tokens.join(" - ");
    },
    model: function model() {
      return {
        posts: this.store.find("post"),
        answers: this.store.find("post-answer"),
        articles: this.store.find("post-article")
      };
    }
  });

});
define('karel/pods/application/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0-beta.5",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Karel Vuong");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child1 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0-beta.5",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("About");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child2 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0-beta.5",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Posts");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child3 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0-beta.5",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Portfolio");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child4 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0-beta.5",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Resume");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child5 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0-beta.5",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("img");
          dom.setAttribute(el1,"class","footer-image");
          dom.setAttribute(el1,"src","/assets/images/face.jpg");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child6 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0-beta.5",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Karel Vuong");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child7 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0-beta.5",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("About");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child8 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0-beta.5",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Posts");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child9 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0-beta.5",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Portfolio");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child10 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0-beta.5",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Resume");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.0-beta.5",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("header");
        dom.setAttribute(el1,"class","header--site");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","container");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","header--site-brand pull-left");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"class","header--site-twitter");
        dom.setAttribute(el4,"href","https://twitter.com/karelvuong");
        var el5 = dom.createTextNode("(@karelvuong)");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("ul");
        dom.setAttribute(el3,"class","header--site-list pull-right");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        dom.setAttribute(el4,"class","header--site-list-item");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        dom.setAttribute(el4,"class","header--site-list-item");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        dom.setAttribute(el4,"class","header--site-list-item");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        dom.setAttribute(el4,"class","header--site-list-item");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("footer");
        dom.setAttribute(el1,"class","footer");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","container");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","row");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","col-sm-6");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5,"class","footer-text");
        var el6 = dom.createTextNode("\n          Currently a Product Manager at Zazzle, I am a software engineer at heart and enjoy designing things on the side.\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5,"class","footer-text");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6,"href","https://github.com/karelvuong/website-ember/issues");
        var el7 = dom.createTextNode("Found an issue? Let me know.");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","col-sm-6");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("ul");
        dom.setAttribute(el5,"class","footer-list col-xs-6");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h6");
        dom.setAttribute(el6,"class","footer-heading");
        var el7 = dom.createTextNode("Navigation");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        dom.setAttribute(el6,"class","footer-list-item");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        dom.setAttribute(el6,"class","footer-list-item");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        dom.setAttribute(el6,"class","footer-list-item");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        dom.setAttribute(el6,"class","footer-list-item");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("ul");
        dom.setAttribute(el5,"class","footer-list col-xs-6");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h6");
        dom.setAttribute(el6,"class","footer-heading");
        var el7 = dom.createTextNode("Networks");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        dom.setAttribute(el6,"class","footer-list-item");
        var el7 = dom.createElement("a");
        dom.setAttribute(el7,"class","footer-link");
        dom.setAttribute(el7,"href","https://github.com/karelvuong");
        var el8 = dom.createTextNode("GitHub");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        dom.setAttribute(el6,"class","footer-list-item");
        var el7 = dom.createElement("a");
        dom.setAttribute(el7,"class","footer-link");
        dom.setAttribute(el7,"href","https://linkedin.com/in/karelvuong");
        var el8 = dom.createTextNode("LinkedIn");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        dom.setAttribute(el6,"class","footer-list-item");
        var el7 = dom.createElement("a");
        dom.setAttribute(el7,"class","footer-link");
        dom.setAttribute(el7,"href","https://quora.com/Karel-Vuong");
        var el8 = dom.createTextNode("Quora");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        dom.setAttribute(el6,"class","footer-list-item");
        var el7 = dom.createElement("a");
        dom.setAttribute(el7,"class","footer-link");
        dom.setAttribute(el7,"href","https://twitter.com/karelvuong");
        var el8 = dom.createTextNode("Twitter");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, block = hooks.block, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [0, 1]);
        var element1 = dom.childAt(element0, [3]);
        var element2 = dom.childAt(fragment, [4, 1, 1]);
        var element3 = dom.childAt(element2, [1]);
        var element4 = dom.childAt(element2, [3, 1]);
        var morph0 = dom.createMorphAt(dom.childAt(element0, [1]),1,1);
        var morph1 = dom.createMorphAt(dom.childAt(element1, [1]),0,0);
        var morph2 = dom.createMorphAt(dom.childAt(element1, [3]),0,0);
        var morph3 = dom.createMorphAt(dom.childAt(element1, [5]),0,0);
        var morph4 = dom.createMorphAt(dom.childAt(element1, [7]),0,0);
        var morph5 = dom.createMorphAt(fragment,2,2,contextualElement);
        var morph6 = dom.createMorphAt(element3,1,1);
        var morph7 = dom.createMorphAt(element3,3,3);
        var morph8 = dom.createMorphAt(dom.childAt(element4, [3]),0,0);
        var morph9 = dom.createMorphAt(dom.childAt(element4, [5]),0,0);
        var morph10 = dom.createMorphAt(dom.childAt(element4, [7]),0,0);
        var morph11 = dom.createMorphAt(dom.childAt(element4, [9]),0,0);
        block(env, morph0, context, "link-to", ["home"], {"class": "header--site-name"}, child0, null);
        block(env, morph1, context, "link-to", ["about"], {"class": "header--site-link"}, child1, null);
        block(env, morph2, context, "link-to", ["posts"], {"class": "header--site-link"}, child2, null);
        block(env, morph3, context, "link-to", ["portfolio"], {"class": "header--site-link"}, child3, null);
        block(env, morph4, context, "link-to", ["resume"], {"class": "header--site-link"}, child4, null);
        content(env, morph5, context, "outlet");
        block(env, morph6, context, "link-to", ["home"], {}, child5, null);
        block(env, morph7, context, "link-to", ["home"], {"class": "footer-name"}, child6, null);
        block(env, morph8, context, "link-to", ["about"], {"class": "footer-link"}, child7, null);
        block(env, morph9, context, "link-to", ["posts"], {"class": "footer-link"}, child8, null);
        block(env, morph10, context, "link-to", ["portfolio"], {"class": "footer-link"}, child9, null);
        block(env, morph11, context, "link-to", ["resume"], {"class": "footer-link"}, child10, null);
        return fragment;
      }
    };
  }()));

});
define('karel/pods/equipment/route', ['exports', 'ember', 'karel/mixins/reset-scroll'], function (exports, Ember, resetScroll) {

	'use strict';

	var PageEquipmentRoute = Ember['default'].Route.extend(resetScroll['default'], {});

	exports['default'] = PageEquipmentRoute;

});
define('karel/pods/equipment/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.0-beta.5",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","page");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","container");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h4");
        var el4 = dom.createTextNode("Equipment");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createTextNode("I'm still preparing my list of things that I use on a daily basis. More to come soon!");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createMorphAt(dom.childAt(fragment, [0, 1]),5,5);
        content(env, morph0, context, "outlet");
        return fragment;
      }
    };
  }()));

});
define('karel/pods/error/route', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({});

});
define('karel/pods/error/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.0-beta.5",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","page--error page");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","page--error-inner");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h1");
        var el4 = dom.createTextNode("Uh oh!");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createMorphAt(fragment,2,2,contextualElement);
        content(env, morph0, context, "outlet");
        return fragment;
      }
    };
  }()));

});
define('karel/pods/home/controller', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	var HomeController = Ember['default'].Controller.extend({});

	exports['default'] = HomeController;

});
define('karel/pods/home/route', ['exports', 'ember', 'karel/mixins/reset-scroll'], function (exports, Ember, resetScroll) {

  'use strict';

  var HomeRoute = Ember['default'].Route.extend(resetScroll['default'], {
    model: function model() {
      return this.store.all("post");
    }
  });

  exports['default'] = HomeRoute;

});
define('karel/pods/home/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0-beta.5",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("here");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child1 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0-beta.5",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("about me");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child2 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0-beta.5",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("stuff I use");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child3 = (function() {
      var child0 = (function() {
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.0-beta.5",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, content = hooks.content;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
            dom.insertBoundary(fragment, null);
            dom.insertBoundary(fragment, 0);
            content(env, morph0, context, "post.title");
            return fragment;
          }
        };
      }());
      var child1 = (function() {
        var child0 = (function() {
          return {
            isHTMLBars: true,
            revision: "Ember@1.11.0-beta.5",
            blockParams: 0,
            cachedFragment: null,
            hasRendered: false,
            build: function build(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("              ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("strong");
              dom.setAttribute(el1,"class","post-list-item-tag");
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            render: function render(context, env, contextualElement) {
              var dom = env.dom;
              var hooks = env.hooks, content = hooks.content;
              dom.detectNamespace(contextualElement);
              var fragment;
              if (env.useFragmentCache && dom.canClone) {
                if (this.cachedFragment === null) {
                  fragment = this.build(dom);
                  if (this.hasRendered) {
                    this.cachedFragment = fragment;
                  } else {
                    this.hasRendered = true;
                  }
                }
                if (this.cachedFragment) {
                  fragment = dom.cloneNode(this.cachedFragment, true);
                }
              } else {
                fragment = this.build(dom);
              }
              var morph0 = dom.createMorphAt(dom.childAt(fragment, [1]),0,0);
              content(env, morph0, context, "tag");
              return fragment;
            }
          };
        }());
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.0-beta.5",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1,"class","post-list-item-tags pull-left");
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("            ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, get = hooks.get, block = hooks.block;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createMorphAt(dom.childAt(fragment, [1]),1,1);
            block(env, morph0, context, "each", [get(env, context, "post.tags")], {"keyword": "tag"}, child0, null);
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0-beta.5",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          dom.setAttribute(el1,"class","post-list-item row");
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","pull-right");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          dom.setAttribute(el3,"class","post-list-item-date pull-left");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, get = hooks.get, block = hooks.block, content = hooks.content;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var element0 = dom.childAt(fragment, [1]);
          var element1 = dom.childAt(element0, [3]);
          var morph0 = dom.createMorphAt(element0,1,1);
          var morph1 = dom.createMorphAt(element1,1,1);
          var morph2 = dom.createMorphAt(dom.childAt(element1, [3]),0,0);
          block(env, morph0, context, "link-to", [get(env, context, "post.url")], {"class": "post-list-item-title pull-left"}, child0, null);
          block(env, morph1, context, "if", [get(env, context, "post.tags")], {}, child1, null);
          content(env, morph2, context, "post.date");
          return fragment;
        }
      };
    }());
    var child4 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0-beta.5",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("View posts");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child5 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0-beta.5",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("View Portfolio");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.0-beta.5",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("section");
        dom.setAttribute(el1,"class","section--intro section--lg");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","section--intro-inner");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h1");
        dom.setAttribute(el3,"class","intro-heading");
        var el4 = dom.createTextNode("Hi, I'm Karel.");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        dom.setAttribute(el3,"class","intro-text larger");
        var el4 = dom.createTextNode("I'm a ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4,"class","t-underline");
        var el5 = dom.createTextNode("Product Manager at Zazzle");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(".");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        dom.setAttribute(el3,"class","intro-text");
        var el4 = dom.createTextNode("I am a ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4,"class","u-clr-0");
        var el5 = dom.createTextNode("designer");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(" at heart and a ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4,"class","u-clr-0");
        var el5 = dom.createTextNode("front-end engineer");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(" on the side. Occasionally, I'll write things ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(", but you can hear from me more regularly at ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"href","https://twitter.com/karelvuong");
        dom.setAttribute(el4,"target","_blank");
        var el5 = dom.createTextNode("@karelvuong");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(". Read more ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(" and the ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(".");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        dom.setAttribute(el3,"class","intro-text small");
        var el4 = dom.createTextNode("Sign up for my mailing list if you want to know when I post something.");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("section");
        dom.setAttribute(el1,"class","section--posts section-border-top section--md");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","container");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","sub-section");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h4");
        var el5 = dom.createTextNode("Recent Posts");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("ul");
        dom.setAttribute(el4,"class","post-list");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","row text-center");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","btn-section-footer btn-group");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5,"class","btn btn--no-border");
        dom.setAttribute(el5,"href","https://quora.com/Karel-Vuong");
        var el6 = dom.createTextNode("Quora");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("section");
        dom.setAttribute(el1,"class","section--work section-border-top section--md");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","container");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","work-row row");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","work work--side");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5,"class","inner");
        dom.setAttribute(el5,"href","https://github.com/karelvuong/st-primer");
        dom.setAttribute(el5,"target","_blank");
        dom.setAttribute(el5,"style","background-color: #4283C5;");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("i");
        dom.setAttribute(el6,"class","oi icon");
        dom.setAttribute(el6,"data-glyph","excerpt");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","outer");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        dom.setAttribute(el6,"class","title");
        var el7 = dom.createTextNode("Primer");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        dom.setAttribute(el6,"class","type");
        var el7 = dom.createElement("strong");
        var el8 = dom.createTextNode("Theme - Sublime Text");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        dom.setAttribute(el6,"class","description");
        var el7 = dom.createTextNode("A UI + syntax theme for Sublime Text inspired by GitHub's design.");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","work work--side");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5,"class","inner");
        dom.setAttribute(el5,"href","https://github.com/karelvuong/st-fox");
        dom.setAttribute(el5,"target","_blank");
        dom.setAttribute(el5,"style","background-color: #39424D;");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("i");
        dom.setAttribute(el6,"class","oi icon");
        dom.setAttribute(el6,"data-glyph","excerpt");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","outer");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        dom.setAttribute(el6,"class","title");
        var el7 = dom.createTextNode("Fox");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        dom.setAttribute(el6,"class","type");
        var el7 = dom.createElement("strong");
        var el8 = dom.createTextNode("Theme - Sublime Text");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        dom.setAttribute(el6,"class","description");
        var el7 = dom.createTextNode("A UI + syntax theme for Sublime Text based on Mozilla's Firefox Developer Edition.");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","work work--side");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5,"class","inner");
        dom.setAttribute(el5,"href","https://github.com/karelvuong/devtools-chromegray--dark");
        dom.setAttribute(el5,"target","_blank");
        dom.setAttribute(el5,"style","background-color: #2B303B;");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("i");
        dom.setAttribute(el6,"class","oi icon");
        dom.setAttribute(el6,"data-glyph","excerpt");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","outer");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        dom.setAttribute(el6,"class","title");
        var el7 = dom.createTextNode("Chromegray");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        dom.setAttribute(el6,"class","type");
        var el7 = dom.createElement("strong");
        var el8 = dom.createTextNode("Theme - Chrome Developer Tools");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        dom.setAttribute(el6,"class","description");
        var el7 = dom.createTextNode("A theme for Chrome Developer Tools based on the Spacegray Sublime Text theme.");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","row text-center");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","btn-section-footer btn-group");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5,"class","btn btn--no-border");
        dom.setAttribute(el5,"href","https://github.com/karelvuong");
        var el6 = dom.createTextNode("GitHub");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("section");
        dom.setAttribute(el1,"class","section--accountability section-border-top section--md");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","container");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("ul");
        dom.setAttribute(el3,"class","list--accountability");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h4");
        var el5 = dom.createTextNode("List of Accountability (2015 - 2016)");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        var el5 = dom.createTextNode("The purpose of this public list is to keep me accountable and encourage me to stick to my New Year's resolutions and goals for the year. If I don't stick by them, you can hold me to it.");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        dom.setAttribute(el4,"class","list--accountability-item list--accountability-item--green row");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5,"class","list--accountability-item-text");
        var el6 = dom.createTextNode("Commit to ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6,"href","https://github.com/karelvuong");
        dom.setAttribute(el6,"target","_blank");
        var el7 = dom.createTextNode("GitHub");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(" at least ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("strong");
        var el7 = dom.createTextNode("once a day");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(".");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("small");
        var el6 = dom.createElement("strong");
        var el7 = dom.createTextNode("On track:");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(" 60 day streak");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        dom.setAttribute(el4,"class","list--accountability-item list--accountability-item--yellow row");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5,"class","list--accountability-item-text");
        var el6 = dom.createTextNode("Sketch at least ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("strong");
        var el7 = dom.createTextNode("once a month");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(".");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("small");
        var el6 = dom.createElement("strong");
        var el7 = dom.createTextNode("On track:");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(" April");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        dom.setAttribute(el4,"class","list--accountability-item list--accountability-item--yellow row");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5,"class","list--accountability-item-text");
        var el6 = dom.createTextNode("Conduct a design analysis at least ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("strong");
        var el7 = dom.createTextNode("once a month");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(".");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("small");
        var el6 = dom.createElement("strong");
        var el7 = dom.createTextNode("On track:");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(" In Progress");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        dom.setAttribute(el4,"class","list--accountability-item row");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5,"class","list--accountability-item-text");
        var el6 = dom.createTextNode("Become a Player on ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6,"href","https://dribbble.com");
        var el7 = dom.createTextNode("Dribbble");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(" by the ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("strong");
        var el7 = dom.createTextNode("end of the year");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(".");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("section");
        dom.setAttribute(el1,"class","section--ember section--xs");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","container text-center");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createElement("small");
        var el5 = dom.createTextNode("This website was created in ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("strong");
        var el6 = dom.createElement("a");
        dom.setAttribute(el6,"href","http://emberjs.com/");
        dom.setAttribute(el6,"target","_blank");
        var el7 = dom.createTextNode("Ember.js");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(" ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6,"href","https://github.com/emberjs/ember.js/releases/tag/v1.11.0-beta.5");
        dom.setAttribute(el6,"target","_blank");
        var el7 = dom.createTextNode("(1.11.0-beta.5)");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode(" using ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("strong");
        var el6 = dom.createElement("a");
        dom.setAttribute(el6,"href","http://ember-cli.com");
        dom.setAttribute(el6,"target","_blank");
        var el7 = dom.createTextNode("ember-cli");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(" ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6,"href","https://github.com/ember-cli/ember-cli/releases/tag/v0.2.2");
        dom.setAttribute(el6,"target","_blank");
        var el7 = dom.createTextNode("(0.2.2)");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode(" as an experiment and is available on ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5,"href","https://github.com/karelvuong/website-ember");
        var el6 = dom.createElement("strong");
        var el7 = dom.createTextNode("GitHub");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode(".");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, block = hooks.block, inline = hooks.inline, get = hooks.get, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element2 = dom.childAt(fragment, [0, 1]);
        var element3 = dom.childAt(element2, [5]);
        var element4 = dom.childAt(fragment, [2, 1]);
        var morph0 = dom.createMorphAt(element3,5,5);
        var morph1 = dom.createMorphAt(element3,9,9);
        var morph2 = dom.createMorphAt(element3,11,11);
        var morph3 = dom.createMorphAt(element2,9,9);
        var morph4 = dom.createMorphAt(dom.childAt(element4, [1, 3]),1,1);
        var morph5 = dom.createMorphAt(dom.childAt(element4, [3, 1]),1,1);
        var morph6 = dom.createMorphAt(dom.childAt(fragment, [4, 1, 3, 1]),1,1);
        var morph7 = dom.createMorphAt(fragment,10,10,contextualElement);
        block(env, morph0, context, "link-to", ["posts"], {}, child0, null);
        block(env, morph1, context, "link-to", ["about"], {}, child1, null);
        block(env, morph2, context, "link-to", ["equipment"], {}, child2, null);
        inline(env, morph3, context, "partial", ["mailing-list"], {});
        block(env, morph4, context, "each", [get(env, context, "model")], {"keyword": "post"}, child3, null);
        block(env, morph5, context, "link-to", ["posts"], {"class": "btn"}, child4, null);
        block(env, morph6, context, "link-to", ["portfolio"], {"class": "btn"}, child5, null);
        content(env, morph7, context, "outlet");
        return fragment;
      }
    };
  }()));

});
define('karel/pods/mailing-list/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.0-beta.5",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"id","mc_embed_signup");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("form");
        dom.setAttribute(el2,"action","//karel.us5.list-manage.com/subscribe/post?u=453afd4574efb15909950c60d&id=7cc34305db");
        dom.setAttribute(el2,"method","post");
        dom.setAttribute(el2,"id","mc-embedded-subscribe-form");
        dom.setAttribute(el2,"name","mc-embedded-subscribe-form");
        dom.setAttribute(el2,"class","validate");
        dom.setAttribute(el2,"target","_blank");
        dom.setAttribute(el2,"novalidate","");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"id","mc_embed_signup_scroll");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","mc-field-group input-group");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("button");
        dom.setAttribute(el5,"class","intro-btn btn");
        dom.setAttribute(el5,"type","submit");
        dom.setAttribute(el5,"id","mc-embedded-subscribe");
        dom.setAttribute(el5,"value","Subscribe");
        var el6 = dom.createTextNode("Subscribe");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"style","position: absolute; left: -5000px;");
        var el5 = dom.createElement("input");
        dom.setAttribute(el5,"type","text");
        dom.setAttribute(el5,"name","b_453afd4574efb15909950c60d_7cc34305db");
        dom.setAttribute(el5,"tabindex","-1");
        dom.setAttribute(el5,"value","");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("script");
        dom.setAttribute(el2,"type","text/javascript");
        dom.setAttribute(el2,"src","//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, inline = hooks.inline;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createMorphAt(dom.childAt(fragment, [0, 1, 1, 1]),1,1);
        inline(env, morph0, context, "input", [], {"id": "mce-EMAIL", "class": "intro-input email", "type": "email", "name": "EMAIL", "placeholder": "Enter your email"});
        return fragment;
      }
    };
  }()));

});
define('karel/pods/portfolio/clients/route', ['exports', 'ember', 'karel/mixins/reset-scroll'], function (exports, Ember, resetScroll) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend(resetScroll['default'], {
    titleToken: "Extensions"
  });

});
define('karel/pods/portfolio/clients/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.0-beta.5",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("section");
        dom.setAttribute(el1,"class","portfolio-section--masthead text-center");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h1");
        dom.setAttribute(el2,"class","portfolio-masthead-title");
        var el3 = dom.createTextNode("Client Work");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        dom.setAttribute(el2,"class","portfolio-masthead-description");
        var el3 = dom.createTextNode("A collection of projects for various clients like ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3,"href","#");
        var el4 = dom.createTextNode("1 Million Music Moments");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" and the ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3,"href","");
        var el4 = dom.createTextNode("Toronto Youth Cabinet");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(".");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","portfolio-masthead-overlay");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createMorphAt(fragment,2,2,contextualElement);
        content(env, morph0, context, "outlet");
        return fragment;
      }
    };
  }()));

});
define('karel/pods/portfolio/extensions/route', ['exports', 'ember', 'karel/mixins/reset-scroll'], function (exports, Ember, resetScroll) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend(resetScroll['default'], {
    titleToken: "Extensions"
  });

});
define('karel/pods/portfolio/extensions/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0-beta.5",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Back to Portfolio");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.0-beta.5",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("section");
        dom.setAttribute(el1,"class","portfolio-section--masthead text-center");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h1");
        dom.setAttribute(el2,"class","portfolio-masthead-title");
        var el3 = dom.createTextNode("Extensions");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        dom.setAttribute(el2,"class","portfolio-masthead-description");
        var el3 = dom.createTextNode("A collection of extensions that extends the functionality of ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3,"href","#");
        var el4 = dom.createTextNode("Google Chrome");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(".");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","portfolio-masthead-overlay");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","portfolio-section--work");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","container");
        var el3 = dom.createTextNode("\n	  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h4");
        dom.setAttribute(el3,"class","portfolio-work-title text-center");
        var el4 = dom.createTextNode("Google Chrome");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2,"class","portfolio-work portfolio-work--small");
        dom.setAttribute(el2,"href","https://github.com/karelvuong/chrome-ext-github-toolbox");
        dom.setAttribute(el2,"style","background-color: #4183C4");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","portfolio-work-information");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","container");
        var el5 = dom.createTextNode("\n		    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5,"class","portfolio-work-information-title");
        var el6 = dom.createTextNode("GitHub Toolbox");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n		    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5,"class","portfolio-work-information-type");
        var el6 = dom.createTextNode("Chrome Extension");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n		    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5,"class","portfolio-work-information-description");
        var el6 = dom.createTextNode("A Google Chrome Extension that extends GitHub's functionality with a few useful tools.");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","row text-center");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","btn-section-footer btn-group");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, content = hooks.content, block = hooks.block;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createMorphAt(fragment,4,4,contextualElement);
        var morph1 = dom.createMorphAt(dom.childAt(fragment, [6, 1]),1,1);
        content(env, morph0, context, "outlet");
        block(env, morph1, context, "link-to", ["portfolio"], {"class": "btn"}, child0, null);
        return fragment;
      }
    };
  }()));

});
define('karel/pods/portfolio/index/route', ['exports', 'ember', 'karel/mixins/reset-scroll'], function (exports, Ember, resetScroll) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend(resetScroll['default'], {});

});
define('karel/pods/portfolio/index/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0-beta.5",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","portfolio-work-information");
          var el2 = dom.createTextNode("\n		");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","container");
          var el3 = dom.createTextNode("\n	    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          dom.setAttribute(el3,"class","portfolio-work-information-title text-center");
          var el4 = dom.createTextNode("Client Work");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n		");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child1 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0-beta.5",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","portfolio-work-information");
          var el2 = dom.createTextNode("\n		");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","container");
          var el3 = dom.createTextNode("\n	    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          dom.setAttribute(el3,"class","portfolio-work-information-title text-center");
          var el4 = dom.createTextNode("Themes");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n		");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child2 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0-beta.5",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","portfolio-work-information");
          var el2 = dom.createTextNode("\n		");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","container");
          var el3 = dom.createTextNode("\n	    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          dom.setAttribute(el3,"class","portfolio-work-information-title text-center");
          var el4 = dom.createTextNode("Extensions");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n		");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.0-beta.5",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","portfolio-section--work");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","container");
        var el3 = dom.createTextNode("\n	  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h4");
        dom.setAttribute(el3,"class","portfolio-work-title text-center");
        var el4 = dom.createTextNode("Featured Work");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2,"class","portfolio-work");
        dom.setAttribute(el2,"href","https://github.com/karelvuong/st-primer");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","portfolio-work-screenshot");
        dom.setAttribute(el3,"style","background-image: url('/assets/images/portfolio/theme-st-primer_light.jpg')");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","portfolio-work-information");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","container");
        var el5 = dom.createTextNode("\n		    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5,"class","portfolio-work-information-title");
        var el6 = dom.createTextNode("Primer");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n		    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5,"class","portfolio-work-information-type");
        var el6 = dom.createTextNode("Theme - Sublime Text");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n		    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5,"class","portfolio-work-information-description");
        var el6 = dom.createTextNode("A UI + syntax theme for Sublime Text based on Mozilla's Firefox Developer Edition.");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","portfolio-section--work");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","container");
        var el3 = dom.createTextNode("\n	  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h4");
        dom.setAttribute(el3,"class","portfolio-work-title text-center");
        var el4 = dom.createTextNode("Collection");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","container text-center");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","btn-section-footer btn-group");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3,"class","btn");
        dom.setAttribute(el3,"href","https://github.com/karelvuong");
        var el4 = dom.createTextNode("GitHub");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, block = hooks.block, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [2]);
        var morph0 = dom.createMorphAt(element0,3,3);
        var morph1 = dom.createMorphAt(element0,5,5);
        var morph2 = dom.createMorphAt(element0,7,7);
        var morph3 = dom.createMorphAt(fragment,4,4,contextualElement);
        block(env, morph0, context, "link-to", ["portfolio.clients"], {"class": "portfolio-work portfolio-work--small"}, child0, null);
        block(env, morph1, context, "link-to", ["portfolio.themes"], {"class": "portfolio-work portfolio-work--small"}, child1, null);
        block(env, morph2, context, "link-to", ["portfolio.extensions"], {"class": "portfolio-work portfolio-work--small"}, child2, null);
        content(env, morph3, context, "outlet");
        return fragment;
      }
    };
  }()));

});
define('karel/pods/portfolio/route', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var PortfolioRoute = Ember['default'].Route.extend({
    titleToken: "Portfolio"
  });

  exports['default'] = PortfolioRoute;

});
define('karel/pods/portfolio/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.0-beta.5",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","page page--portfolio");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createMorphAt(dom.childAt(fragment, [0]),1,1);
        content(env, morph0, context, "outlet");
        return fragment;
      }
    };
  }()));

});
define('karel/pods/portfolio/themes/route', ['exports', 'ember', 'karel/mixins/reset-scroll'], function (exports, Ember, resetScroll) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend(resetScroll['default'], {
    titleToken: "Themes"
  });

});
define('karel/pods/portfolio/themes/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0-beta.5",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Back to Portfolio");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.0-beta.5",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("section");
        dom.setAttribute(el1,"class","portfolio-section--masthead text-center");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h1");
        dom.setAttribute(el2,"class","portfolio-masthead-title");
        var el3 = dom.createTextNode("Themes");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        dom.setAttribute(el2,"class","portfolio-masthead-description");
        var el3 = dom.createTextNode("A collection of themes for tools like ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3,"href","#");
        var el4 = dom.createTextNode("Brackets");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(", ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3,"href","#");
        var el4 = dom.createTextNode("Chrome Developer Tools");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(", ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3,"href","#");
        var el4 = dom.createTextNode("Sublime Text");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(", and ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3,"href","#");
        var el4 = dom.createTextNode("Terminal");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(".");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","portfolio-masthead-overlay");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","portfolio-section--work");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","container");
        var el3 = dom.createTextNode("\n	  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h4");
        dom.setAttribute(el3,"class","portfolio-work-title text-center");
        var el4 = dom.createTextNode("Brackets");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2,"class","portfolio-work");
        dom.setAttribute(el2,"href","https://github.com/karelvuong/brackets-fox--dark");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","portfolio-work-screenshot");
        dom.setAttribute(el3,"style","background-image: url('/assets/images/portfolio/theme-brackets-fox_dark.jpg')");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","portfolio-work-information");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","container");
        var el5 = dom.createTextNode("\n		    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5,"class","portfolio-work-information-title");
        var el6 = dom.createTextNode("Fox");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n		    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5,"class","portfolio-work-information-type");
        var el6 = dom.createTextNode("Theme - Brackets");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n		    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5,"class","portfolio-work-information-description");
        var el6 = dom.createTextNode("A syntax theme for Brackets based on Mozilla's Firefox Developer Edition.");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","portfolio-section--work");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","container");
        var el3 = dom.createTextNode("\n	  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h4");
        dom.setAttribute(el3,"class","portfolio-work-title text-center");
        var el4 = dom.createTextNode("Chrome Developer Tools");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2,"class","portfolio-work");
        dom.setAttribute(el2,"href","https://github.com/karelvuong/devtools-chromegray--dark");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","portfolio-work-screenshot portfolio-work-screenshot--top");
        dom.setAttribute(el3,"style","background-image: url('/assets/images/portfolio/theme-devtools-chromegray.jpg')");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","portfolio-work-information");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","container");
        var el5 = dom.createTextNode("\n		    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5,"class","portfolio-work-information-title");
        var el6 = dom.createTextNode("Chromegray");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n		    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5,"class","portfolio-work-information-type");
        var el6 = dom.createTextNode("Theme - Chrome Developer Tools");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n		    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5,"class","portfolio-work-information-description");
        var el6 = dom.createTextNode("A theme for Chrome Developer Tools based on the Spacegray Sublime Text theme.");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","portfolio-section--work");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","container");
        var el3 = dom.createTextNode("\n	  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h4");
        dom.setAttribute(el3,"class","portfolio-work-title text-center");
        var el4 = dom.createTextNode("Sublime Text");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2,"class","portfolio-work");
        dom.setAttribute(el2,"href","https://github.com/karelvuong/st-fox");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","portfolio-work-screenshot");
        dom.setAttribute(el3,"style","background-image: url('/assets/images/portfolio/theme-st-fox_dark.jpg')");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","portfolio-work-information");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","container");
        var el5 = dom.createTextNode("\n		    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5,"class","portfolio-work-information-title");
        var el6 = dom.createTextNode("Fox");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n		    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5,"class","portfolio-work-information-type");
        var el6 = dom.createTextNode("Theme - Sublime Text");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n		    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5,"class","portfolio-work-information-description");
        var el6 = dom.createTextNode("A UI + syntax theme for Sublime Text based on Mozilla's Firefox Developer Edition.");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2,"class","portfolio-work");
        dom.setAttribute(el2,"href","https://github.com/karelvuong/st-primer");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","portfolio-work-screenshot");
        dom.setAttribute(el3,"style","background-image: url('/assets/images/portfolio/theme-st-primer_light.jpg')");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","portfolio-work-information");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","container");
        var el5 = dom.createTextNode("\n		    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5,"class","portfolio-work-information-title");
        var el6 = dom.createTextNode("Primer");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n		    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5,"class","portfolio-work-information-type");
        var el6 = dom.createTextNode("Theme - Sublime Text");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n		    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5,"class","portfolio-work-information-description");
        var el6 = dom.createTextNode("A UI + syntax theme for Sublime Text based on Mozilla's Firefox Developer Edition.");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","portfolio-section--work");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","container");
        var el3 = dom.createTextNode("\n	  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h4");
        dom.setAttribute(el3,"class","portfolio-work-title text-center");
        var el4 = dom.createTextNode("Terminal");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2,"class","portfolio-work portfolio-work--small");
        dom.setAttribute(el2,"href","https://github.com/karelvuong/terminal-afterglow");
        dom.setAttribute(el2,"style","background-image: url('/assets/images/portfolio/theme-terminal-afterglow.jpg')");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","portfolio-work-information");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","container");
        var el5 = dom.createTextNode("\n		    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5,"class","portfolio-work-information-title");
        var el6 = dom.createTextNode("Afterglow");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n		    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5,"class","portfolio-work-information-type");
        var el6 = dom.createTextNode("Theme - Terminal");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n		    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5,"class","portfolio-work-information-description");
        var el6 = dom.createTextNode("The Afterglow sublime theme ported over to Terminal.app.");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2,"class","portfolio-work portfolio-work--small");
        dom.setAttribute(el2,"href","https://github.com/karelvuong/terminal-spacegray");
        dom.setAttribute(el2,"style","background-image: url('/assets/images/portfolio/theme-terminal-spacegray.jpg')");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","portfolio-work-information");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","container");
        var el5 = dom.createTextNode("\n		    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5,"class","portfolio-work-information-title");
        var el6 = dom.createTextNode("Spacegray");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n		    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5,"class","portfolio-work-information-type");
        var el6 = dom.createTextNode("Theme - Terminal");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n		    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5,"class","portfolio-work-information-description");
        var el6 = dom.createTextNode("The Spacegray sublime theme ported over to Terminal.app.");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","row text-center");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","btn-section-footer btn-group");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, content = hooks.content, block = hooks.block;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createMorphAt(fragment,10,10,contextualElement);
        var morph1 = dom.createMorphAt(dom.childAt(fragment, [12, 1]),1,1);
        content(env, morph0, context, "outlet");
        block(env, morph1, context, "link-to", ["portfolio"], {"class": "btn"}, child0, null);
        return fragment;
      }
    };
  }()));

});
define('karel/pods/post-answer/model', ['exports', 'karel/pods/post/model'], function (exports, Post) {

  'use strict';

  var Answer = Post['default'].extend({});

  Post['default'].reopenClass({
    FIXTURES: [{
      id: 1,
      title: "Should I study CS at University of Waterloo or the University of Toronto to get a career in Silicon Valley?",
      url: "https://www.quora.com/Should-I-go-to-University-of-Waterloo-for-CS-non-coop-or-University-of-Toronto-CS-with-optional-PEY-for-a-career-in-the-silicon-valley/answer/Karel-Vuong",
      date: "Mar 17, 2015",
      tags: []
    }, {
      id: 2,
      title: "How can I make the most of my CS program at the University of Toronto?",
      url: "https://www.quora.com/How-can-I-make-the-most-of-my-computer-science-program-at-U-of-T/answer/Karel-Vuong",
      date: "Jan 27, 2015",
      tags: []
    }, {
      id: 3,
      title: "I study CS at the University of Toronto and am close to graduating with a low GPA and little work experience. Will I be able to find a job?",
      url: "https://www.quora.com/I-study-CS-bachelors-at-U-of-T-and-I-am-close-to-graduating-with-a-low-GPA-and-I-don-not-have-much-of-a-professional-competency-Can-I-find-a-job-and-how-much-could-I-be-earning-straight-out-of-university/answer/Karel-Vuong",
      date: "Nov 03, 2014",
      tags: []
    }]
  });

  exports['default'] = Answer;

});
define('karel/pods/post-article/model', ['exports', 'karel/pods/post/model'], function (exports, Post) {

  'use strict';

  var Answer = Post['default'].extend({});

  Post['default'].reopenClass({
    FIXTURES: [{
      id: 1,
      title: "Cooler",
      organization: "CrackBerry",
      url: "http://crackberry.com/cooler-blackberry-10",
      date: "Dec 22, 2013",
      tags: []
    }, {
      id: 2,
      title: "Cella",
      organization: "CrackBerry",
      url: "http://crackberry.com/cella-blackberry-10",
      date: "Dec 6, 2013",
      tags: []
    }, {
      id: 3,
      title: "Winners Selected in Clinical Trial Visualization Redesign Challenge",
      organization: "Eli Lilly",
      url: "http://portal.lillycoi.com/2013/11/14/winners-selected-in-clinical-trial-visualization-redesign-challenge/",
      date: "Nov 11, 2013",
      tags: []
    }]
  });

  exports['default'] = Answer;

});
define('karel/pods/post/controller', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller.extend({});

});
define('karel/pods/post/design-analysis-blackberry-flow/route', ['exports', 'ember', 'karel/mixins/reset-scroll'], function (exports, Ember, resetScroll) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend(resetScroll['default'], {
    titleToken: "Design Analysis: BlackBerry Flow",
    model: function model() {
      return this.store.find("post", 4);
    }
  });

});
define('karel/pods/post/design-analysis-blackberry-flow/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.0-beta.5",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("article");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("section");
        dom.setAttribute(el2,"class","post-section--masthead text-center");
        dom.setAttribute(el2,"style","background-color: #212121;");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h1");
        dom.setAttribute(el3,"class","post-masthead-title");
        var el4 = dom.createTextNode("BlackBerry Flow");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","post-masthead-meta text-center");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4,"class","post-masthead-meta-item post-masthead-meta-item--date");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("i");
        dom.setAttribute(el5,"class","oi");
        dom.setAttribute(el5,"data-glyph","clock");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode(" ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("ul");
        dom.setAttribute(el4,"class","post-masthead-meta-item post-masthead-meta-item--tags");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("i");
        dom.setAttribute(el5,"class","oi");
        dom.setAttribute(el5,"data-glyph","tags");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        dom.setAttribute(el5,"class","post-masthead-meta-item--tag");
        var el6 = dom.createTextNode("Design Analysis");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("section");
        dom.setAttribute(el2,"class","post-section post-section--text");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","container container--sm");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","post-section-header");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h1");
        dom.setAttribute(el5,"class","post-section-header-title");
        var el6 = dom.createTextNode("Designing BlackBerry Flow");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5,"class","post-section-header-subtitle larger");
        var el6 = dom.createTextNode("A look into the design process");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4,"class","post-section-text post-section-text--lg");
        var el5 = dom.createTextNode("One of my first projects since joining the BlackBerry team as an Applications Developer at the beginning of 2014.");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4,"class","post-section-text");
        var el5 = dom.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, concat = hooks.concat, attribute = hooks.attribute, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [0]);
        var attrMorph0 = dom.createAttrMorph(element0, 'id');
        var morph0 = dom.createMorphAt(dom.childAt(element0, [1, 3, 1]),3,3);
        var morph1 = dom.createMorphAt(element0,5,5);
        attribute(env, attrMorph0, element0, "id", concat(env, ["article-", get(env, context, "model.id")]));
        content(env, morph0, context, "model.date");
        content(env, morph1, context, "outlet");
        return fragment;
      }
    };
  }()));

});
define('karel/pods/post/design-analysis-zazzle-maker/route', ['exports', 'ember', 'karel/mixins/reset-scroll'], function (exports, Ember, resetScroll) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend(resetScroll['default'], {
    titleToken: "Design Analysis: Zazzle Maker Dashboard",
    model: function model() {
      return this.store.find("post", 3);
    }
  });

});
define('karel/pods/post/design-analysis-zazzle-maker/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.0-beta.5",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("article");
        dom.setAttribute(el1,"class","article--zazzle");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("section");
        dom.setAttribute(el2,"class","post-section--masthead text-center");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h1");
        dom.setAttribute(el3,"class","post-masthead-title");
        var el4 = dom.createTextNode("Zazzle Maker Dashboard");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","post-masthead-meta text-center");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4,"class","post-masthead-meta-item post-masthead-meta-item--date");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("i");
        dom.setAttribute(el5,"class","oi");
        dom.setAttribute(el5,"data-glyph","clock");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode(" ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("ul");
        dom.setAttribute(el4,"class","post-masthead-meta-item post-masthead-meta-item--tags");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("i");
        dom.setAttribute(el5,"class","oi");
        dom.setAttribute(el5,"data-glyph","tags");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        dom.setAttribute(el5,"class","post-masthead-meta-item--tag");
        var el6 = dom.createTextNode("Design Analysis");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","post-masthead-overlay");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("section");
        dom.setAttribute(el2,"class","post-section post-section--text");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","container container--sm");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","post-section-header");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h1");
        dom.setAttribute(el5,"class","post-section-header-title");
        var el6 = dom.createTextNode("Designing Zazzle's Maker Dashboard");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5,"class","post-section-header-subtitle larger");
        var el6 = dom.createTextNode("A look into the design process.");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4,"class","post-section-text larger");
        var el5 = dom.createTextNode("One of my first projects since ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5,"href","");
        var el6 = dom.createTextNode("joining the Zazzle team as a Product Manager Intern");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode(" in January, I joined a couple months after the initial launch of the Maker Dashboard.");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4,"class","post-section-text");
        var el5 = dom.createTextNode("Zazzle began its quest to enable all people of varying ages and skills to create designs and make money off of its products in ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("section");
        dom.setAttribute(el2,"class","post-section post-section--text");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","container container--sm");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","post-section-header");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h1");
        dom.setAttribute(el5,"class","post-section-header-title");
        var el6 = dom.createTextNode("What is the Maker Dashboard?");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5,"class","post-section-header-subtitle larger");
        var el6 = dom.createTextNode("A self-serve platform that allow Makers to manage and conduct their businesses.");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4,"class","post-section-text larger");
        var el5 = dom.createTextNode("The Maker Dashboard serves as the one stop shop for Makers to run their business, manage their products and orders, and view reports to help them improve sales and make informed decisions.");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4,"class","post-section-text");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4,"class","post-section-text");
        var el5 = dom.createTextNode("As a fresh hire, I had the opportunity to review the product from the perspective of someone who had never seen or used the Maker dashboard before. This allowed me to contribute feedback and give insight that existing PMs and members of the Product Design team may have missed after having become familiar with design of the product and its objectives.");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("section");
        dom.setAttribute(el2,"class","post-section post-section--text");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","container container--sm");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","post-section-header");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h1");
        dom.setAttribute(el5,"class","post-section-header-title");
        var el6 = dom.createTextNode("MVP");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5,"class","post-section-header-subtitle larger");
        var el6 = dom.createTextNode("What it started as.");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4,"class","post-section-text");
        var el5 = dom.createTextNode("The Maker Dashboard had to onboard new Makers and guide them through a process that they have never experienced before on both Zazzle or anywhere else on the internet. As a platform, Zazzle enables Makers to post endlessly customizable products for sale. The difficult part is designing this process to make it easy to learn, yet powerful to enable Makers to customize anything.");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4,"class","post-section-text");
        var el5 = dom.createTextNode("My responsibility was to surface information that would be useful to the Maker as soon as they log in. This led to countless questions that would eventually define the scope of the dashboard and its feature set.");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("ul");
        dom.setAttribute(el4,"class","list");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createTextNode("What information would be valuable to the user and what wouldn't be?");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createTextNode("How should this information be displayed?");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createTextNode("How much information should we show?");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4,"class","post-section-text");
        var el5 = dom.createTextNode("These questions along with finer details needed to be addressed as designs were created and features were planned for.");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("section");
        dom.setAttribute(el2,"class","post-section post-section--image");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("img");
        dom.setAttribute(el3,"src","http://cdn.freakdesign.com.au.s3.amazonaws.com/i/shopifyjs-freakdesign.png");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("section");
        dom.setAttribute(el2,"class","post-section post-section--text");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","container container--sm");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","post-section-header");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h1");
        dom.setAttribute(el5,"class","post-section-header-title");
        var el6 = dom.createTextNode("Research and Usability Testing");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4,"class","post-section-text larger");
        var el5 = dom.createTextNode("The design decisions made throughout the project were informed by conducting usability studies and through the analysis of copious amounts of data.");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4,"class","post-section-text");
        var el5 = dom.createTextNode("multiple sources. The most prominent being usability testing with real users (or Makers) who earn a living through the Maker platform on Zazzle. Coupled with research, competitive analysis, and copious amounts of data, this all allowed us to iterate quickly through several designs and prototypes.");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h2");
        dom.setAttribute(el4,"class","post-section-title");
        var el5 = dom.createTextNode("Things Learned");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4,"class","post-section-text");
        var el5 = dom.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("section");
        dom.setAttribute(el2,"class","post-section post-section--text");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","container container--sm");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","post-section-header");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h1");
        dom.setAttribute(el5,"class","post-section-header-title");
        var el6 = dom.createTextNode("Iteration #1");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4,"class","post-section-text");
        var el5 = dom.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h2");
        dom.setAttribute(el4,"class","post-section-title");
        var el5 = dom.createTextNode("Concerns");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4,"class","post-section-text");
        var el5 = dom.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h2");
        dom.setAttribute(el4,"class","post-section-title");
        var el5 = dom.createTextNode("Fixes");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4,"class","post-section-text");
        var el5 = dom.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("section");
        dom.setAttribute(el2,"class","post-section post-section--text");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","container container--sm");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","post-section-header");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h1");
        dom.setAttribute(el5,"class","post-section-header-title");
        var el6 = dom.createTextNode("Iteration #2");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4,"class","post-section-text");
        var el5 = dom.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h2");
        dom.setAttribute(el4,"class","post-section-title");
        var el5 = dom.createTextNode("Concerns");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4,"class","post-section-text");
        var el5 = dom.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h2");
        dom.setAttribute(el4,"class","post-section-title");
        var el5 = dom.createTextNode("Fixes");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4,"class","post-section-text");
        var el5 = dom.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("section");
        dom.setAttribute(el2,"class","post-section post-section--text");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","container container--sm");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","post-section-header");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h1");
        dom.setAttribute(el5,"class","post-section-header-title");
        var el6 = dom.createTextNode("Iteration #3");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4,"class","post-section-text");
        var el5 = dom.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h2");
        dom.setAttribute(el4,"class","post-section-title");
        var el5 = dom.createTextNode("Concerns");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4,"class","post-section-text");
        var el5 = dom.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h2");
        dom.setAttribute(el4,"class","post-section-title");
        var el5 = dom.createTextNode("Fixes");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4,"class","post-section-text");
        var el5 = dom.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("section");
        dom.setAttribute(el2,"class","post-section post-section--text");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","container container--sm");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","post-section-header");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h1");
        dom.setAttribute(el5,"class","post-section-header-title");
        var el6 = dom.createTextNode("Fit and Finish");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4,"class","post-section-text");
        var el5 = dom.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, concat = hooks.concat, attribute = hooks.attribute, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [0]);
        var attrMorph0 = dom.createAttrMorph(element0, 'id');
        var morph0 = dom.createMorphAt(dom.childAt(element0, [1, 3, 1]),3,3);
        var morph1 = dom.createMorphAt(element0,21,21);
        attribute(env, attrMorph0, element0, "id", concat(env, ["article-", get(env, context, "model.id")]));
        content(env, morph0, context, "model.date");
        content(env, morph1, context, "outlet");
        return fragment;
      }
    };
  }()));

});
define('karel/pods/post/design-analysis-zazzle-settings/route', ['exports', 'ember', 'karel/mixins/reset-scroll'], function (exports, Ember, resetScroll) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend(resetScroll['default'], {
    titleToken: "Design Analysis: Zazzle.com Settings",
    model: function model() {
      return this.store.find("post", 2);
    }
  });

});
define('karel/pods/post/design-analysis-zazzle-settings/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0-beta.5",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Zazzle Maker Dashboard");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.0-beta.5",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("article");
        dom.setAttribute(el1,"class","article--zazzle");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("section");
        dom.setAttribute(el2,"class","post-section--masthead text-center");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h1");
        dom.setAttribute(el3,"class","post-masthead-title");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","post-masthead-meta text-center");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4,"class","post-masthead-meta-item post-masthead-meta-item--date");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("i");
        dom.setAttribute(el5,"class","oi");
        dom.setAttribute(el5,"data-glyph","clock");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode(" ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("ul");
        dom.setAttribute(el4,"class","post-masthead-meta-item post-masthead-meta-item--tags");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("i");
        dom.setAttribute(el5,"class","oi");
        dom.setAttribute(el5,"data-glyph","tags");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        dom.setAttribute(el5,"class","post-masthead-meta-item--tag");
        var el6 = dom.createTextNode("Design Analysis");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","post-masthead-overlay");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("section");
        dom.setAttribute(el2,"class","post-section post-section--text");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","container container--sm");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","post-section-header");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h1");
        dom.setAttribute(el5,"class","post-section-header-title");
        var el6 = dom.createTextNode("Designing Zazzle.com Settings");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5,"class","post-section-header-blurb larger");
        var el6 = dom.createTextNode("A look into the design process.");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4,"class","post-section-text larger");
        var el5 = dom.createTextNode("As my second project since ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5,"href","");
        var el6 = dom.createTextNode("joining the Zazzle team as a Product Manager Intern");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode(" in January, I was tasked with redesigning the settings pages on Zazzle.com.");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4,"class","post-section-text");
        var el5 = dom.createTextNode("With a number of exciting initiatives ongoing within Zazzle, I took on the job of redesigning what some could consider to be the least exciting of pages on Zazzle.com. This is far from the truth. While not forward facing, the settings pages play a key role on Zazzle.com. Any changes that need to be made to a user's profile and account settings, or a store owner's products, payment information, and tax settings are controlled on these pages. It is here where users provide both public and sensitive information to us");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4,"class","post-section-text");
        var el5 = dom.createElement("strong");
        var el6 = dom.createTextNode("Like with the ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(", I took on the duo role of both a product designer and product manager.");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode(" I was responsible for the creation of all designs, mockups, and wireframes, and also managed development for the implementation of the settings pages.");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("section");
        dom.setAttribute(el2,"class","post-section post-section--text");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","container container--sm");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","post-section-header");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h1");
        dom.setAttribute(el5,"class","post-section-header-title");
        var el6 = dom.createTextNode("Objectives");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5,"class","post-section-header-blurb larger");
        var el6 = dom.createTextNode("The goal was to make modifying your settings a breeze.");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4,"class","post-section-text larger");
        var el5 = dom.createTextNode("We wanted the pages to be more usable, visually appealing, and complementary to the new design.");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4,"class","post-section-text");
        var el5 = dom.createTextNode("We wanted the experience of moving from the profile to modifying your profile to be seamless and uninterrupted. ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("section");
        dom.setAttribute(el2,"class","post-section post-section--text");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","container container--sm");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","post-section-header");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h1");
        dom.setAttribute(el5,"class","post-section-header-title");
        var el6 = dom.createTextNode("Initial State");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5,"class","post-section-header-blurb larger");
        var el6 = dom.createTextNode("What it looks like now.");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h2");
        dom.setAttribute(el4,"class","post-section-title");
        var el5 = dom.createTextNode("Accessibility");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4,"class","post-section-text");
        var el5 = dom.createTextNode("Getting to the Settings was done by hovering over your icon in the header and clicking My Accounts or Edit Profile. Modifying your profile on a different page may lead to some confusion as you are no longer on the page you are editing. Sites like Facebook and Houzz address this by allowing users to edit their information from directly on the profile.");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h2");
        dom.setAttribute(el4,"class","post-section-title");
        var el5 = dom.createTextNode("Navigation");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4,"class","post-section-text");
        var el5 = dom.createTextNode("In its current state, getting around in the settings is difficult. There is a lack of hierarchy that makes sense. Elements sit on the same level when they are a child of a parent. The navigation boils down to a horizontal navigation bar and a side panel.");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("section");
        dom.setAttribute(el2,"class","post-section post-section--image post-section--image--sm");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","container");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("figure");
        dom.setAttribute(el4,"class","post-section-figure");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5,"class","post-section-figure-image");
        dom.setAttribute(el5,"src","/assets/images/posts/design-analysis-zazzle-maker/initial-nav-horz.jpg");
        dom.setAttribute(el5,"alt","");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("section");
        dom.setAttribute(el2,"class","post-section post-section--text");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","container container--sm");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h3");
        dom.setAttribute(el4,"class","post-section-subtitle");
        var el5 = dom.createTextNode("Horizontal Navigation Bar");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4,"class","post-section-text");
        var el5 = dom.createTextNode("This is some text...");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h2");
        dom.setAttribute(el4,"class","post-section-title");
        var el5 = dom.createTextNode("Sections");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4,"class","post-section-text");
        var el5 = dom.createTextNode("This is some text...");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("section");
        dom.setAttribute(el2,"class","post-section post-section--text");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","container container--sm");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","post-section-header");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h1");
        dom.setAttribute(el5,"class","post-section-header-title");
        var el6 = dom.createTextNode("Research and Usability Testing");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5,"class","post-section-header-blurb larger");
        var el6 = dom.createTextNode("A little research goes a long way.");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4,"class","post-section-text larger");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4,"class","post-section-text");
        var el5 = dom.createTextNode("We had a bunch of questions like:");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("ul");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createTextNode("What do users love and what do they dislike about editing their profile or managing their account settings?");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createTextNode("What are our competitors doing?");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createTextNode("What are the current design trends these days for editing a profile or managing account settings?");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h2");
        dom.setAttribute(el4,"class","post-section-title");
        var el5 = dom.createTextNode("Test");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4,"class","post-section-text");
        var el5 = dom.createTextNode("...");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h2");
        dom.setAttribute(el4,"class","post-section-title");
        var el5 = dom.createTextNode("Findings");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4,"class","post-section-text");
        var el5 = dom.createTextNode("...");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("section");
        dom.setAttribute(el2,"class","post-section post-section--text");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","container container--sm");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","post-section-header");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h1");
        dom.setAttribute(el5,"class","post-section-header-title");
        var el6 = dom.createTextNode("Guiding Principles");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5,"class","post-section-header-blurb larger");
        var el6 = dom.createTextNode("It is always prudent to go into something with a plan.");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4,"class","post-section-text larger");
        var el5 = dom.createTextNode("Before I began, I set some guiding principles which were used to steer the decision making behind the design.");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4,"class","post-section-text");
        var el5 = dom.createTextNode("At a high level, I knew what the goals of the company were at the time. Within the scope of the project, it was important that we moved in parallel with other ongoing projects at the time. What this meant was that the settings pages needed to work together with other projects that affected the site. However other projects moved and weaved, the settings pages would have to move with it.");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h2");
        dom.setAttribute(el4,"class","post-section-title");
        var el5 = dom.createTextNode("Simplicity");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4,"class","post-section-text");
        var el5 = dom.createTextNode("Blah, blah, blah...");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h2");
        dom.setAttribute(el4,"class","post-section-title");
        var el5 = dom.createTextNode("Complement the New Design");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4,"class","post-section-text");
        var el5 = dom.createTextNode("Designing an experience that is familiar and makes sense to the user is paramount. Consistency is key.");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h2");
        dom.setAttribute(el4,"class","post-section-title");
        var el5 = dom.createTextNode("Respect the Past");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4,"class","post-section-text");
        var el5 = dom.createTextNode("An issue that commonly arises when redesigning a widely used platform is the need to help current users . You need to strike a balance between giving the users something completely new and bringing users over into the new design in an elegant fashion.");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h2");
        dom.setAttribute(el4,"class","post-section-title");
        var el5 = dom.createTextNode("Add More Structure");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4,"class","post-section-text");
        var el5 = dom.createTextNode("Blah, blah, blah...");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("section");
        dom.setAttribute(el2,"class","post-section post-section--text");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","container container--sm");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","post-section-header");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h1");
        dom.setAttribute(el5,"class","post-section-header-title");
        var el6 = dom.createTextNode("Proposition");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5,"class","post-section-header-blurb larger");
        var el6 = dom.createTextNode("How it can be improved.");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4,"class","post-section-text larger");
        var el5 = dom.createTextNode("This is some leading text. It appears bigger than the body text because it is meant to stand out!");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h2");
        dom.setAttribute(el4,"class","post-section-title");
        var el5 = dom.createTextNode("Normalizing Navigation");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4,"class","post-section-text");
        var el5 = dom.createTextNode("A superset of the next items to improve, the navigation for the settings page");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h2");
        dom.setAttribute(el4,"class","post-section-title");
        var el5 = dom.createTextNode("Improving Accessibility");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4,"class","post-section-text bold");
        var el5 = dom.createTextNode("Enable the user to quickly switch between member settings to their store settings in a single click.");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4,"class","post-section-text");
        var el5 = dom.createTextNode("Also ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h2");
        dom.setAttribute(el4,"class","post-section-title");
        var el5 = dom.createTextNode("Logical Groupings");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4,"class","post-section-text");
        var el5 = dom.createTextNode("This is some text...");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("section");
        dom.setAttribute(el2,"class","post-section post-section--text");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","container container--sm");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","post-section-header");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h1");
        dom.setAttribute(el5,"class","post-section-header-title");
        var el6 = dom.createTextNode("Feedback");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5,"class","post-section-header-blurb larger");
        var el6 = dom.createTextNode("How it can be improved.");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4,"class","post-section-text larger");
        var el5 = dom.createTextNode("Once functional prototypes were finalized, we had to see if we were on the right track.");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4,"class","post-section-text");
        var el5 = dom.createTextNode("It is never wise to accept that your designs are perfect. With design comes iteration and it is important to realize that. Throughout the entire design process, tools like , , and ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5,"href","http://www.invisionapp.com/");
        var el6 = dom.createTextNode("Invision");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode(" were continously used to present the designs and receive feedback. All Zazzle employees had access to this particular project in Basecamp and were free to view, comment, and provide their feedback on the designs as they were created. As new feedback was received, these were taken with a grain of salt and some decisions were made.");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("section");
        dom.setAttribute(el2,"class","post-section post-section--text");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","container container--sm");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","post-section-header");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h1");
        dom.setAttribute(el5,"class","post-section-header-title");
        var el6 = dom.createTextNode("Tools and Software Used");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5,"class","post-section-header-blurb larger");
        var el6 = dom.createTextNode("For design, development, and project management.");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4,"class","post-section-text");
        var el5 = dom.createTextNode("There are countless tools out there that are used by different companies and different people. Personally, I am always curious as to what others are using when they go about working on a project. So, here is a list of things I used while working on Zazzle.com Settings!");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h2");
        dom.setAttribute(el4,"class","post-section-title");
        var el5 = dom.createTextNode("Design");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("ul");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createElement("a");
        dom.setAttribute(el6,"href","http://bohemiancoding.com/sketch/");
        dom.setAttribute(el6,"target","_blank");
        var el7 = dom.createTextNode("Sketch");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createElement("a");
        dom.setAttribute(el6,"href","http://www.adobe.com/products/photoshop.html");
        dom.setAttribute(el6,"target","_blank");
        var el7 = dom.createTextNode("Adobe Photoshop CC");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h2");
        dom.setAttribute(el4,"class","post-section-title");
        var el5 = dom.createTextNode("Project Management");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("ul");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createElement("a");
        dom.setAttribute(el6,"href","http://asana.com/");
        var el7 = dom.createElement("strike");
        var el8 = dom.createTextNode("Asana");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createElement("a");
        dom.setAttribute(el6,"href","http://jira.com/");
        var el7 = dom.createTextNode("JIRA");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(": Initially, the entire company was using Asana for project management. This changed at the beginning of March when myself and two other individuals led the charge on migrating all management of engineering projects over to JIRA.");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h2");
        dom.setAttribute(el4,"class","post-section-title");
        var el5 = dom.createTextNode("Feedback");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("ul");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createElement("a");
        dom.setAttribute(el6,"href","http://basecamp.com/");
        var el7 = dom.createTextNode("Basecamp");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createElement("a");
        dom.setAttribute(el6,"href","http://www.invisionapp.com/");
        var el7 = dom.createTextNode("Invision");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createElement("a");
        dom.setAttribute(el6,"href","https://marvelapp.com/");
        var el7 = dom.createTextNode("Marvel");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("section");
        dom.setAttribute(el2,"class","post-section post-section--text");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","container container--sm");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","post-section-header");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h1");
        dom.setAttribute(el5,"class","post-section-header-title");
        var el6 = dom.createTextNode("Fit and Finish");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5,"class","post-section-header-blurb larger");
        var el6 = dom.createTextNode("sdsd");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4,"class","post-section-text larger");
        var el5 = dom.createTextNode("Once functional prototypes were finalized, we had to see if we were on the right track.");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4,"class","post-section-text");
        var el5 = dom.createTextNode(" using ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5,"href","http://bohemiancoding.com/sketch/");
        dom.setAttribute(el5,"target","_blank");
        var el6 = dom.createTextNode("Sketch");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode(" and ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5,"href","http://www.adobe.com/products/photoshop.html");
        dom.setAttribute(el5,"target","_blank");
        var el6 = dom.createTextNode("Adobe Photoshop CC");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode(", ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, concat = hooks.concat, attribute = hooks.attribute, content = hooks.content, block = hooks.block;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [1]);
        var attrMorph0 = dom.createAttrMorph(element0, 'id');
        var morph0 = dom.createMorphAt(dom.childAt(element1, [1]),0,0);
        var morph1 = dom.createMorphAt(dom.childAt(element1, [3, 1]),3,3);
        var morph2 = dom.createMorphAt(dom.childAt(element0, [3, 1, 7, 0]),1,1);
        var morph3 = dom.createMorphAt(element0,25,25);
        attribute(env, attrMorph0, element0, "id", concat(env, ["article-", get(env, context, "model.id")]));
        content(env, morph0, context, "model.title");
        content(env, morph1, context, "model.date");
        block(env, morph2, context, "link-to", ["post.design-analysis-zazzle-maker"], {}, child0, null);
        content(env, morph3, context, "outlet");
        return fragment;
      }
    };
  }()));

});
define('karel/pods/post/model', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  var Post = DS['default'].Model.extend({
    title: DS['default'].attr("string"),
    organization: DS['default'].attr("string"),
    url: DS['default'].attr("string"),
    date: DS['default'].attr("date"),
    tags: DS['default'].attr("array")
  });

  Post.reopenClass({
    FIXTURES: [{
      id: 1,
      title: "Website Redesign",
      url: "post.website-redesign",
      date: "Mar 17, 2015",
      tags: []
    }, {
      id: 2,
      title: "Zazzle.com Settings",
      url: "post.design-analysis-zazzle-settings",
      date: "Mar 20, 2015",
      tags: ["Design Analysis"]
    }, {
      id: 3,
      title: "Zazzle Maker Dashboard",
      url: "post.design-analysis-zazzle-maker",
      date: "Mar 02, 2015",
      tags: ["Design Analysis"]
    }, {
      id: 4,
      title: "BlackBerry Flow",
      url: "post.design-analysis-blackberry-flow",
      date: "Jan 05, 2015",
      tags: ["Design Analysis"]
    }]
  });

  exports['default'] = Post;

});
define('karel/pods/post/route', ['exports', 'ember', 'karel/mixins/reset-scroll'], function (exports, Ember, resetScroll) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend(resetScroll['default'], {
    titleToken: "Posts"
  });

});
define('karel/pods/post/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0-beta.5",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Back to Posts");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.0-beta.5",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","page page--post page--has-masthead");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","container text-center");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","btn-section-footer btn-group");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("style");
        dom.setAttribute(el1,"type","text/css");
        var el2 = dom.createTextNode("\n  .header--site a {\n    color: #fff;\n  }\n\n  .header--site-twitter,\n  .header--site .header--site-list-item a {\n    color: rgba(255, 255, 255, 0.9);\n  }\n\n  .header--site a:hover,\n  .header--site a:focus {\n    color: #fff;\n  }\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, content = hooks.content, block = hooks.block;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [0]);
        var morph0 = dom.createMorphAt(element0,1,1);
        var morph1 = dom.createMorphAt(dom.childAt(element0, [3, 1]),1,1);
        content(env, morph0, context, "outlet");
        block(env, morph1, context, "link-to", ["posts"], {"class": "btn"}, child0, null);
        return fragment;
      }
    };
  }()));

});
define('karel/pods/post/website-redesign/route', ['exports', 'ember', 'karel/mixins/reset-scroll'], function (exports, Ember, resetScroll) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend(resetScroll['default'], {
    titleToken: "Website Redesign",
    model: function model() {
      return this.store.find("post", 1);
    }
  });

});
define('karel/pods/post/website-redesign/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.0-beta.5",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","container");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h4");
        var el3 = dom.createTextNode("Website Redesign");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        var el3 = dom.createTextNode("I'm still working on this post. Please check back soon!");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createMorphAt(dom.childAt(fragment, [0]),5,5);
        content(env, morph0, context, "outlet");
        return fragment;
      }
    };
  }()));

});
define('karel/pods/posts/controller', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller.extend({});

});
define('karel/pods/posts/route', ['exports', 'ember', 'karel/mixins/reset-scroll'], function (exports, Ember, resetScroll) {

  'use strict';

  var PostsRoute = Ember['default'].Route.extend(resetScroll['default'], {
    titleToken: "Posts",
    model: function model() {
      return {
        posts: this.store.all("post"),
        answers: this.store.all("post-answer"),
        articles: this.store.all("post-article")
      };
    }
  });

  exports['default'] = PostsRoute;

});
define('karel/pods/posts/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0-beta.5",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("karel.ca");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child1 = (function() {
      var child0 = (function() {
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.0-beta.5",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, content = hooks.content;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
            dom.insertBoundary(fragment, null);
            dom.insertBoundary(fragment, 0);
            content(env, morph0, context, "post.title");
            return fragment;
          }
        };
      }());
      var child1 = (function() {
        var child0 = (function() {
          return {
            isHTMLBars: true,
            revision: "Ember@1.11.0-beta.5",
            blockParams: 0,
            cachedFragment: null,
            hasRendered: false,
            build: function build(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("              ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("strong");
              dom.setAttribute(el1,"class","post-list-item-tag");
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            render: function render(context, env, contextualElement) {
              var dom = env.dom;
              var hooks = env.hooks, content = hooks.content;
              dom.detectNamespace(contextualElement);
              var fragment;
              if (env.useFragmentCache && dom.canClone) {
                if (this.cachedFragment === null) {
                  fragment = this.build(dom);
                  if (this.hasRendered) {
                    this.cachedFragment = fragment;
                  } else {
                    this.hasRendered = true;
                  }
                }
                if (this.cachedFragment) {
                  fragment = dom.cloneNode(this.cachedFragment, true);
                }
              } else {
                fragment = this.build(dom);
              }
              var morph0 = dom.createMorphAt(dom.childAt(fragment, [1]),0,0);
              content(env, morph0, context, "tag");
              return fragment;
            }
          };
        }());
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.0-beta.5",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1,"class","post-list-item-tags pull-left");
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("            ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, get = hooks.get, block = hooks.block;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createMorphAt(dom.childAt(fragment, [1]),1,1);
            block(env, morph0, context, "each", [get(env, context, "post.tags")], {"keyword": "tag"}, child0, null);
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0-beta.5",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          dom.setAttribute(el1,"class","post-list-item row");
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","post-list-item-meta");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          dom.setAttribute(el3,"class","post-list-item-date pull-left");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, get = hooks.get, block = hooks.block, content = hooks.content;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var element6 = dom.childAt(fragment, [1]);
          var element7 = dom.childAt(element6, [3]);
          var morph0 = dom.createMorphAt(element6,1,1);
          var morph1 = dom.createMorphAt(element7,1,1);
          var morph2 = dom.createMorphAt(dom.childAt(element7, [3]),0,0);
          block(env, morph0, context, "link-to", [get(env, context, "post.url")], {"class": "post-list-item-title pull-left"}, child0, null);
          block(env, morph1, context, "if", [get(env, context, "post.tags")], {}, child1, null);
          content(env, morph2, context, "post.date");
          return fragment;
        }
      };
    }());
    var child2 = (function() {
      var child0 = (function() {
        var child0 = (function() {
          return {
            isHTMLBars: true,
            revision: "Ember@1.11.0-beta.5",
            blockParams: 0,
            cachedFragment: null,
            hasRendered: false,
            build: function build(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("              ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("strong");
              dom.setAttribute(el1,"class","post-list-item-tag");
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            render: function render(context, env, contextualElement) {
              var dom = env.dom;
              var hooks = env.hooks, content = hooks.content;
              dom.detectNamespace(contextualElement);
              var fragment;
              if (env.useFragmentCache && dom.canClone) {
                if (this.cachedFragment === null) {
                  fragment = this.build(dom);
                  if (this.hasRendered) {
                    this.cachedFragment = fragment;
                  } else {
                    this.hasRendered = true;
                  }
                }
                if (this.cachedFragment) {
                  fragment = dom.cloneNode(this.cachedFragment, true);
                }
              } else {
                fragment = this.build(dom);
              }
              var morph0 = dom.createMorphAt(dom.childAt(fragment, [1]),0,0);
              content(env, morph0, context, "tag");
              return fragment;
            }
          };
        }());
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.0-beta.5",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1,"class","post-list-item-tags");
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("            ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, get = hooks.get, block = hooks.block;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createMorphAt(dom.childAt(fragment, [1]),1,1);
            block(env, morph0, context, "each", [get(env, context, "article.tags")], {"keyword": "tag"}, child0, null);
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0-beta.5",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          dom.setAttribute(el1,"class","post-list-item row");
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("a");
          dom.setAttribute(el2,"class","post-list-item-title pull-left");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","post-list-item-meta");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          dom.setAttribute(el3,"class","post-list-item-date");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, get = hooks.get, concat = hooks.concat, attribute = hooks.attribute, content = hooks.content, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var element3 = dom.childAt(fragment, [1]);
          var element4 = dom.childAt(element3, [1]);
          var element5 = dom.childAt(element3, [3]);
          var morph0 = dom.createMorphAt(element4,0,0);
          var attrMorph0 = dom.createAttrMorph(element4, 'href');
          var morph1 = dom.createMorphAt(element5,1,1);
          var morph2 = dom.createMorphAt(dom.childAt(element5, [3]),0,0);
          attribute(env, attrMorph0, element4, "href", concat(env, [get(env, context, "article.url")]));
          content(env, morph0, context, "article.title");
          block(env, morph1, context, "if", [get(env, context, "article.tags")], {}, child0, null);
          content(env, morph2, context, "article.date");
          return fragment;
        }
      };
    }());
    var child3 = (function() {
      var child0 = (function() {
        var child0 = (function() {
          return {
            isHTMLBars: true,
            revision: "Ember@1.11.0-beta.5",
            blockParams: 0,
            cachedFragment: null,
            hasRendered: false,
            build: function build(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("              ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("strong");
              dom.setAttribute(el1,"class","post-list-item-tag");
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            render: function render(context, env, contextualElement) {
              var dom = env.dom;
              var hooks = env.hooks, content = hooks.content;
              dom.detectNamespace(contextualElement);
              var fragment;
              if (env.useFragmentCache && dom.canClone) {
                if (this.cachedFragment === null) {
                  fragment = this.build(dom);
                  if (this.hasRendered) {
                    this.cachedFragment = fragment;
                  } else {
                    this.hasRendered = true;
                  }
                }
                if (this.cachedFragment) {
                  fragment = dom.cloneNode(this.cachedFragment, true);
                }
              } else {
                fragment = this.build(dom);
              }
              var morph0 = dom.createMorphAt(dom.childAt(fragment, [1]),0,0);
              content(env, morph0, context, "tag");
              return fragment;
            }
          };
        }());
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.0-beta.5",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1,"class","post-list-item-tags pull-left");
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("            ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, get = hooks.get, block = hooks.block;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createMorphAt(dom.childAt(fragment, [1]),1,1);
            block(env, morph0, context, "each", [get(env, context, "article.tags")], {"keyword": "tag"}, child0, null);
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0-beta.5",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          dom.setAttribute(el1,"class","post-list-item row");
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("a");
          dom.setAttribute(el2,"class","post-list-item-title pull-left");
          var el3 = dom.createElement("strong");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode(" - ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","post-list-item-meta");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          dom.setAttribute(el3,"class","post-list-item-date pull-left");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, get = hooks.get, concat = hooks.concat, attribute = hooks.attribute, content = hooks.content, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var element0 = dom.childAt(fragment, [1]);
          var element1 = dom.childAt(element0, [1]);
          var element2 = dom.childAt(element0, [3]);
          var attrMorph0 = dom.createAttrMorph(element1, 'href');
          var morph0 = dom.createMorphAt(dom.childAt(element1, [0]),0,0);
          var morph1 = dom.createMorphAt(element1,2,2);
          var morph2 = dom.createMorphAt(element2,1,1);
          var morph3 = dom.createMorphAt(dom.childAt(element2, [3]),0,0);
          attribute(env, attrMorph0, element1, "href", concat(env, [get(env, context, "article.url")]));
          content(env, morph0, context, "article.organization");
          content(env, morph1, context, "article.title");
          block(env, morph2, context, "if", [get(env, context, "article.tags")], {}, child0, null);
          content(env, morph3, context, "article.date");
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.0-beta.5",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","page page--posts");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","container");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","sub-section");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h4");
        dom.setAttribute(el4,"class","text-center");
        var el5 = dom.createTextNode("Written by Me");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("ul");
        dom.setAttribute(el4,"class","post-list");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h5");
        dom.setAttribute(el5,"class","post-list-heading");
        var el6 = dom.createTextNode("Posts on ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("ul");
        dom.setAttribute(el4,"class","post-list");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h5");
        dom.setAttribute(el5,"class","post-list-heading");
        var el6 = dom.createTextNode("Answers on ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6,"href","https://quora.com/Karel-Vuong");
        var el7 = dom.createTextNode("Quora");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5,"class","post-list-text");
        var el6 = dom.createTextNode("Question titles may have been shortened and rephrased.");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","sub-section");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h4");
        dom.setAttribute(el4,"class","text-center");
        var el5 = dom.createTextNode("Written by Others");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("ul");
        dom.setAttribute(el4,"class","post-list");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, block = hooks.block, get = hooks.get, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element8 = dom.childAt(fragment, [0]);
        var element9 = dom.childAt(element8, [1]);
        var element10 = dom.childAt(element9, [1]);
        var element11 = dom.childAt(element10, [3]);
        var morph0 = dom.createMorphAt(dom.childAt(element11, [1]),1,1);
        var morph1 = dom.createMorphAt(element11,3,3);
        var morph2 = dom.createMorphAt(dom.childAt(element10, [5]),5,5);
        var morph3 = dom.createMorphAt(dom.childAt(element9, [3, 3]),1,1);
        var morph4 = dom.createMorphAt(element8,3,3);
        block(env, morph0, context, "link-to", ["posts"], {}, child0, null);
        block(env, morph1, context, "each", [get(env, context, "model.posts")], {"keyword": "post"}, child1, null);
        block(env, morph2, context, "each", [get(env, context, "model.answers")], {"keyword": "article"}, child2, null);
        block(env, morph3, context, "each", [get(env, context, "model.articles")], {"keyword": "article"}, child3, null);
        content(env, morph4, context, "outlet");
        return fragment;
      }
    };
  }()));

});
define('karel/pods/resume/controller', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	var ResumeController = Ember['default'].Controller.extend();

	exports['default'] = ResumeController;

});
define('karel/pods/resume/route', ['exports', 'ember', 'karel/mixins/reset-scroll'], function (exports, Ember, resetScroll) {

  'use strict';

  var ResumeRoute = Ember['default'].Route.extend(resetScroll['default'], {
    titleToken: "Resume"
  });

  exports['default'] = ResumeRoute;

});
define('karel/pods/resume/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.0-beta.5",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","page page--resume");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","container");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","section--masthead row");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("ul");
        dom.setAttribute(el4,"class","masthead-list text-center");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h4");
        var el6 = dom.createTextNode("Karel Vuong");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createElement("a");
        dom.setAttribute(el6,"href","mailto:karel.vuong@utoronto.ca");
        var el7 = dom.createTextNode("Email");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createElement("a");
        dom.setAttribute(el6,"href","https://github.com/karelvuong");
        var el7 = dom.createTextNode("GitHub");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createElement("a");
        dom.setAttribute(el6,"href","https://linkedin.com/in/karelvuong");
        var el7 = dom.createTextNode("LinkedIn");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createElement("a");
        dom.setAttribute(el6,"href","https://twitter.com/karelvuong");
        var el7 = dom.createTextNode("Twitter");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","row");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","resume-column-left col-md-6");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","resume-section");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"class","resume-section-header");
        var el7 = dom.createTextNode("Experience");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"class","resume-section-body");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7,"class","resume-item");
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"class","resume-item-header row");
        var el9 = dom.createTextNode("\n                ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("div");
        dom.setAttribute(el9,"class","resume-item-header-left pull-left");
        var el10 = dom.createTextNode("\n                  ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("h1");
        dom.setAttribute(el10,"class","resume-item-position");
        var el11 = dom.createTextNode("Product Manager Intern");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                  ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("p");
        dom.setAttribute(el10,"class","resume-item-company");
        var el11 = dom.createElement("strong");
        var el12 = dom.createTextNode("Zazzle");
        dom.appendChild(el11, el12);
        dom.appendChild(el10, el11);
        var el11 = dom.createTextNode(" | Redwood City, CA");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                  ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("p");
        dom.setAttribute(el10,"class","resume-item-date");
        var el11 = dom.createElement("span");
        var el12 = dom.createTextNode("January 2015");
        dom.appendChild(el11, el12);
        dom.appendChild(el10, el11);
        var el11 = dom.createTextNode(" — ");
        dom.appendChild(el10, el11);
        var el11 = dom.createElement("span");
        var el12 = dom.createTextNode("Present");
        dom.appendChild(el11, el12);
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n              ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"class","resume-item-body");
        var el9 = dom.createTextNode("\n                ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("ul");
        dom.setAttribute(el9,"class","resume-item-details");
        var el10 = dom.createTextNode("\n                  ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("li");
        var el11 = dom.createTextNode("Owned implementation of the design of the ");
        dom.appendChild(el10, el11);
        var el11 = dom.createElement("a");
        dom.setAttribute(el11,"href","http://maker.zazzle.com");
        dom.setAttribute(el11,"target","_blank");
        var el12 = dom.createTextNode("Maker Dashboard");
        dom.appendChild(el11, el12);
        dom.appendChild(el10, el11);
        var el11 = dom.createTextNode(" through the creation of mockups and management of the product life cycle");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                  ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("li");
        var el11 = dom.createTextNode("Managed redesign of all settings and configuration pages on ");
        dom.appendChild(el10, el11);
        var el11 = dom.createElement("a");
        dom.setAttribute(el11,"href","http://zazzle.com");
        dom.setAttribute(el11,"target","_blank");
        var el12 = dom.createTextNode("www.zazzle.com");
        dom.appendChild(el11, el12);
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                  ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("li");
        var el11 = dom.createTextNode("Drove initiative to migrate from Asana to JIRA, moving the entire company to the new platform within a week with minimal work disruption");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n              ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7,"class","resume-item");
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"class","resume-item-header row");
        var el9 = dom.createTextNode("\n                ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("div");
        dom.setAttribute(el9,"class","resume-item-header-left pull-left");
        var el10 = dom.createTextNode("\n                  ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("h1");
        dom.setAttribute(el10,"class","resume-item-position");
        var el11 = dom.createTextNode("Product Manager Intern");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                  ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("p");
        dom.setAttribute(el10,"class","resume-item-company");
        var el11 = dom.createElement("strong");
        var el12 = dom.createTextNode("BlackBerry");
        dom.appendChild(el11, el12);
        dom.appendChild(el10, el11);
        var el11 = dom.createTextNode(" | Waterloo, ON");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                  ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("p");
        dom.setAttribute(el10,"class","resume-item-date");
        var el11 = dom.createElement("span");
        var el12 = dom.createTextNode("July 2014");
        dom.appendChild(el11, el12);
        dom.appendChild(el10, el11);
        var el11 = dom.createTextNode(" — ");
        dom.appendChild(el10, el11);
        var el11 = dom.createElement("span");
        var el12 = dom.createTextNode("December 2014");
        dom.appendChild(el11, el12);
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n              ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"class","resume-item-body");
        var el9 = dom.createTextNode("\n                ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("ul");
        dom.setAttribute(el9,"class","resume-item-details");
        var el10 = dom.createTextNode("\n                  ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("li");
        var el11 = dom.createTextNode("Led efforts for a rebuild of the business process management and modeling platform used by over 3,000 active employees; AngularJS, Python, MongoDB, and Oracle");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                  ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("li");
        var el11 = dom.createTextNode("Initiated Lean Six Sigma Green Belt project to redesign and improve processes for marketing, manufacturing, reliability, and software development organizations");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n              ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7,"class","resume-item");
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"class","resume-item-header row");
        var el9 = dom.createTextNode("\n                ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("div");
        dom.setAttribute(el9,"class","resume-item-header-info pull-left");
        var el10 = dom.createTextNode("\n                  ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("h1");
        dom.setAttribute(el10,"class","resume-item-position");
        var el11 = dom.createTextNode("Applications Developer Intern");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                  ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("p");
        dom.setAttribute(el10,"class","resume-item-company");
        var el11 = dom.createElement("strong");
        var el12 = dom.createTextNode("BlackBerry");
        dom.appendChild(el11, el12);
        dom.appendChild(el10, el11);
        var el11 = dom.createTextNode(" | Waterloo, ON");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                  ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("p");
        dom.setAttribute(el10,"class","resume-item-date");
        var el11 = dom.createElement("span");
        var el12 = dom.createTextNode("January 2014");
        dom.appendChild(el11, el12);
        dom.appendChild(el10, el11);
        var el11 = dom.createTextNode(" — ");
        dom.appendChild(el10, el11);
        var el11 = dom.createElement("span");
        var el12 = dom.createTextNode("July 2014");
        dom.appendChild(el11, el12);
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n              ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"class","resume-item-body");
        var el9 = dom.createTextNode("\n                ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("ul");
        dom.setAttribute(el9,"class","resume-item-details");
        var el10 = dom.createTextNode("\n                  ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("li");
        var el11 = dom.createTextNode("Developed administrative tool to enable internal platform customers to perform self-serve support, reducing ticket resolution time from 3-7 days to less than 24 hours; Python, AngularJS");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n              ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7,"class","resume-item");
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"class","resume-item-header row");
        var el9 = dom.createTextNode("\n                ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("div");
        dom.setAttribute(el9,"class","resume-item-header-info pull-left");
        var el10 = dom.createTextNode("\n                  ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("h1");
        dom.setAttribute(el10,"class","resume-item-position");
        var el11 = dom.createTextNode("Consultant");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                  ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("p");
        dom.setAttribute(el10,"class","resume-item-company");
        var el11 = dom.createElement("strong");
        var el12 = dom.createTextNode("Innovitas");
        dom.appendChild(el11, el12);
        dom.appendChild(el10, el11);
        var el11 = dom.createTextNode(" | Toronto, ON");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                  ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("p");
        dom.setAttribute(el10,"class","resume-item-date");
        var el11 = dom.createElement("span");
        var el12 = dom.createTextNode("July 2014");
        dom.appendChild(el11, el12);
        dom.appendChild(el10, el11);
        var el11 = dom.createTextNode(" — ");
        dom.appendChild(el10, el11);
        var el11 = dom.createElement("span");
        var el12 = dom.createTextNode("January 2015");
        dom.appendChild(el11, el12);
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n              ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"class","resume-item-body");
        var el9 = dom.createTextNode("\n                ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("div");
        dom.setAttribute(el9,"class","resume-item-details");
        var el10 = dom.createTextNode("\n                  ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("div");
        dom.setAttribute(el10,"class","resume-item-sub-details");
        var el11 = dom.createTextNode("\n                    ");
        dom.appendChild(el10, el11);
        var el11 = dom.createElement("p");
        dom.setAttribute(el11,"class","resume-item-details-list-heading");
        var el12 = dom.createElement("strong");
        var el13 = dom.createTextNode("Toronto Youth Cabinet");
        dom.appendChild(el12, el13);
        dom.appendChild(el11, el12);
        var el12 = dom.createTextNode(" (July 2014 — January 2015):");
        dom.appendChild(el11, el12);
        dom.appendChild(el10, el11);
        var el11 = dom.createTextNode("\n                    ");
        dom.appendChild(el10, el11);
        var el11 = dom.createElement("ul");
        var el12 = dom.createTextNode("\n                      ");
        dom.appendChild(el11, el12);
        var el12 = dom.createElement("li");
        var el13 = dom.createTextNode("Launched rebranding campaign by designing new logo, styleguide, and design material");
        dom.appendChild(el12, el13);
        dom.appendChild(el11, el12);
        var el12 = dom.createTextNode("\n                      ");
        dom.appendChild(el11, el12);
        var el12 = dom.createElement("li");
        var el13 = dom.createElement("a");
        dom.setAttribute(el13,"href","http://thetyc.ca");
        var el14 = dom.createTextNode("Website");
        dom.appendChild(el13, el14);
        dom.appendChild(el12, el13);
        var el13 = dom.createTextNode(": Developed website for the official youth advisory body to the Toronto's city council; PHP, MySQL");
        dom.appendChild(el12, el13);
        dom.appendChild(el11, el12);
        var el12 = dom.createTextNode("\n                    ");
        dom.appendChild(el11, el12);
        dom.appendChild(el10, el11);
        var el11 = dom.createTextNode("\n                  ");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n              ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7,"class","resume-item");
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"class","resume-item-header row");
        var el9 = dom.createTextNode("\n                ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("div");
        dom.setAttribute(el9,"class","resume-item-header-info pull-left");
        var el10 = dom.createTextNode("\n                  ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("h1");
        dom.setAttribute(el10,"class","resume-item-position");
        var el11 = dom.createTextNode("Mobile Application Developer");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                  ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("p");
        dom.setAttribute(el10,"class","resume-item-company");
        var el11 = dom.createElement("strong");
        var el12 = dom.createTextNode("Independent");
        dom.appendChild(el11, el12);
        dom.appendChild(el10, el11);
        var el11 = dom.createTextNode(" | Toronto, ON");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                  ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("p");
        dom.setAttribute(el10,"class","resume-item-date");
        var el11 = dom.createElement("span");
        var el12 = dom.createTextNode("September 2013");
        dom.appendChild(el11, el12);
        dom.appendChild(el10, el11);
        var el11 = dom.createTextNode(" — ");
        dom.appendChild(el10, el11);
        var el11 = dom.createElement("span");
        var el12 = dom.createTextNode("January 2014");
        dom.appendChild(el11, el12);
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n              ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"class","resume-item-body");
        var el9 = dom.createTextNode("\n                ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("ul");
        dom.setAttribute(el9,"class","resume-item-details");
        var el10 = dom.createTextNode("\n                  ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("li");
        var el11 = dom.createTextNode("Designed and developed apps for BlackBerry 10 using the Native SDK with the Cascades UI Framework (C++, QT/QML):");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                  ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("ul");
        dom.setAttribute(el10,"class","resume-item-sub-details");
        var el11 = dom.createTextNode("\n                    ");
        dom.appendChild(el10, el11);
        var el11 = dom.createElement("li");
        var el12 = dom.createElement("a");
        dom.setAttribute(el12,"href","http://bit.ly/karel-cella-bbw");
        var el13 = dom.createTextNode("Cella");
        dom.appendChild(el12, el13);
        dom.appendChild(el11, el12);
        var el12 = dom.createTextNode(" (BfB Certified): a home inventory management app that securely stores information of possessions in a three-tiered organizational system");
        dom.appendChild(el11, el12);
        dom.appendChild(el10, el11);
        var el11 = dom.createTextNode("\n                    ");
        dom.appendChild(el10, el11);
        var el11 = dom.createElement("li");
        var el12 = dom.createElement("a");
        dom.setAttribute(el12,"href","http://bit.ly/karel-cooler-bbw");
        var el13 = dom.createTextNode("Cooler");
        dom.appendChild(el12, el13);
        dom.appendChild(el11, el12);
        var el12 = dom.createTextNode(" (BfB Certified): an app for designers that generates color schemes and palettes through real-time color manipulation based on RGB and HSV values");
        dom.appendChild(el11, el12);
        dom.appendChild(el10, el11);
        var el11 = dom.createTextNode("\n                  ");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n              ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","resume-section");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"class","resume-section-header");
        var el7 = dom.createTextNode("Projects");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"class","resume-section-body");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7,"class","resume-item");
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"class","resume-item-header row");
        var el9 = dom.createTextNode("\n                ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("div");
        dom.setAttribute(el9,"class","resume-item-header-left pull-left");
        var el10 = dom.createTextNode("\n                  ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("h1");
        dom.setAttribute(el10,"class","resume-item-position");
        var el11 = dom.createTextNode("Chrome Extensions");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n              ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"class","resume-item-body");
        var el9 = dom.createTextNode("\n                ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("ul");
        dom.setAttribute(el9,"class","resume-item-details");
        var el10 = dom.createTextNode("\n                  ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("li");
        var el11 = dom.createElement("a");
        dom.setAttribute(el11,"href","https://github.com/karelvuong/chrome-ext-github-toolbox");
        var el12 = dom.createTextNode("GitHub Toolbox");
        dom.appendChild(el11, el12);
        dom.appendChild(el10, el11);
        var el11 = dom.createTextNode(": An extension that extends GitHub's functionality with useful tools");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n              ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7,"class","resume-item");
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"class","resume-item-header row");
        var el9 = dom.createTextNode("\n                ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("div");
        dom.setAttribute(el9,"class","resume-item-header-left pull-left");
        var el10 = dom.createTextNode("\n                  ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("h1");
        dom.setAttribute(el10,"class","resume-item-position");
        var el11 = dom.createTextNode("Themes");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n              ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"class","resume-item-body");
        var el9 = dom.createTextNode("\n                ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("div");
        dom.setAttribute(el9,"class","resume-item-details");
        var el10 = dom.createTextNode("\n                  ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("div");
        dom.setAttribute(el10,"class","resume-item-details-list");
        var el11 = dom.createTextNode("\n                    ");
        dom.appendChild(el10, el11);
        var el11 = dom.createElement("h6");
        dom.setAttribute(el11,"class","resume-item-details-list-heading");
        var el12 = dom.createTextNode("Brackets:");
        dom.appendChild(el11, el12);
        dom.appendChild(el10, el11);
        var el11 = dom.createTextNode("\n                    ");
        dom.appendChild(el10, el11);
        var el11 = dom.createElement("ul");
        var el12 = dom.createTextNode("\n                      ");
        dom.appendChild(el11, el12);
        var el12 = dom.createElement("li");
        var el13 = dom.createElement("a");
        dom.setAttribute(el13,"href","#");
        var el14 = dom.createTextNode("Fox");
        dom.appendChild(el13, el14);
        dom.appendChild(el12, el13);
        var el13 = dom.createTextNode(": A syntax theme based on Mozilla's Firefox Developer Edition");
        dom.appendChild(el12, el13);
        dom.appendChild(el11, el12);
        var el12 = dom.createTextNode("\n                    ");
        dom.appendChild(el11, el12);
        dom.appendChild(el10, el11);
        var el11 = dom.createTextNode("\n                  ");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n\n                  ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("div");
        dom.setAttribute(el10,"class","resume-item-details-list");
        var el11 = dom.createTextNode("\n                    ");
        dom.appendChild(el10, el11);
        var el11 = dom.createElement("h6");
        dom.setAttribute(el11,"class","resume-item-details-list-heading");
        var el12 = dom.createTextNode("Chrome Developer Tools:");
        dom.appendChild(el11, el12);
        dom.appendChild(el10, el11);
        var el11 = dom.createTextNode("\n                    ");
        dom.appendChild(el10, el11);
        var el11 = dom.createElement("ul");
        var el12 = dom.createTextNode("\n                      ");
        dom.appendChild(el11, el12);
        var el12 = dom.createElement("li");
        var el13 = dom.createElement("a");
        dom.setAttribute(el13,"href","https://github.com/karelvuong/devtools-chromegray--dark");
        var el14 = dom.createTextNode("Chromegray");
        dom.appendChild(el13, el14);
        dom.appendChild(el12, el13);
        var el13 = dom.createTextNode(": A theme based on the Spacegray Sublime Text UI theme");
        dom.appendChild(el12, el13);
        dom.appendChild(el11, el12);
        var el12 = dom.createTextNode("\n                    ");
        dom.appendChild(el11, el12);
        dom.appendChild(el10, el11);
        var el11 = dom.createTextNode("\n                  ");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n\n                  ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("div");
        dom.setAttribute(el10,"class","resume-item-details-list");
        var el11 = dom.createTextNode("\n                    ");
        dom.appendChild(el10, el11);
        var el11 = dom.createElement("h6");
        dom.setAttribute(el11,"class","resume-item-details-list-heading");
        var el12 = dom.createTextNode("Sublime Text:");
        dom.appendChild(el11, el12);
        dom.appendChild(el10, el11);
        var el11 = dom.createTextNode("\n                    ");
        dom.appendChild(el10, el11);
        var el11 = dom.createElement("ul");
        var el12 = dom.createTextNode("\n                      ");
        dom.appendChild(el11, el12);
        var el12 = dom.createElement("li");
        var el13 = dom.createElement("a");
        dom.setAttribute(el13,"href","https://github.com/karelvuong/st-fox");
        var el14 = dom.createTextNode("Fox");
        dom.appendChild(el13, el14);
        dom.appendChild(el12, el13);
        var el13 = dom.createTextNode(": A UI + syntax theme based on Mozilla's Firefox Developer Edition");
        dom.appendChild(el12, el13);
        dom.appendChild(el11, el12);
        var el12 = dom.createTextNode("\n                      ");
        dom.appendChild(el11, el12);
        var el12 = dom.createElement("li");
        var el13 = dom.createElement("a");
        dom.setAttribute(el13,"href","https://github.com/karelvuong/st-primer");
        var el14 = dom.createTextNode("Primer");
        dom.appendChild(el13, el14);
        dom.appendChild(el12, el13);
        var el13 = dom.createTextNode(": A UI + syntax theme inspired by GitHub's design and UI");
        dom.appendChild(el12, el13);
        dom.appendChild(el11, el12);
        var el12 = dom.createTextNode("\n                    ");
        dom.appendChild(el11, el12);
        dom.appendChild(el10, el11);
        var el11 = dom.createTextNode("\n                  ");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n\n                  ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("div");
        dom.setAttribute(el10,"class","resume-item-details-list");
        var el11 = dom.createTextNode("\n                    ");
        dom.appendChild(el10, el11);
        var el11 = dom.createElement("h6");
        dom.setAttribute(el11,"class","resume-item-details-list-heading");
        var el12 = dom.createTextNode("Terminal:");
        dom.appendChild(el11, el12);
        dom.appendChild(el10, el11);
        var el11 = dom.createTextNode("\n                    ");
        dom.appendChild(el10, el11);
        var el11 = dom.createElement("ul");
        var el12 = dom.createTextNode("\n                      ");
        dom.appendChild(el11, el12);
        var el12 = dom.createElement("li");
        var el13 = dom.createElement("a");
        dom.setAttribute(el13,"href","https://github.com/karelvuong/terminal-afterglow");
        var el14 = dom.createTextNode("Afterglow");
        dom.appendChild(el13, el14);
        dom.appendChild(el12, el13);
        var el13 = dom.createTextNode(": A theme based on the Afterglow Sublime Text UI theme");
        dom.appendChild(el12, el13);
        dom.appendChild(el11, el12);
        var el12 = dom.createTextNode("\n                      ");
        dom.appendChild(el11, el12);
        var el12 = dom.createElement("li");
        var el13 = dom.createElement("a");
        dom.setAttribute(el13,"href","https://github.com/karelvuong/terminal-spacegray");
        var el14 = dom.createTextNode("Fox");
        dom.appendChild(el13, el14);
        dom.appendChild(el12, el13);
        var el13 = dom.createTextNode(": A theme based on Mozilla's Firefox Developer Edition");
        dom.appendChild(el12, el13);
        dom.appendChild(el11, el12);
        var el12 = dom.createTextNode("\n                      ");
        dom.appendChild(el11, el12);
        var el12 = dom.createElement("li");
        var el13 = dom.createElement("a");
        dom.setAttribute(el13,"href","https://github.com/karelvuong/terminal-spacegray");
        var el14 = dom.createTextNode("Spacegray");
        dom.appendChild(el13, el14);
        dom.appendChild(el12, el13);
        var el13 = dom.createTextNode(": A theme based on the Spacegray Sublime Text UI theme");
        dom.appendChild(el12, el13);
        dom.appendChild(el11, el12);
        var el12 = dom.createTextNode("\n                    ");
        dom.appendChild(el11, el12);
        dom.appendChild(el10, el11);
        var el11 = dom.createTextNode("\n                  ");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n              ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7,"class","resume-item");
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"class","resume-item-header row");
        var el9 = dom.createTextNode("\n                ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("div");
        dom.setAttribute(el9,"class","resume-item-header-left pull-left");
        var el10 = dom.createTextNode("\n                  ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("h1");
        dom.setAttribute(el10,"class","resume-item-position");
        var el11 = dom.createTextNode("Casa");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                  ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("p");
        dom.setAttribute(el10,"class","resume-item-company");
        var el11 = dom.createElement("strong");
        var el12 = dom.createTextNode("Hack the North 2014");
        dom.appendChild(el11, el12);
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n              ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"class","resume-item-body");
        var el9 = dom.createTextNode("\n                ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("ul");
        dom.setAttribute(el9,"class","resume-item-details");
        var el10 = dom.createTextNode("\n                  ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("li");
        var el11 = dom.createTextNode("A platform that eases the subletting process for students, co-op workers, and young professionals");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n              ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7,"class","resume-item");
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"class","resume-item-header row");
        var el9 = dom.createTextNode("\n                ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("div");
        dom.setAttribute(el9,"class","resume-item-header-left pull-left");
        var el10 = dom.createTextNode("\n                  ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("h1");
        dom.setAttribute(el10,"class","resume-item-position");
        var el11 = dom.createTextNode("Curo");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                  ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("p");
        dom.setAttribute(el10,"class","resume-item-company");
        var el11 = dom.createElement("strong");
        var el12 = dom.createTextNode("RBC Royal Bank - Next Great Innovator 2014");
        dom.appendChild(el11, el12);
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                  ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("p");
        dom.setAttribute(el10,"class","resume-item-date");
        var el11 = dom.createElement("a");
        dom.setAttribute(el11,"href","https://github.com/karelvuong/zzz-curo");
        var el12 = dom.createTextNode("GitHub");
        dom.appendChild(el11, el12);
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n              ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"class","resume-item-body");
        var el9 = dom.createTextNode("\n                ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("ul");
        dom.setAttribute(el9,"class","resume-item-details");
        var el10 = dom.createTextNode("\n                  ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("li");
        var el11 = dom.createTextNode("A business intelligence and analytics platform that translates client and transactional data into actionable signal data");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n              ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","resume-column-right col-md-6");
        var el5 = dom.createTextNode("\n\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","resume-section");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"class","resume-section-header");
        var el7 = dom.createTextNode("Education");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"class","resume-section-body");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7,"class","resume-item");
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"class","resume-item-header row");
        var el9 = dom.createTextNode("\n                ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("div");
        dom.setAttribute(el9,"class","resume-item-header-left pull-left");
        var el10 = dom.createTextNode("\n                  ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("h1");
        dom.setAttribute(el10,"class","resume-item-position");
        var el11 = dom.createTextNode("University of Toronto - Trinity College");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                  ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("p");
        dom.setAttribute(el10,"class","resume-item-company");
        var el11 = dom.createElement("strong");
        var el12 = dom.createTextNode("Computer Science, B.Sc");
        dom.appendChild(el11, el12);
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                  ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("p");
        dom.setAttribute(el10,"class","resume-item-date");
        var el11 = dom.createElement("span");
        var el12 = dom.createTextNode("September 2011");
        dom.appendChild(el11, el12);
        dom.appendChild(el10, el11);
        var el11 = dom.createTextNode(" — ");
        dom.appendChild(el10, el11);
        var el11 = dom.createElement("span");
        var el12 = dom.createTextNode("Present");
        dom.appendChild(el11, el12);
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n              ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"class","resume-item-body");
        var el9 = dom.createTextNode("\n                ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("ul");
        dom.setAttribute(el9,"class","resume-item-details");
        var el10 = dom.createTextNode("\n                  ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("li");
        var el11 = dom.createTextNode("Professional Experience Year (PEY)");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                  ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("li");
        var el11 = dom.createTextNode("Work Abroad Program (WAP)");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n              ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","resume-section");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"class","resume-section-header");
        var el7 = dom.createTextNode("Awards");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"class","resume-section-body");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7,"class","resume-item");
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"class","resume-item-header row");
        var el9 = dom.createTextNode("\n                ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("div");
        dom.setAttribute(el9,"class","resume-item-header-left pull-left");
        var el10 = dom.createTextNode("\n                  ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("h1");
        dom.setAttribute(el10,"class","resume-item-position");
        var el11 = dom.createTextNode("RBC Royal Bank - Next Great Innovator ");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                  ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("p");
        dom.setAttribute(el10,"class","resume-item-company");
        var el11 = dom.createElement("strong");
        var el12 = dom.createTextNode("Finalist (2nd)");
        dom.appendChild(el11, el12);
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                  ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("p");
        dom.setAttribute(el10,"class","resume-item-date");
        var el11 = dom.createTextNode("June 2014");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n              ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7,"class","resume-item");
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"class","resume-item-header row");
        var el9 = dom.createTextNode("\n                ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("div");
        dom.setAttribute(el9,"class","resume-item-header-left pull-left");
        var el10 = dom.createTextNode("\n                  ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("h1");
        dom.setAttribute(el10,"class","resume-item-position");
        var el11 = dom.createTextNode("Eli Lilly - Clinical Trial Visualization Redesign");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                  ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("p");
        dom.setAttribute(el10,"class","resume-item-company");
        var el11 = dom.createElement("strong");
        var el12 = dom.createTextNode("Honourable Mention");
        dom.appendChild(el11, el12);
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                  ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("p");
        dom.setAttribute(el10,"class","resume-item-date");
        var el11 = dom.createTextNode("November 2013");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n              ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"class","resume-item-body");
        var el9 = dom.createTextNode("\n                ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("ul");
        dom.setAttribute(el9,"class","resume-item-details");
        var el10 = dom.createTextNode("\n                  ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("li");
        var el11 = dom.createTextNode("Received a $3,000 cash prize for the ");
        dom.appendChild(el10, el11);
        var el11 = dom.createElement("a");
        dom.setAttribute(el11,"href","http://challengepost.com/software/clinico");
        var el12 = dom.createTextNode("Clinico");
        dom.appendChild(el11, el12);
        dom.appendChild(el10, el11);
        var el11 = dom.createTextNode(" solution.");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n              ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n\n\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7,"class","resume-item");
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"class","resume-item-header row");
        var el9 = dom.createTextNode("\n                ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("div");
        dom.setAttribute(el9,"class","resume-item-header-left pull-left");
        var el10 = dom.createTextNode("\n                  ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("h1");
        dom.setAttribute(el10,"class","resume-item-position");
        var el11 = dom.createTextNode("BlackBerry Jam Camp");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                  ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("p");
        dom.setAttribute(el10,"class","resume-item-company");
        var el11 = dom.createElement("strong");
        var el12 = dom.createTextNode("Finalist (1st)");
        dom.appendChild(el11, el12);
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                  ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("p");
        dom.setAttribute(el10,"class","resume-item-date");
        var el11 = dom.createTextNode("September 2013");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n              ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"class","resume-item-body");
        var el9 = dom.createTextNode("\n                ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("ul");
        dom.setAttribute(el9,"class","resume-item-details");
        var el10 = dom.createTextNode("\n                  ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("li");
        var el11 = dom.createTextNode("Received four BlackBerry 10 devices and limited edition red, developer BlackBerry Z10 device for ");
        dom.appendChild(el10, el11);
        var el11 = dom.createElement("a");
        dom.setAttribute(el11,"href","http://bit.ly/karel-cella-bbw");
        var el12 = dom.createTextNode("Cella");
        dom.appendChild(el11, el12);
        dom.appendChild(el10, el11);
        var el11 = dom.createTextNode(".");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n              ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","resume-section");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"class","resume-section-header");
        var el7 = dom.createTextNode("Volunteer");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"class","resume-section-body");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7,"class","resume-item");
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"class","resume-item-header row");
        var el9 = dom.createTextNode("\n                ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("div");
        dom.setAttribute(el9,"class","resume-item-header-left pull-left");
        var el10 = dom.createTextNode("\n                  ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("h1");
        dom.setAttribute(el10,"class","resume-item-position");
        var el11 = dom.createTextNode("1 Million Music Moments");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                  ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("p");
        dom.setAttribute(el10,"class","resume-item-company");
        var el11 = dom.createElement("strong");
        var el12 = dom.createTextNode("Digital Director");
        dom.appendChild(el11, el12);
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                  ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("p");
        dom.setAttribute(el10,"class","resume-item-date");
        var el11 = dom.createElement("span");
        var el12 = dom.createTextNode("January 2014");
        dom.appendChild(el11, el12);
        dom.appendChild(el10, el11);
        var el11 = dom.createTextNode(" — ");
        dom.appendChild(el10, el11);
        var el11 = dom.createElement("span");
        var el12 = dom.createTextNode("Present");
        dom.appendChild(el11, el12);
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n              ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"class","resume-item-body");
        var el9 = dom.createTextNode("\n                ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("ul");
        dom.setAttribute(el9,"class","resume-item-details");
        var el10 = dom.createTextNode("\n                  ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("li");
        var el11 = dom.createTextNode("Defined brand identity across all print and digital mediums");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                  ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("li");
        var el11 = dom.createTextNode("\n                    ");
        dom.appendChild(el10, el11);
        var el11 = dom.createElement("a");
        dom.setAttribute(el11,"href","https://1MMM.org");
        var el12 = dom.createTextNode("Website");
        dom.appendChild(el11, el12);
        dom.appendChild(el10, el11);
        var el11 = dom.createTextNode(": Developed interactive, content driven feed that aggregates musical moments hashtagged with #1MMM from social media websites; AngularJS, PHP\n                  ");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n              ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7,"class","resume-item");
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"class","resume-item-header row");
        var el9 = dom.createTextNode("\n                ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("div");
        dom.setAttribute(el9,"class","resume-item-header-left pull-left");
        var el10 = dom.createTextNode("\n                  ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("h1");
        dom.setAttribute(el10,"class","resume-item-position");
        var el11 = dom.createTextNode("EdAppHack 2014");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                  ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("p");
        dom.setAttribute(el10,"class","resume-item-company");
        var el11 = dom.createElement("strong");
        var el12 = dom.createTextNode("Mentor");
        dom.appendChild(el11, el12);
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                  ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("p");
        dom.setAttribute(el10,"class","resume-item-date");
        var el11 = dom.createTextNode("October 2014");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n              ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"class","resume-item-body");
        var el9 = dom.createTextNode("\n                ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("ul");
        dom.setAttribute(el9,"class","resume-item-details");
        var el10 = dom.createTextNode("\n                  ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("li");
        var el11 = dom.createTextNode("Mentored group of secondary school students received an honourable mention for their application prototype, TimeLine.");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n              ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createMorphAt(dom.childAt(fragment, [0, 1]),5,5);
        content(env, morph0, context, "outlet");
        return fragment;
      }
    };
  }()));

});
define('karel/router', ['exports', 'ember', 'karel/config/environment'], function (exports, Ember, config) {

  'use strict';

  var Router = Ember['default'].Router.extend({
    location: config['default'].locationType
  });

  Router.map(function () {
    this.route("home", { path: "/" });
    this.route("about");
    this.route("equipment");
    this.resource("posts");
    this.route("post", { path: "/post" }, function () {
      this.route("website-redesign");
      this.route("design-analysis-zazzle-maker");
      this.route("design-analysis-blackberry-flow");
      this.route("design-analysis-zazzle-settings");
    });
    this.resource("portfolio", function () {
      this.route("themes");
      this.route("extensions");
      this.route("clients");
    });
    this.route("resume");
    this.route("error", { path: "*path" });
  });

  exports['default'] = Router;

});
define('karel/tests/app.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('app.js should pass jshint', function() { 
    ok(true, 'app.js should pass jshint.'); 
  });

});
define('karel/tests/helpers/resolver', ['exports', 'ember/resolver', 'karel/config/environment'], function (exports, Resolver, config) {

  'use strict';

  var resolver = Resolver['default'].create();

  resolver.namespace = {
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix
  };

  exports['default'] = resolver;

});
define('karel/tests/helpers/resolver.jshint', function () {

  'use strict';

  module('JSHint - helpers');
  test('helpers/resolver.js should pass jshint', function() { 
    ok(true, 'helpers/resolver.js should pass jshint.'); 
  });

});
define('karel/tests/helpers/start-app', ['exports', 'ember', 'karel/app', 'karel/router', 'karel/config/environment'], function (exports, Ember, Application, Router, config) {

  'use strict';



  exports['default'] = startApp;
  function startApp(attrs) {
    var application;

    var attributes = Ember['default'].merge({}, config['default'].APP);
    attributes = Ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    Ember['default'].run(function () {
      application = Application['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }

});
define('karel/tests/helpers/start-app.jshint', function () {

  'use strict';

  module('JSHint - helpers');
  test('helpers/start-app.js should pass jshint', function() { 
    ok(true, 'helpers/start-app.js should pass jshint.'); 
  });

});
define('karel/tests/mixins/reset-scroll.jshint', function () {

  'use strict';

  module('JSHint - mixins');
  test('mixins/reset-scroll.js should pass jshint', function() { 
    ok(true, 'mixins/reset-scroll.js should pass jshint.'); 
  });

});
define('karel/tests/pods/about/route.jshint', function () {

  'use strict';

  module('JSHint - pods/about');
  test('pods/about/route.js should pass jshint', function() { 
    ok(true, 'pods/about/route.js should pass jshint.'); 
  });

});
define('karel/tests/pods/application/adapter.jshint', function () {

  'use strict';

  module('JSHint - pods/application');
  test('pods/application/adapter.js should pass jshint', function() { 
    ok(true, 'pods/application/adapter.js should pass jshint.'); 
  });

});
define('karel/tests/pods/application/route.jshint', function () {

  'use strict';

  module('JSHint - pods/application');
  test('pods/application/route.js should pass jshint', function() { 
    ok(true, 'pods/application/route.js should pass jshint.'); 
  });

});
define('karel/tests/pods/equipment/route.jshint', function () {

  'use strict';

  module('JSHint - pods/equipment');
  test('pods/equipment/route.js should pass jshint', function() { 
    ok(true, 'pods/equipment/route.js should pass jshint.'); 
  });

});
define('karel/tests/pods/error/route.jshint', function () {

  'use strict';

  module('JSHint - pods/error');
  test('pods/error/route.js should pass jshint', function() { 
    ok(true, 'pods/error/route.js should pass jshint.'); 
  });

});
define('karel/tests/pods/home/controller.jshint', function () {

  'use strict';

  module('JSHint - pods/home');
  test('pods/home/controller.js should pass jshint', function() { 
    ok(true, 'pods/home/controller.js should pass jshint.'); 
  });

});
define('karel/tests/pods/home/route.jshint', function () {

  'use strict';

  module('JSHint - pods/home');
  test('pods/home/route.js should pass jshint', function() { 
    ok(true, 'pods/home/route.js should pass jshint.'); 
  });

});
define('karel/tests/pods/portfolio/clients/route.jshint', function () {

  'use strict';

  module('JSHint - pods/portfolio/clients');
  test('pods/portfolio/clients/route.js should pass jshint', function() { 
    ok(true, 'pods/portfolio/clients/route.js should pass jshint.'); 
  });

});
define('karel/tests/pods/portfolio/extensions/route.jshint', function () {

  'use strict';

  module('JSHint - pods/portfolio/extensions');
  test('pods/portfolio/extensions/route.js should pass jshint', function() { 
    ok(true, 'pods/portfolio/extensions/route.js should pass jshint.'); 
  });

});
define('karel/tests/pods/portfolio/index/route.jshint', function () {

  'use strict';

  module('JSHint - pods/portfolio/index');
  test('pods/portfolio/index/route.js should pass jshint', function() { 
    ok(true, 'pods/portfolio/index/route.js should pass jshint.'); 
  });

});
define('karel/tests/pods/portfolio/route.jshint', function () {

  'use strict';

  module('JSHint - pods/portfolio');
  test('pods/portfolio/route.js should pass jshint', function() { 
    ok(true, 'pods/portfolio/route.js should pass jshint.'); 
  });

});
define('karel/tests/pods/portfolio/themes/route.jshint', function () {

  'use strict';

  module('JSHint - pods/portfolio/themes');
  test('pods/portfolio/themes/route.js should pass jshint', function() { 
    ok(true, 'pods/portfolio/themes/route.js should pass jshint.'); 
  });

});
define('karel/tests/pods/post-answer/model.jshint', function () {

  'use strict';

  module('JSHint - pods/post-answer');
  test('pods/post-answer/model.js should pass jshint', function() { 
    ok(true, 'pods/post-answer/model.js should pass jshint.'); 
  });

});
define('karel/tests/pods/post-article/model.jshint', function () {

  'use strict';

  module('JSHint - pods/post-article');
  test('pods/post-article/model.js should pass jshint', function() { 
    ok(true, 'pods/post-article/model.js should pass jshint.'); 
  });

});
define('karel/tests/pods/post/controller.jshint', function () {

  'use strict';

  module('JSHint - pods/post');
  test('pods/post/controller.js should pass jshint', function() { 
    ok(true, 'pods/post/controller.js should pass jshint.'); 
  });

});
define('karel/tests/pods/post/design-analysis-blackberry-flow/route.jshint', function () {

  'use strict';

  module('JSHint - pods/post/design-analysis-blackberry-flow');
  test('pods/post/design-analysis-blackberry-flow/route.js should pass jshint', function() { 
    ok(true, 'pods/post/design-analysis-blackberry-flow/route.js should pass jshint.'); 
  });

});
define('karel/tests/pods/post/design-analysis-zazzle-maker/route.jshint', function () {

  'use strict';

  module('JSHint - pods/post/design-analysis-zazzle-maker');
  test('pods/post/design-analysis-zazzle-maker/route.js should pass jshint', function() { 
    ok(true, 'pods/post/design-analysis-zazzle-maker/route.js should pass jshint.'); 
  });

});
define('karel/tests/pods/post/design-analysis-zazzle-settings/route.jshint', function () {

  'use strict';

  module('JSHint - pods/post/design-analysis-zazzle-settings');
  test('pods/post/design-analysis-zazzle-settings/route.js should pass jshint', function() { 
    ok(true, 'pods/post/design-analysis-zazzle-settings/route.js should pass jshint.'); 
  });

});
define('karel/tests/pods/post/model.jshint', function () {

  'use strict';

  module('JSHint - pods/post');
  test('pods/post/model.js should pass jshint', function() { 
    ok(true, 'pods/post/model.js should pass jshint.'); 
  });

});
define('karel/tests/pods/post/route.jshint', function () {

  'use strict';

  module('JSHint - pods/post');
  test('pods/post/route.js should pass jshint', function() { 
    ok(true, 'pods/post/route.js should pass jshint.'); 
  });

});
define('karel/tests/pods/post/website-redesign/route.jshint', function () {

  'use strict';

  module('JSHint - pods/post/website-redesign');
  test('pods/post/website-redesign/route.js should pass jshint', function() { 
    ok(true, 'pods/post/website-redesign/route.js should pass jshint.'); 
  });

});
define('karel/tests/pods/posts/controller.jshint', function () {

  'use strict';

  module('JSHint - pods/posts');
  test('pods/posts/controller.js should pass jshint', function() { 
    ok(true, 'pods/posts/controller.js should pass jshint.'); 
  });

});
define('karel/tests/pods/posts/route.jshint', function () {

  'use strict';

  module('JSHint - pods/posts');
  test('pods/posts/route.js should pass jshint', function() { 
    ok(true, 'pods/posts/route.js should pass jshint.'); 
  });

});
define('karel/tests/pods/resume/controller.jshint', function () {

  'use strict';

  module('JSHint - pods/resume');
  test('pods/resume/controller.js should pass jshint', function() { 
    ok(true, 'pods/resume/controller.js should pass jshint.'); 
  });

});
define('karel/tests/pods/resume/route.jshint', function () {

  'use strict';

  module('JSHint - pods/resume');
  test('pods/resume/route.js should pass jshint', function() { 
    ok(true, 'pods/resume/route.js should pass jshint.'); 
  });

});
define('karel/tests/router.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('router.js should pass jshint', function() { 
    ok(true, 'router.js should pass jshint.'); 
  });

});
define('karel/tests/test-helper', ['karel/tests/helpers/resolver', 'ember-qunit'], function (resolver, ember_qunit) {

	'use strict';

	ember_qunit.setResolver(resolver['default']);

});
define('karel/tests/test-helper.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('test-helper.js should pass jshint', function() { 
    ok(true, 'test-helper.js should pass jshint.'); 
  });

});
define('karel/tests/unit/mixins/reset-scroll-test', ['ember', 'karel/mixins/reset-scroll', 'qunit'], function (Ember, ResetScrollMixin, qunit) {

  'use strict';

  qunit.module("ResetScrollMixin");

  // Replace this with your real tests.
  qunit.test("it works", function (assert) {
    var ResetScrollObject = Ember['default'].Object.extend(ResetScrollMixin['default']);
    var subject = ResetScrollObject.create();
    assert.ok(subject);
  });

});
define('karel/tests/unit/mixins/reset-scroll-test.jshint', function () {

  'use strict';

  module('JSHint - unit/mixins');
  test('unit/mixins/reset-scroll-test.js should pass jshint', function() { 
    ok(true, 'unit/mixins/reset-scroll-test.js should pass jshint.'); 
  });

});
define('karel/tests/unit/pods/about/route-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("route:about", "AboutRoute", {});

  ember_qunit.test("it exists", function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('karel/tests/unit/pods/about/route-test.jshint', function () {

  'use strict';

  module('JSHint - unit/pods/about');
  test('unit/pods/about/route-test.js should pass jshint', function() { 
    ok(true, 'unit/pods/about/route-test.js should pass jshint.'); 
  });

});
define('karel/tests/unit/pods/application/adapter-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("adapter:application", "ApplicationAdapter", {});

  // Replace this with your real tests.
  ember_qunit.test("it exists", function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });

  // Specify the other units that are required for this test.
  // needs: ['serializer:foo']

});
define('karel/tests/unit/pods/application/adapter-test.jshint', function () {

  'use strict';

  module('JSHint - unit/pods/application');
  test('unit/pods/application/adapter-test.js should pass jshint', function() { 
    ok(true, 'unit/pods/application/adapter-test.js should pass jshint.'); 
  });

});
define('karel/tests/unit/pods/application/route-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("route:application", {});

  ember_qunit.test("it exists", function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('karel/tests/unit/pods/application/route-test.jshint', function () {

  'use strict';

  module('JSHint - unit/pods/application');
  test('unit/pods/application/route-test.js should pass jshint', function() { 
    ok(true, 'unit/pods/application/route-test.js should pass jshint.'); 
  });

});
define('karel/tests/unit/pods/equipment/route-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("route:equipment", "EquipmentRoute", {});

  ember_qunit.test("it exists", function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('karel/tests/unit/pods/equipment/route-test.jshint', function () {

  'use strict';

  module('JSHint - unit/pods/equipment');
  test('unit/pods/equipment/route-test.js should pass jshint', function() { 
    ok(true, 'unit/pods/equipment/route-test.js should pass jshint.'); 
  });

});
define('karel/tests/unit/pods/error/route-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("route:error", {});

  ember_qunit.test("it exists", function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('karel/tests/unit/pods/error/route-test.jshint', function () {

  'use strict';

  module('JSHint - unit/pods/error');
  test('unit/pods/error/route-test.js should pass jshint', function() { 
    ok(true, 'unit/pods/error/route-test.js should pass jshint.'); 
  });

});
define('karel/tests/unit/pods/home/route-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("route:home", "HomeRoute", {});

  ember_qunit.test("it exists", function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('karel/tests/unit/pods/home/route-test.jshint', function () {

  'use strict';

  module('JSHint - unit/pods/home');
  test('unit/pods/home/route-test.js should pass jshint', function() { 
    ok(true, 'unit/pods/home/route-test.js should pass jshint.'); 
  });

});
define('karel/tests/unit/pods/portfolio/clients/route-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("route:portfolio/clients", {});

  ember_qunit.test("it exists", function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('karel/tests/unit/pods/portfolio/clients/route-test.jshint', function () {

  'use strict';

  module('JSHint - unit/pods/portfolio/clients');
  test('unit/pods/portfolio/clients/route-test.js should pass jshint', function() { 
    ok(true, 'unit/pods/portfolio/clients/route-test.js should pass jshint.'); 
  });

});
define('karel/tests/unit/pods/portfolio/extensions/route-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("route:portfolio/extensions", {});

  ember_qunit.test("it exists", function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('karel/tests/unit/pods/portfolio/extensions/route-test.jshint', function () {

  'use strict';

  module('JSHint - unit/pods/portfolio/extensions');
  test('unit/pods/portfolio/extensions/route-test.js should pass jshint', function() { 
    ok(true, 'unit/pods/portfolio/extensions/route-test.js should pass jshint.'); 
  });

});
define('karel/tests/unit/pods/portfolio/index/route-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("route:portfolio/index", {});

  ember_qunit.test("it exists", function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('karel/tests/unit/pods/portfolio/index/route-test.jshint', function () {

  'use strict';

  module('JSHint - unit/pods/portfolio/index');
  test('unit/pods/portfolio/index/route-test.js should pass jshint', function() { 
    ok(true, 'unit/pods/portfolio/index/route-test.js should pass jshint.'); 
  });

});
define('karel/tests/unit/pods/portfolio/route-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("route:portfolio", "PortfolioRoute", {});

  ember_qunit.test("it exists", function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('karel/tests/unit/pods/portfolio/route-test.jshint', function () {

  'use strict';

  module('JSHint - unit/pods/portfolio');
  test('unit/pods/portfolio/route-test.js should pass jshint', function() { 
    ok(true, 'unit/pods/portfolio/route-test.js should pass jshint.'); 
  });

});
define('karel/tests/unit/pods/portfolio/themes/route-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("route:portfolio/themes", {});

  ember_qunit.test("it exists", function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('karel/tests/unit/pods/portfolio/themes/route-test.jshint', function () {

  'use strict';

  module('JSHint - unit/pods/portfolio/themes');
  test('unit/pods/portfolio/themes/route-test.js should pass jshint', function() { 
    ok(true, 'unit/pods/portfolio/themes/route-test.js should pass jshint.'); 
  });

});
define('karel/tests/unit/pods/post-answer/model-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel("post-answer", {
    // Specify the other units that are required for this test.
    needs: []
  });

  ember_qunit.test("it exists", function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });

});
define('karel/tests/unit/pods/post-answer/model-test.jshint', function () {

  'use strict';

  module('JSHint - unit/pods/post-answer');
  test('unit/pods/post-answer/model-test.js should pass jshint', function() { 
    ok(true, 'unit/pods/post-answer/model-test.js should pass jshint.'); 
  });

});
define('karel/tests/unit/pods/post-article/model-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel("post-article", {
    // Specify the other units that are required for this test.
    needs: []
  });

  ember_qunit.test("it exists", function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });

});
define('karel/tests/unit/pods/post-article/model-test.jshint', function () {

  'use strict';

  module('JSHint - unit/pods/post-article');
  test('unit/pods/post-article/model-test.js should pass jshint', function() { 
    ok(true, 'unit/pods/post-article/model-test.js should pass jshint.'); 
  });

});
define('karel/tests/unit/pods/post/controller-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("controller:post", {});

  // Replace this with your real tests.
  ember_qunit.test("it exists", function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('karel/tests/unit/pods/post/controller-test.jshint', function () {

  'use strict';

  module('JSHint - unit/pods/post');
  test('unit/pods/post/controller-test.js should pass jshint', function() { 
    ok(true, 'unit/pods/post/controller-test.js should pass jshint.'); 
  });

});
define('karel/tests/unit/pods/post/design-analysis-blackberry-flow/route-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("route:post.design-analysis-blackberry-flow", {});

  ember_qunit.test("it exists", function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('karel/tests/unit/pods/post/design-analysis-blackberry-flow/route-test.jshint', function () {

  'use strict';

  module('JSHint - unit/pods/post/design-analysis-blackberry-flow');
  test('unit/pods/post/design-analysis-blackberry-flow/route-test.js should pass jshint', function() { 
    ok(true, 'unit/pods/post/design-analysis-blackberry-flow/route-test.js should pass jshint.'); 
  });

});
define('karel/tests/unit/pods/post/design-analysis-zazzle-maker/route-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("route:post.design-analysis-zazzle-maker", {});

  ember_qunit.test("it exists", function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('karel/tests/unit/pods/post/design-analysis-zazzle-maker/route-test.jshint', function () {

  'use strict';

  module('JSHint - unit/pods/post/design-analysis-zazzle-maker');
  test('unit/pods/post/design-analysis-zazzle-maker/route-test.js should pass jshint', function() { 
    ok(true, 'unit/pods/post/design-analysis-zazzle-maker/route-test.js should pass jshint.'); 
  });

});
define('karel/tests/unit/pods/post/design-analysis-zazzle-settings/route-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("route:post/design-analysis-zazzle-settings", {});

  ember_qunit.test("it exists", function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('karel/tests/unit/pods/post/design-analysis-zazzle-settings/route-test.jshint', function () {

  'use strict';

  module('JSHint - unit/pods/post/design-analysis-zazzle-settings');
  test('unit/pods/post/design-analysis-zazzle-settings/route-test.js should pass jshint', function() { 
    ok(true, 'unit/pods/post/design-analysis-zazzle-settings/route-test.js should pass jshint.'); 
  });

});
define('karel/tests/unit/pods/post/model-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel("post", {
    // Specify the other units that are required for this test.
    needs: []
  });

  ember_qunit.test("it exists", function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });

});
define('karel/tests/unit/pods/post/model-test.jshint', function () {

  'use strict';

  module('JSHint - unit/pods/post');
  test('unit/pods/post/model-test.js should pass jshint', function() { 
    ok(true, 'unit/pods/post/model-test.js should pass jshint.'); 
  });

});
define('karel/tests/unit/pods/post/route-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("route:post", {});

  ember_qunit.test("it exists", function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('karel/tests/unit/pods/post/route-test.jshint', function () {

  'use strict';

  module('JSHint - unit/pods/post');
  test('unit/pods/post/route-test.js should pass jshint', function() { 
    ok(true, 'unit/pods/post/route-test.js should pass jshint.'); 
  });

});
define('karel/tests/unit/pods/post/website-redesign/route-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("route:post.website-redesign", {});

  ember_qunit.test("it exists", function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('karel/tests/unit/pods/post/website-redesign/route-test.jshint', function () {

  'use strict';

  module('JSHint - unit/pods/post/website-redesign');
  test('unit/pods/post/website-redesign/route-test.js should pass jshint', function() { 
    ok(true, 'unit/pods/post/website-redesign/route-test.js should pass jshint.'); 
  });

});
define('karel/tests/unit/pods/posts/controller-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("controller:posts", {});

  // Replace this with your real tests.
  ember_qunit.test("it exists", function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('karel/tests/unit/pods/posts/controller-test.jshint', function () {

  'use strict';

  module('JSHint - unit/pods/posts');
  test('unit/pods/posts/controller-test.js should pass jshint', function() { 
    ok(true, 'unit/pods/posts/controller-test.js should pass jshint.'); 
  });

});
define('karel/tests/unit/pods/posts/route-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("route:posts", "PostsRoute", {});

  ember_qunit.test("it exists", function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('karel/tests/unit/pods/posts/route-test.jshint', function () {

  'use strict';

  module('JSHint - unit/pods/posts');
  test('unit/pods/posts/route-test.js should pass jshint', function() { 
    ok(true, 'unit/pods/posts/route-test.js should pass jshint.'); 
  });

});
define('karel/tests/unit/pods/resume/controller-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("controller:resume", "ResumeController", {});

  // Replace this with your real tests.
  ember_qunit.test("it exists", function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('karel/tests/unit/pods/resume/controller-test.jshint', function () {

  'use strict';

  module('JSHint - unit/pods/resume');
  test('unit/pods/resume/controller-test.js should pass jshint', function() { 
    ok(true, 'unit/pods/resume/controller-test.js should pass jshint.'); 
  });

});
define('karel/tests/unit/pods/resume/route-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("route:resume", "ResumeRoute", {});

  ember_qunit.test("it exists", function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('karel/tests/unit/pods/resume/route-test.jshint', function () {

  'use strict';

  module('JSHint - unit/pods/resume');
  test('unit/pods/resume/route-test.js should pass jshint', function() { 
    ok(true, 'unit/pods/resume/route-test.js should pass jshint.'); 
  });

});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('karel/config/environment', ['ember'], function(Ember) {
  var prefix = 'karel';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("karel/tests/test-helper");
} else {
  require("karel/app")["default"].create({"name":"karel","version":"0.0.0.169ed8b9"});
}

/* jshint ignore:end */
//# sourceMappingURL=karel.map