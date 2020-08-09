import { expect } from '@glimmer/util';
/**
  @module @ember/debug
*/

/**
  Ember Inspector calls this function to capture the current render tree.

  In production mode, this requires turning on `ENV._DEBUG_RENDER_TREE`
  before loading Ember.

  @private
  @static
  @method captureRenderTree
  @for @ember/debug
  @param app {ApplicationInstance} An `ApplicationInstance`.
  @since 3.14.0
*/

export default function captureRenderTree(app) {
  let env = expect(app.lookup('service:-glimmer-environment'), 'BUG: owner is missing service:-glimmer-environment');
  return env.debugRenderTree.capture();
}
