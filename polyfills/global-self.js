// Global polyfill for self in Node.js environment
// This must be loaded before any other modules that might use 'self'

if (typeof global !== 'undefined' && typeof self === 'undefined') {
  // Create a more complete self object that mimics browser behavior
  const selfPolyfill = {
    // Basic properties
    ...global,
    
    // Browser-like properties
    window: undefined,
    document: undefined,
    location: undefined,
    navigator: undefined,
    
    // Webpack chunk loading support
    webpackChunk_N_E: [],
    
    // Common browser globals that might be expected
    setTimeout: global.setTimeout,
    clearTimeout: global.clearTimeout,
    setInterval: global.setInterval,
    clearInterval: global.clearInterval,
    
    // Self-reference
    self: undefined
  };
  
  // Set self-reference
  selfPolyfill.self = selfPolyfill;
  
  // Assign to global
  global.self = selfPolyfill;
}